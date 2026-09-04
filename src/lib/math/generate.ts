import type { Level, Op, Problem } from "./types";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)] as T;
}

function uid(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function digitRange(digits: number): { min: number; max: number } {
  if (digits <= 1) return { min: 2, max: 9 };
  return { min: 10 ** (digits - 1), max: 10 ** digits - 1 };
}

function randDigits(digits: number): number {
  const { min, max } = digitRange(digits);
  return randInt(min, max);
}

function make(op: Op, a: number, b: number, answer: number, trick: string): Problem {
  return { id: uid(), op, a, b, answer, trick };
}

function pctAns(pct: number, n: number): number {
  return Math.round(((pct * n) / 100) * 100) / 100;
}

function generateAdd(level: Level): Problem {
  const a = randDigits(level);
  const b = randDigits(level);
  const last = b % 10;
  const lastTwo = b % 100;
  let trick = "l2r";
  if (level >= 2 && (last === 8 || last === 9 || lastTwo > 85)) trick = "compensate";
  else if (level >= 2 && a % 100 >= 85 && a % 100 <= 99) trick = "bridge";
  return make("add", a, b, a + b, trick);
}

function generateSub(level: Level): Problem {
  let a = randDigits(level);
  let b = randDigits(level);
  if (b > a) {
    const tmp = a;
    a = b;
    b = tmp;
  }
  if (a === b) a += randInt(1, 9);
  const last = b % 10;
  let trick = "l2r";
  if (level >= 2 && (last === 8 || last === 9 || b % 100 > 85)) trick = "compensate";
  else if (level >= 2 && a % 100 < 20) trick = "count-up";
  return make("sub", a, b, a - b, trick);
}

function generateMul(level: Level): Problem {
  if (level === 1) {
    const a = randInt(2, 9);
    const b = randInt(2, 9);
    return make("mul", a, b, a * b, "tables");
  }

  const specials: Array<() => Problem> = [
    () => {
      const a = randInt(12, 48);
      return make("mul", a, 11, a * 11, "eleven");
    },
    () => {
      const a = randInt(6, level >= 3 ? 48 : 24);
      return make("mul", a, 5, a * 5, "times-5");
    },
    () => {
      const a = randInt(6, level >= 3 ? 48 : 24);
      return make("mul", a, 9, a * 9, "times-9");
    },
    () => {
      const a = randInt(8, 36);
      return make("mul", a, 4, a * 4, "double");
    },
    () => {
      const a = randInt(12, 40);
      return make("mul", a, 25, a * 25, "times-25");
    },
  ];

  if (Math.random() < 0.45) return pick(specials)();

  if (level === 2) {
    const a = randInt(12, 99);
    const b = randInt(3, 9);
    return make("mul", a, b, a * b, "distribute");
  }
  if (level === 3) {
    const a = randInt(12, 89);
    const b = randInt(12, 19);
    return make("mul", a, b, a * b, "distribute");
  }
  const a = randInt(101, 199);
  const b = randInt(11, 19);
  return make("mul", a, b, a * b, "distribute");
}

function generateDiv(level: Level): Problem {
  if (level === 1) {
    const b = randInt(2, 9);
    const q = randInt(2, 9);
    return make("div", b * q, b, q, "tables");
  }
  if (Math.random() < 0.35) {
    const kind = pick(["div-5", "div-4", "div-2"] as const);
    if (kind === "div-5") {
      const q = randInt(4, level >= 3 ? 80 : 40);
      return make("div", q * 5, 5, q, "div-5");
    }
    if (kind === "div-4") {
      const q = randInt(4, level >= 3 ? 60 : 30);
      return make("div", q * 4, 4, q, "div-4");
    }
    const q = randInt(8, 90);
    return make("div", q * 2, 2, q, "div-2");
  }
  if (level === 2) {
    const b = randInt(3, 9);
    const q = randInt(11, 48);
    return make("div", b * q, b, q, "split");
  }
  if (level === 3) {
    const b = randInt(3, 9);
    const q = randInt(21, 120);
    return make("div", b * q, b, q, "split");
  }
  const b = pick([12, 15, 16, 20, 25]);
  const q = randInt(8, 36);
  return make("div", b * q, b, q, "split");
}

function generatePct(level: Level): Problem {
  if (level === 1) {
    const kind = pick(["ten", "fifty", "quarter", "hundred"] as const);
    const n = pick([20, 40, 60, 80, 100, 120]);
    if (kind === "ten") return make("pct", 10, n, pctAns(10, n), "ten");
    if (kind === "fifty") return make("pct", 50, n, pctAns(50, n), "fifty");
    if (kind === "quarter") return make("pct", 25, n, pctAns(25, n), "quarter");
    return make("pct", 100, n, n, "hundred");
  }

  if (level === 2) {
    const kind = pick(["drop-zeros", "fifteen", "five", "flip", "twenty"] as const);
    if (kind === "drop-zeros") {
      const pct = pick([20, 30, 40, 50, 60, 80]);
      const n = pick([20, 30, 40, 50, 60, 80, 90]);
      return make("pct", pct, n, pctAns(pct, n), "drop-zeros");
    }
    if (kind === "fifteen") {
      const n = pick([20, 40, 60, 80, 100, 120]);
      return make("pct", 15, n, pctAns(15, n), "blocks-15");
    }
    if (kind === "five") {
      const n = pick([20, 40, 60, 80, 100, 120]);
      return make("pct", 5, n, pctAns(5, n), "blocks-5");
    }
    if (kind === "twenty") {
      const n = pick([15, 25, 35, 45, 55]);
      return make("pct", 20, n, pctAns(20, n), "blocks-20");
    }
    const n = pick([10, 20, 25, 50]);
    const pct = pick([8, 12, 16, 24, 32, 36, 48]);
    return make("pct", pct, n, pctAns(pct, n), "flip");
  }

  const kind = pick([
    "flip",
    "drop-zeros",
    "blocks-9",
    "blocks-12",
    "blocks-15",
    "blocks-55",
    "blocks-18",
    "quarter",
  ] as const);

  if (kind === "flip") {
    const n = pick([10, 20, 25, 50]);
    const pct = pick([12, 16, 24, 32, 36, 48, 64, 72]);
    return make("pct", pct, n, pctAns(pct, n), "flip");
  }
  if (kind === "drop-zeros") {
    const pct = pick([20, 30, 40, 60, 70, 80]);
    const n = pick(level >= 4 ? [40, 50, 80, 120, 150, 200, 250] : [40, 50, 60, 80, 120, 150]);
    return make("pct", pct, n, pctAns(pct, n), "drop-zeros");
  }
  if (kind === "blocks-9") {
    const n = pick([40, 50, 60, 80, 90, 120]);
    return make("pct", 9, n, pctAns(9, n), "blocks-9");
  }
  if (kind === "blocks-12") {
    const n = pick([25, 40, 50, 80, 125]);
    return make("pct", 12, n, pctAns(12, n), "blocks-12");
  }
  if (kind === "blocks-15") {
    const n = pick([40, 60, 80, 120, 160, 200]);
    return make("pct", 15, n, pctAns(15, n), "blocks-15");
  }
  if (kind === "blocks-55") {
    const n = pick([20, 40, 60, 80, 120]);
    return make("pct", 55, n, pctAns(55, n), "blocks-55");
  }
  if (kind === "blocks-18") {
    const n = pick([50, 100, 150, 200]);
    return make("pct", 18, n, pctAns(18, n), "blocks-18");
  }
  const n = pick([36, 48, 64, 80, 120, 160]);
  return make("pct", 25, n, pctAns(25, n), "quarter");
}

export function generateProblem(op: Op, level: Level): Problem {
  switch (op) {
    case "add":
      return generateAdd(level);
    case "sub":
      return generateSub(level);
    case "mul":
      return generateMul(level);
    case "div":
      return generateDiv(level);
    case "pct":
      return generatePct(level);
  }
}

export function generateChallenge(level: Level): Problem[] {
  const ops: Op[] = ["add", "sub", "mul", "div", "pct"];
  for (let i = ops.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = ops[i]!;
    ops[i] = ops[j]!;
    ops[j] = tmp;
  }
  return ops.map((op) => generateProblem(op, level));
}
