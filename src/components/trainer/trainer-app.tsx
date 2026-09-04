import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  BookOpen,
  Divide,
  Flag,
  Minus,
  Moon,
  Percent,
  Plus,
  Sun,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ChallengeDialog } from "@/components/trainer/challenge-dialog";
import { ProblemCard } from "@/components/trainer/problem-card";
import { SessionTimer } from "@/components/trainer/session-timer";
import { TricksContent, TricksPanel } from "@/components/trainer/tricks-panel";
import { WalkthroughCard } from "@/components/trainer/walkthrough-card";
import { generateProblem } from "@/lib/math/generate";
import type { Level, Op, Problem, Walkthrough } from "@/lib/math/types";
import { LEVELS, OP_META, answersMatch, formatNum } from "@/lib/math/types";
import { buildWalkthrough } from "@/lib/math/walkthrough";
import { loadState, saveState, saveTheme, type PersistedStats } from "@/lib/storage";
import { cn } from "@/lib/utils";

const OPS: { id: Op; icon: typeof Plus }[] = [
  { id: "add", icon: Plus },
  { id: "sub", icon: Minus },
  { id: "mul", icon: X },
  { id: "div", icon: Divide },
  { id: "pct", icon: Percent },
];

export function TrainerApp() {
  const [booted, setBooted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [op, setOp] = useState<Op>("pct");
  const [level, setLevel] = useState<Level>(2);
  const [problem, setProblem] = useState<Problem | null>(null);
  const [value, setValue] = useState("");
  const [stats, setStats] = useState<PersistedStats>({
    correct: 0,
    streak: 0,
    bestStreak: 0,
    total: 0,
    challengeBest: 0,
  });
  const [walk, setWalk] = useState<Walkthrough | null>(null);
  const [feedback, setFeedback] = useState<{
    correct: boolean;
    message: string;
    detail: string;
  } | null>(null);
  const [durationMin, setDurationMin] = useState(10);
  const [remaining, setRemaining] = useState(10 * 60);
  const [running, setRunning] = useState(false);
  const [expired, setExpired] = useState(false);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);
  const [challengeOpen, setChallengeOpen] = useState(false);
  const [tricksOpen, setTricksOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const endAt = useRef<number | null>(null);
  const locked = expired;

  useEffect(() => {
    const boot = loadState();
    setTheme(boot.theme);
    setOp(boot.op);
    setLevel(boot.level);
    setStats(boot.stats);
    setDurationMin(boot.timerMinutes);
    setRemaining(boot.timerMinutes * 60);
    setProblem(generateProblem(boot.op, boot.level));
    setBooted(true);
  }, []);

  useEffect(() => {
    if (!booted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    saveTheme(theme);
  }, [theme, booted]);

  useEffect(() => {
    if (!booted) return;
    saveState({ theme, op, level, timerMinutes: durationMin, stats });
  }, [theme, op, level, durationMin, stats, booted]);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      if (!endAt.current) return;
      const left = Math.max(0, Math.round((endAt.current - Date.now()) / 1000));
      setRemaining(left);
      if (left === 0) {
        endAt.current = null;
        setRunning(false);
        setExpired(true);
      }
    }, 250);
    return () => window.clearInterval(id);
  }, [running]);

  function nextProblem(nextOp = op, nextLevel = level) {
    setProblem(generateProblem(nextOp, nextLevel));
    setProblem(generateProblem(nextOp, nextLevel));
    setValue("");
    setFeedback(null);
    setWalk(null);
    window.setTimeout(() => inputRef.current?.focus(), 0);
  }

  function changeOp(next: Op) {
    setOp(next);
    nextProblem(next, level);
  }

  function changeLevel(next: Level) {
    setLevel(next);
    nextProblem(op, next);
  }

  function startTimer() {
    if (remaining <= 0) return;
    endAt.current = Date.now() + remaining * 1000;
    setExpired(false);
    setRunning(true);
  }

  function pauseTimer() {
    if (endAt.current) {
      setRemaining(Math.max(0, Math.round((endAt.current - Date.now()) / 1000)));
    }
    endAt.current = null;
    setRunning(false);
  }

  function resetTimer() {
    endAt.current = null;
    setRunning(false);
    setExpired(false);
    setRemaining(durationMin * 60);
    setSessionCorrect(0);
    setSessionTotal(0);
  }

  function setMinutes(min: number) {
    if (running) return;
    setDurationMin(min);
    setRemaining(min * 60);
    setExpired(false);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (locked || !problem) return;
    const ok = answersMatch(value, problem.answer);
    setStats((prev) => {
      const streak = ok ? prev.streak + 1 : 0;
      return {
        ...prev,
        total: prev.total + 1,
        correct: prev.correct + (ok ? 1 : 0),
        streak,
        bestStreak: Math.max(prev.bestStreak, streak),
      };
    });
    setSessionTotal((n) => n + 1);
    if (ok) setSessionCorrect((n) => n + 1);
    setFeedback({
      correct: ok,
      message: ok ? "Correct" : "Not this time",
      detail: ok
        ? `Streak ${stats.streak + 1}. Keep the running total going.`
        : `Walk the steps below, then try a new one.`,
    });
    setWalk(buildWalkthrough(problem));
    if (ok) {
      window.setTimeout(() => nextProblem(), 900);
    }
  }

  function onChallengeFinished(correct: number) {
    setStats((prev) => ({
      ...prev,
      challengeBest: Math.max(prev.challengeBest, correct),
    }));
  }

  function openChallenge() {
    if (running) pauseTimer();
    setChallengeOpen(true);
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <Percent className="size-4" />
              </span>
              <div className="min-w-0">
                <h1 className="font-display text-lg font-semibold leading-none tracking-tight sm:text-xl">
                  MentalMath Pro
                </h1>
                <p className="hidden text-xs text-muted-foreground sm:block">
                  Percent, multiply, divide, add
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Button
                type="button"
                variant="outline"
                className="h-11 px-3"
                onClick={() => setTricksOpen(true)}
              >
                <BookOpen className="size-4" />
                <span className="hidden sm:inline">Tricks</span>
              </Button>
              <Button type="button" className="h-11 px-3" onClick={openChallenge}>
                <Flag className="size-4" />
                Challenge
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              >
                {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </Button>
            </div>
          </div>
          <SessionTimer
            remaining={remaining}
            durationMin={durationMin}
            running={running}
            expired={expired}
            onStart={startTimer}
            onPause={pauseTimer}
            onReset={resetTimer}
            onDuration={setMinutes}
          />
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <div className="space-y-5">
          <Card>
            <CardContent className="space-y-5 p-5">
              <div>
                <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Skill
                </div>
                <div className="flex gap-1 overflow-x-auto">
                  {OPS.map(({ id, icon: Icon }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => changeOp(id)}
                      className={cn(
                        "flex h-11 shrink-0 items-center gap-1.5 rounded-full px-3.5 text-sm font-medium transition-colors duration-150",
                        op === id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:text-foreground",
                      )}
                    >
                      <Icon className="size-3.5" />
                      {OP_META[id].short}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Level
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {LEVELS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => changeLevel(item.id)}
                      className={cn(
                        "flex h-14 flex-col items-center justify-center rounded-lg border px-2 transition-colors duration-150",
                        level === item.id
                          ? "border-primary bg-muted text-foreground"
                          : "border-border text-muted-foreground hover:text-foreground",
                      )}
                    >
                      <span className="text-sm font-semibold">{item.title}</span>
                      <span className="text-xs opacity-80">{item.subtitle}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 border-t border-border pt-4">
                <Stat label="Correct" value={stats.correct} />
                <Stat label="Streak" value={stats.streak} accent />
                <Stat label="Solved" value={stats.total} />
              </div>
            </CardContent>
          </Card>

          {problem ? (
            <ProblemCard
              problem={problem}
              inputRef={inputRef}
              value={value}
              onValue={setValue}
              onSubmit={handleSubmit}
              onSkip={() => nextProblem()}
              locked={locked}
              feedback={feedback}
            />
          ) : (
            <Card>
              <CardContent className="flex h-64 items-center justify-center text-sm text-muted-foreground">
                Loading a problem…
              </CardContent>
            </Card>
          )}

          {walk ? <WalkthroughCard walk={walk} /> : null}
        </div>

        <div className="hidden lg:block">
          <TricksPanel op={op} />
        </div>
      </main>

      <Sheet open={tricksOpen} onOpenChange={setTricksOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{OP_META[op].label} tricks</SheetTitle>
          </SheetHeader>
          <div className="custom-scrollbar flex-1 overflow-y-auto px-6 pb-8">
            <TricksContent op={op} />
          </div>
        </SheetContent>
      </Sheet>

      <ChallengeDialog
        open={challengeOpen}
        onOpenChange={setChallengeOpen}
        level={level}
        onFinished={onChallengeFinished}
      />

      <Dialog open={expired} onOpenChange={(open) => !open && resetTimer()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Time is up</DialogTitle>
            <DialogDescription>
              Optional practice timer finished. Your session score is below — reset to keep going.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-md bg-muted px-4 py-3">
              <div className="text-xs uppercase tracking-wide text-muted-foreground">Correct</div>
              <div className="font-display text-2xl font-semibold tabular-nums">{sessionCorrect}</div>
            </div>
            <div className="rounded-md bg-muted px-4 py-3">
              <div className="text-xs uppercase tracking-wide text-muted-foreground">Attempted</div>
              <div className="font-display text-2xl font-semibold tabular-nums">{sessionTotal}</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Best streak this device: {stats.bestStreak}. Challenge best: {stats.challengeBest}/5.
          </p>
          <div className="flex justify-end">
            <Button type="button" onClick={resetTimer}>
              Reset timer
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="rounded-md bg-muted px-2 py-3 text-center">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div
        className={cn(
          "font-display text-xl font-semibold tabular-nums",
          accent ? "text-primary" : "text-foreground",
        )}
      >
        {formatNum(value)}
      </div>
    </div>
  );
}
