import type { FormEvent, RefObject } from "react";
import { Check, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { Problem } from "@/lib/math/types";
import { formatNum, problemParts } from "@/lib/math/types";
import { cn } from "@/lib/utils";

interface ProblemCardProps {
  problem: Problem;
  inputRef: RefObject<HTMLInputElement | null>;
  value: string;
  onValue: (next: string) => void;
  onSubmit: (event: FormEvent) => void;
  onSkip: () => void;
  locked: boolean;
  feedback: { correct: boolean; message: string; detail: string } | null;
}

export function ProblemCard({
  problem,
  inputRef,
  value,
  onValue,
  onSubmit,
  onSkip,
  locked,
  feedback,
}: ProblemCardProps) {
  const parts = problemParts(problem);

  return (
    <Card>
      <CardContent className="px-5 py-8 sm:px-8">
        <div className="mx-auto flex min-h-24 max-w-full items-center justify-center overflow-x-auto">
          <p className="flex items-baseline gap-3 font-display text-4xl font-semibold tabular-nums tracking-tight text-foreground sm:gap-4 sm:text-5xl">
            <span>{parts.left}</span>
            <span className="font-sans text-3xl font-medium text-primary sm:text-4xl">
              {parts.op}
            </span>
            <span>{parts.right}</span>
          </p>
        </div>

        <form onSubmit={onSubmit} className="mx-auto mt-6 max-w-sm space-y-3">
          <label className="sr-only" htmlFor="answer">
            Your answer
          </label>
          <Input
            ref={inputRef}
            id="answer"
            inputMode="decimal"
            autoComplete="off"
            placeholder="Your answer"
            value={value}
            disabled={locked}
            onChange={(e) => onValue(e.target.value)}
            className="h-14 text-center font-mono text-2xl font-medium tabular-nums"
          />
          <div className="flex gap-2">
            <Button type="submit" className="h-12 flex-1" disabled={locked || value.trim() === ""}>
              <Check className="size-4" />
              Check
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="h-12 px-4"
              onClick={onSkip}
              disabled={locked}
              aria-label="Skip problem"
            >
              <RotateCw className="size-4" />
            </Button>
          </div>
        </form>

        {feedback ? (
          <div
            className={cn(
              "mt-6 rounded-lg px-4 py-3 text-center",
              feedback.correct ? "bg-success-bg text-success" : "bg-danger-bg text-destructive",
            )}
            role="status"
          >
            <div className="text-sm font-semibold">{feedback.message}</div>
            <div className="mt-0.5 text-xs opacity-90">{feedback.detail}</div>
            {!feedback.correct ? (
              <div className="mt-1 font-mono text-sm tabular-nums">
                Answer: {formatNum(problem.answer)}
              </div>
            ) : null}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
