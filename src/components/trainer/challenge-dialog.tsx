import { useEffect, useRef, useState, type FormEvent } from "react";
import { Flag, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { generateChallenge } from "@/lib/math/generate";
import type { Level, Problem, Walkthrough } from "@/lib/math/types";
import { answersMatch, formatNum, OP_META, problemPrompt } from "@/lib/math/types";
import { buildWalkthrough } from "@/lib/math/walkthrough";
import { cn, formatClock } from "@/lib/utils";

const CHALLENGE_SECONDS = 10 * 60;
const QUESTION_COUNT = 5;

interface ChallengeResult {
  problem: Problem;
  given: string;
  correct: boolean;
  walk: Walkthrough;
}

interface ChallengeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  level: Level;
  onFinished: (correct: number) => void;
}

type Phase = "intro" | "play" | "done";

export function ChallengeDialog({ open, onOpenChange, level, onFinished }: ChallengeDialogProps) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [questions, setQuestions] = useState<Problem[]>([]);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [remaining, setRemaining] = useState(CHALLENGE_SECONDS);
  const [results, setResults] = useState<ChallengeResult[]>([]);
  const [flash, setFlash] = useState<"ok" | "no" | null>(null);
  const endAt = useRef<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const finishedRef = useRef(false);
  const resultsRef = useRef<ChallengeResult[]>([]);

  useEffect(() => {
    if (!open) {
      setPhase("intro");
      setQuestions([]);
      setIndex(0);
      setValue("");
      setRemaining(CHALLENGE_SECONDS);
      setResults([]);
      setFlash(null);
      endAt.current = null;
      finishedRef.current = false;
      resultsRef.current = [];
    }
  }, [open]);

  useEffect(() => {
    if (phase !== "play") return;
    const id = window.setInterval(() => {
      if (!endAt.current) return;
      const left = Math.max(0, Math.round((endAt.current - Date.now()) / 1000));
      setRemaining(left);
      if (left === 0) wrapUp();
    }, 250);
    return () => window.clearInterval(id);
    // wrapUp is stable enough for this interval; we read latest via refs/state setters
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  useEffect(() => {
    if (phase === "play") {
      inputRef.current?.focus();
    }
  }, [phase, index]);

  function begin() {
    finishedRef.current = false;
    resultsRef.current = [];
    setQuestions(generateChallenge(level));
    setIndex(0);
    setValue("");
    setResults([]);
    setRemaining(CHALLENGE_SECONDS);
    endAt.current = Date.now() + CHALLENGE_SECONDS * 1000;
    setPhase("play");
  }

  function wrapUp(finalResults?: ChallengeResult[]) {
    if (finishedRef.current) return;
    finishedRef.current = true;
    endAt.current = null;
    const list = finalResults ?? resultsRef.current;
    resultsRef.current = list;
    setResults(list);
    setPhase("done");
    const correct = list.filter((r) => r.correct).length;
    onFinished(correct);
  }

  function submitAnswer(event: FormEvent) {
    event.preventDefault();
    const problem = questions[index];
    if (!problem || flash) return;
    const correct = answersMatch(value, problem.answer);
    const entry: ChallengeResult = {
      problem,
      given: value.trim() || "—",
      correct,
      walk: buildWalkthrough(problem),
    };
    const nextResults = [...results, entry];
    resultsRef.current = nextResults;
    setResults(nextResults);
    setFlash(correct ? "ok" : "no");
    window.setTimeout(() => {
      setFlash(null);
      setValue("");
      if (index + 1 >= QUESTION_COUNT) {
        wrapUp(nextResults);
      } else {
        setIndex((i) => i + 1);
      }
    }, 650);
  }

  const current = questions[index];
  const correctCount = results.filter((r) => r.correct).length;
  const elapsed = CHALLENGE_SECONDS - remaining;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90dvh] overflow-y-auto sm:max-w-xl">
        {phase === "intro" ? (
          <>
            <DialogHeader>
              <DialogTitle>5-question challenge</DialogTitle>
              <DialogDescription>
                Ten minutes on the clock. One problem from each skill: add, subtract, multiply,
                divide, and percent. Use whatever tricks you like.
              </DialogDescription>
            </DialogHeader>
            <ul className="grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <li className="rounded-md bg-muted px-3 py-2">5 mixed questions</li>
              <li className="rounded-md bg-muted px-3 py-2">10-minute timer</li>
              <li className="rounded-md bg-muted px-3 py-2">Current difficulty: Level {level}</li>
              <li className="rounded-md bg-muted px-3 py-2">Review with tricks at the end</li>
            </ul>
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Not now
              </Button>
              <Button type="button" onClick={begin}>
                <Flag className="size-4" />
                Begin challenge
              </Button>
            </div>
          </>
        ) : null}

        {phase === "play" && current ? (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between gap-3 pr-8">
                <span>
                  Question {index + 1} of {QUESTION_COUNT}
                </span>
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 font-mono text-base font-medium tabular-nums",
                    remaining <= 60 ? "text-destructive" : "text-primary",
                  )}
                >
                  <Timer className="size-4" />
                  {formatClock(remaining)}
                </span>
              </DialogTitle>
              <DialogDescription>
                {OP_META[current.op].label} · answer before the clock runs out
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center gap-1.5" aria-hidden>
              {Array.from({ length: QUESTION_COUNT }).map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-1.5 w-8 rounded-full",
                    i < index
                      ? "bg-primary"
                      : i === index
                        ? "bg-primary/60"
                        : "bg-muted",
                  )}
                />
              ))}
            </div>
            <div className="rounded-lg bg-muted px-4 py-6 text-center">
              <p className="font-display text-3xl font-semibold tabular-nums sm:text-4xl">
                {problemPrompt(current)}
              </p>
            </div>
            <form onSubmit={submitAnswer} className="space-y-3">
              <Input
                ref={inputRef}
                inputMode="decimal"
                autoComplete="off"
                placeholder="Your answer"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={flash !== null}
                className="h-14 text-center font-mono text-2xl tabular-nums"
              />
              <Button type="submit" className="h-12 w-full" disabled={flash !== null || value.trim() === ""}>
                Lock in
              </Button>
            </form>
            {flash ? (
              <p
                className={cn(
                  "text-center text-sm font-medium",
                  flash === "ok" ? "text-success" : "text-destructive",
                )}
                role="status"
              >
                {flash === "ok" ? "Correct" : `The answer was ${formatNum(current.answer)}`}
              </p>
            ) : null}
          </>
        ) : null}

        {phase === "done" ? (
          <>
            <DialogHeader>
              <DialogTitle>Challenge complete</DialogTitle>
              <DialogDescription>
                {correctCount} of {QUESTION_COUNT} correct
                {remaining === 0 && results.length < QUESTION_COUNT
                  ? " · time ran out"
                  : ` · ${formatClock(elapsed)} used`}
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-end justify-between rounded-lg bg-muted px-4 py-3">
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Score</div>
                <div className="font-display text-3xl font-semibold tabular-nums">
                  {correctCount}/{QUESTION_COUNT}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Time</div>
                <div className="font-mono text-lg tabular-nums">{formatClock(elapsed)}</div>
              </div>
            </div>
            <ol className="space-y-3">
              {results.map((r, i) => (
                <li key={r.problem.id} className="rounded-md border border-border px-3 py-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs text-muted-foreground">
                        {i + 1}. {OP_META[r.problem.op].label}
                      </div>
                      <div className="font-mono text-sm tabular-nums">
                        {problemPrompt(r.problem)} = {formatNum(r.problem.answer)}
                      </div>
                      {!r.correct ? (
                        <div className="text-xs text-destructive">You entered {r.given}</div>
                      ) : null}
                    </div>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-xs font-medium",
                        r.correct ? "bg-success-bg text-success" : "bg-danger-bg text-destructive",
                      )}
                    >
                      {r.correct ? "Correct" : "Miss"}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">{r.walk.title}. </span>
                    {r.walk.summary}
                  </p>
                </li>
              ))}
            </ol>
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Close
              </Button>
              <Button type="button" onClick={begin}>
                Try again
              </Button>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
