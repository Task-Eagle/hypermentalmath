import { BookOpen } from "lucide-react";
import { GOLDEN_RULE, TRICKS, type TrickCard } from "@/lib/math/tricks";
import type { Op } from "@/lib/math/types";
import { OP_META } from "@/lib/math/types";

function TrickBlock({ trick }: { trick: TrickCard }) {
  return (
    <article className="space-y-2">
      <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <span className="h-4 w-1 rounded-xs bg-primary" />
        {trick.title}
      </h4>
      <p className="text-xs leading-relaxed text-muted-foreground">{trick.blurb}</p>
      <div className="rounded-md bg-muted px-3 py-2.5 font-mono text-xs text-foreground">
        <div className="mb-1 font-medium">{trick.example}</div>
        {trick.lines.map((line) => (
          <div key={line} className="text-muted-foreground">
            {line}
          </div>
        ))}
      </div>
    </article>
  );
}

export function TricksContent({ op }: { op: Op }) {
  const cards = TRICKS[op];
  return (
    <div className="space-y-5 text-sm">
      <p className="leading-relaxed text-muted-foreground">
        {op === "pct"
          ? "Percent problems get fast when you treat 10% and 1% as blocks, drop matching zeros, or flip the two numbers."
          : `Work ${OP_META[op].label.toLowerCase()} left to right. Keep a spoken running total instead of picturing the paper method.`}
      </p>
      {cards.map((trick) => (
        <TrickBlock key={trick.title} trick={trick} />
      ))}
      <div className="rounded-md border border-border bg-muted px-3 py-3 text-xs leading-relaxed text-muted-foreground">
        <div className="mb-1 font-semibold text-foreground">Keep this in mind</div>
        {GOLDEN_RULE}
      </div>
    </div>
  );
}

export function TricksPanel({ op }: { op: Op }) {
  return (
    <aside className="flex max-h-[85vh] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card lg:sticky lg:top-28">
      <div className="flex items-center gap-2 border-b border-border px-5 py-4">
        <span className="flex size-8 items-center justify-center rounded-sm bg-muted text-primary">
          <BookOpen className="size-4" />
        </span>
        <div>
          <h3 className="font-display text-base font-semibold">
            {OP_META[op].label} tricks
          </h3>
          <p className="text-xs text-muted-foreground">{OP_META[op].hint}</p>
        </div>
      </div>
      <div className="custom-scrollbar overflow-y-auto px-5 py-5">
        <TricksContent op={op} />
      </div>
    </aside>
  );
}
