import { Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Walkthrough } from "@/lib/math/types";

export function WalkthroughCard({ walk }: { walk: Walkthrough }) {
  return (
    <Card className="animate-fade-rise">
      <CardHeader className="flex-row items-center gap-2 space-y-0 pb-3">
        <span className="flex size-8 items-center justify-center rounded-sm bg-muted text-primary">
          <Lightbulb className="size-4" />
        </span>
        <CardTitle className="text-base">Mental path</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-sm font-semibold text-primary">{walk.title}</div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{walk.summary}</p>
        </div>
        <ol className="space-y-1.5 font-mono text-xs text-foreground">
          {walk.steps.map((step, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-subtle">{i + 1}.</span>
              <span>{step.text}</span>
            </li>
          ))}
        </ol>
        {walk.fallbackTitle && walk.fallbackSteps ? (
          <div className="border-t border-border pt-3">
            <div className="text-sm font-medium">{walk.fallbackTitle}</div>
            <ul className="mt-1.5 space-y-1 font-mono text-xs text-muted-foreground">
              {walk.fallbackSteps.map((step, i) => (
                <li key={i}>{step.text}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
