import { Pause, Play, RotateCcw, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, formatClock } from "@/lib/utils";

const PRESETS = [1, 5, 10, 15, 20];

interface SessionTimerProps {
  remaining: number;
  durationMin: number;
  running: boolean;
  expired: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onDuration: (minutes: number) => void;
}

export function SessionTimer({
  remaining,
  durationMin,
  running,
  expired,
  onStart,
  onPause,
  onReset,
  onDuration,
}: SessionTimerProps) {
  const urgent = remaining <= 60 && (running || expired);

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
      <div className="flex items-center gap-3">
        <span className="hidden size-8 items-center justify-center rounded-sm bg-muted text-primary sm:inline-flex">
          <Timer className="size-4" />
        </span>
        <div
          className={cn(
            "font-mono text-2xl font-medium tabular-nums tracking-tight sm:text-3xl",
            urgent ? "text-destructive" : "text-foreground",
          )}
          aria-live="polite"
          aria-label={`Timer ${formatClock(remaining)}`}
        >
          {formatClock(remaining)
            .split("")
            .map((ch, i) =>
              ch === ":" ? (
                <span key={i} className={cn("px-0.5", running && "timer-colon")}>
                  :
                </span>
              ) : (
                <span key={i}>{ch}</span>
              ),
            )}
        </div>
        <div className="flex items-center gap-1">
          {running ? (
            <Button type="button" variant="outline" size="icon" onClick={onPause} aria-label="Pause timer">
              <Pause className="size-4" />
            </Button>
          ) : (
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={onStart}
              aria-label="Start timer"
              disabled={remaining === 0}
            >
              <Play className="size-4" />
            </Button>
          )}
          <Button type="button" variant="ghost" size="icon" onClick={onReset} aria-label="Reset timer">
            <RotateCcw className="size-4" />
          </Button>
        </div>
      </div>
      <div className="flex min-w-0 items-center gap-1 overflow-x-auto">
        {PRESETS.map((min) => (
          <button
            key={min}
            type="button"
            onClick={() => onDuration(min)}
            disabled={running}
            className={cn(
              "h-9 shrink-0 rounded-full px-3 text-xs font-medium transition-colors duration-150",
              durationMin === min
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground",
              running && "opacity-60",
            )}
          >
            {min} min
          </button>
        ))}
      </div>
    </div>
  );
}
