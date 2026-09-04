export type Op = "add" | "sub" | "mul" | "div" | "pct";
export type Level = 1 | 2 | 3 | 4;

export interface Problem {
  id: string;
  op: Op;
  a: number;
  b: number;
  answer: number;
  trick: string;
}

export interface WalkStep {
  text: string;
  accent?: "plain" | "ok" | "warn";
}

export interface Walkthrough {
  title: string;
  summary: string;
  steps: WalkStep[];
  fallbackTitle?: string;
  fallbackSteps?: WalkStep[];
}

export const OP_META: Record<
  Op,
  { label: string; short: string; symbol: string; hint: string }
> = {
  add: { label: "Addition", short: "Add", symbol: "+", hint: "Left to right" },
  sub: { label: "Subtraction", short: "Subtract", symbol: "−", hint: "Count up or compensate" },
  mul: { label: "Multiplication", short: "Multiply", symbol: "×", hint: "Break apart and double" },
  div: { label: "Division", short: "Divide", symbol: "÷", hint: "Friendly splits" },
  pct: { label: "Percentages", short: "Percent", symbol: "%", hint: "Flip, zeros, blocks" },
};

export const LEVELS: { id: Level; title: string; subtitle: string }[] = [
  { id: 1, title: "1-Digit", subtitle: "Warm-up" },
  { id: 2, title: "2-Digit", subtitle: "Casual" },
  { id: 3, title: "3-Digit", subtitle: "Core" },
  { id: 4, title: "4-Digit", subtitle: "Stretch" },
];

export function formatNum(n: number): string {
  if (!Number.isFinite(n)) return "0";
  const rounded = Math.round(n * 1000) / 1000;
  if (Number.isInteger(rounded)) return String(rounded);
  return String(rounded);
}

export function answersMatch(raw: string, expected: number): boolean {
  const trimmed = raw.trim();
  if (trimmed === "") return false;
  const value = Number(trimmed);
  if (!Number.isFinite(value)) return false;
  return Math.abs(value - expected) < 0.0005;
}

export function problemParts(p: Problem): { left: string; op: string; right: string } {
  if (p.op === "pct") {
    return { left: `${p.a}%`, op: "of", right: formatNum(p.b) };
  }
  return {
    left: formatNum(p.a),
    op: OP_META[p.op].symbol,
    right: formatNum(p.b),
  };
}

export function problemPrompt(p: Problem): string {
  const parts = problemParts(p);
  return `${parts.left} ${parts.op} ${parts.right}`;
}
