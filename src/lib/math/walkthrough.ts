import type { Problem, WalkStep, Walkthrough } from "./types";
import { formatNum } from "./types";

function steps(lines: string[]): WalkStep[] {
  return lines.map((text) => ({ text }));
}

function addWalk(p: Problem): Walkthrough {
  const { a, b, answer } = p;
  if (p.trick === "compensate") {
    const lastTwo = b % 100;
    const roundAmount = lastTwo > 85 ? 100 : 10;
    const next = Math.ceil(b / roundAmount) * roundAmount;
    const extra = next - b;
    return {
      title: "Compensation (round up)",
      summary: `${b} is close to ${next}. Add the round number, then take the extra back.`,
      steps: steps([
        `Round ${b} up to ${next} (that is ${extra} extra).`,
        `${a} + ${next} = ${formatNum(a + next)}.`,
        `${formatNum(a + next)} − ${extra} = ${formatNum(answer)}.`,
      ]),
    };
  }
  if (p.trick === "bridge") {
    const need = 100 - (a % 100);
    if (b > need) {
      return {
        title: "Make a hundred",
        summary: `Slide ${need} from ${b} so ${a} becomes a clean hundred.`,
        steps: steps([
          `${a} needs ${need} to reach ${a + need}.`,
          `${b} − ${need} = ${b - need} left over.`,
          `${a + need} + ${b - need} = ${formatNum(answer)}.`,
        ]),
      };
    }
  }
  const digits = String(b).split("").map(Number);
  const lines: string[] = [`Start from ${a}.`];
  let running = a;
  for (let i = 0; i < digits.length; i += 1) {
    const place = 10 ** (digits.length - 1 - i);
    const chunk = (digits[i] ?? 0) * place;
    if (chunk === 0) continue;
    const next = running + chunk;
    lines.push(`${running} + ${chunk} = ${next}.`);
    running = next;
  }
  return {
    title: "Left-to-right split",
    summary: "Add the second number in place-value chunks, starting from the left.",
    steps: steps(lines),
  };
}

function subWalk(p: Problem): Walkthrough {
  const { a, b, answer } = p;
  if (p.trick === "compensate") {
    const roundAmount = b % 100 > 85 ? 100 : 10;
    const next = Math.ceil(b / roundAmount) * roundAmount;
    const extra = next - b;
    return {
      title: "Compensation (round up)",
      summary: `Subtract a round number, then add back the extra you took.`,
      steps: steps([
        `${b} is ${extra} below ${next}.`,
        `${a} − ${next} = ${formatNum(a - next)}.`,
        `Add the extra ${extra} back: ${formatNum(a - next)} + ${extra} = ${formatNum(answer)}.`,
      ]),
    };
  }
  if (p.trick === "count-up") {
    return {
      title: "Count up",
      summary: "Jump from the smaller number up to the larger one.",
      steps: steps([
        `Start at ${b}.`,
        `The gap up to ${a} is ${formatNum(answer)}.`,
        `So ${a} − ${b} = ${formatNum(answer)}.`,
      ]),
    };
  }
  const digits = String(b).split("").map(Number);
  const lines: string[] = [`Start from ${a}.`];
  let running = a;
  for (let i = 0; i < digits.length; i += 1) {
    const place = 10 ** (digits.length - 1 - i);
    const chunk = (digits[i] ?? 0) * place;
    if (chunk === 0) continue;
    const next = running - chunk;
    lines.push(`${running} − ${chunk} = ${next}.`);
    running = next;
  }
  return {
    title: "Left-to-right split",
    summary: "Peel the second number off in place-value chunks.",
    steps: steps(lines),
  };
}

function mulWalk(p: Problem): Walkthrough {
  const { a, b, answer } = p;
  const small = Math.min(a, b);
  const large = Math.max(a, b);

  if (p.trick === "eleven" || small === 11 || large === 11) {
    const n = small === 11 ? large : small;
    if (n >= 10 && n <= 99) {
      const tens = Math.floor(n / 10);
      const ones = n % 10;
      const mid = tens + ones;
      return {
        title: "The 11 trick",
        summary: "For a two-digit number, write the digits and put their sum in the middle.",
        steps: steps([
          `${n} × 11.`,
          `Digits ${tens} and ${ones}; middle is ${tens} + ${ones} = ${mid}.`,
          mid >= 10
            ? `Carry the 1: the result is ${formatNum(answer)}.`
            : `Write ${tens}${mid}${ones} = ${formatNum(answer)}.`,
        ]),
      };
    }
  }
  if (p.trick === "times-5" || small === 5) {
    const n = small === 5 ? large : a === 5 ? b : a;
    return {
      title: "Times 5",
      summary: "Multiply by 10, then take half.",
      steps: steps([
        `${n} × 10 = ${n * 10}.`,
        `Half of ${n * 10} is ${formatNum(answer)}.`,
      ]),
    };
  }
  if (p.trick === "times-9" || small === 9) {
    const n = small === 9 ? large : a === 9 ? b : a;
    return {
      title: "Times 9",
      summary: "Multiply by 10, then subtract the original number.",
      steps: steps([
        `${n} × 10 = ${n * 10}.`,
        `${n * 10} − ${n} = ${formatNum(answer)}.`,
      ]),
    };
  }
  if (p.trick === "double" || small === 4 || small === 8) {
    const n = large;
    if (small === 4) {
      return {
        title: "Double twice",
        summary: "×4 is the same as doubling, then doubling again.",
        steps: steps([`${n} × 2 = ${n * 2}.`, `${n * 2} × 2 = ${formatNum(answer)}.`]),
      };
    }
    if (small === 8) {
      return {
        title: "Double three times",
        summary: "×8 is three doubles.",
        steps: steps([
          `${n} × 2 = ${n * 2}.`,
          `${n * 2} × 2 = ${n * 4}.`,
          `${n * 4} × 2 = ${formatNum(answer)}.`,
        ]),
      };
    }
  }
  if (p.trick === "times-25" || small === 25) {
    const n = small === 25 ? large : a === 25 ? b : a;
    return {
      title: "Times 25",
      summary: "×100, then divide by 4 (half, then half).",
      steps: steps([
        `${n} × 100 = ${n * 100}.`,
        `Half is ${n * 50}; half again is ${formatNum(answer)}.`,
      ]),
    };
  }

  const tens = Math.floor(b / 10) * 10;
  const ones = b % 10;
  if (tens > 0 && ones > 0) {
    return {
      title: "Break apart (distributive)",
      summary: `Split ${b} into ${tens} + ${ones}, then multiply each part.`,
      steps: steps([
        `${a} × ${tens} = ${a * tens}.`,
        `${a} × ${ones} = ${a * ones}.`,
        `${a * tens} + ${a * ones} = ${formatNum(answer)}.`,
      ]),
    };
  }
  return {
    title: "Direct product",
    summary: "Use a known fact or a small split.",
    steps: steps([`${a} × ${b} = ${formatNum(answer)}.`]),
  };
}

function divWalk(p: Problem): Walkthrough {
  const { a, b, answer } = p;
  if (p.trick === "div-5" || b === 5) {
    return {
      title: "Divide by 5",
      summary: "Double the number, then divide by 10 (drop a zero / shift the decimal).",
      steps: steps([
        `${a} × 2 = ${a * 2}.`,
        `${a * 2} ÷ 10 = ${formatNum(answer)}.`,
      ]),
    };
  }
  if (p.trick === "div-4" || b === 4) {
    return {
      title: "Divide by 4",
      summary: "Halve, then halve again.",
      steps: steps([
        `Half of ${a} is ${a / 2}.`,
        `Half of ${a / 2} is ${formatNum(answer)}.`,
      ]),
    };
  }
  if (p.trick === "div-2" || b === 2) {
    return {
      title: "Halve it",
      summary: "Dividing by 2 is taking half.",
      steps: steps([`Half of ${a} is ${formatNum(answer)}.`]),
    };
  }
  const str = String(a);
  if (str.length >= 2) {
    const highPlace = 10 ** (str.length - 1);
    const high = Math.floor(a / highPlace) * highPlace;
    const rem = a - high;
    if (high % b === 0 && rem % b === 0 && rem !== 0) {
      return {
        title: "Split the dividend",
        summary: "Break into friendly parts that each divide cleanly.",
        steps: steps([
          `${a} = ${high} + ${rem}.`,
          `${high} ÷ ${b} = ${high / b}.`,
          `${rem} ÷ ${b} = ${rem / b}.`,
          `${high / b} + ${rem / b} = ${formatNum(answer)}.`,
        ]),
      };
    }
  }
  return {
    title: "Think multiplication",
    summary: `What times ${b} gives ${a}?`,
    steps: steps([`${b} × ${formatNum(answer)} = ${a}.`, `So ${a} ÷ ${b} = ${formatNum(answer)}.`]),
  };
}

function pctWalk(p: Problem): Walkthrough {
  const pct = p.a;
  const n = p.b;
  const answer = p.answer;
  const ten = n / 10;
  const one = n / 100;

  if (p.trick === "flip") {
    return {
      title: "The flip rule",
      summary: `${pct}% of ${n} is the same as ${n}% of ${pct}. Flip to the easier side.`,
      steps: steps([
        `${n}% of ${pct} is simpler.`,
        n === 50
          ? `50% means half: half of ${pct} is ${formatNum(answer)}.`
          : n === 25
            ? `25% means one quarter: ${pct} ÷ 4 = ${formatNum(answer)}.`
            : n === 10
              ? `10% means move the decimal one place: 10% of ${pct} = ${formatNum(answer)}.`
              : n === 20
                ? `20% is 10% doubled: 10% of ${pct} is ${pct / 10}, times 2 is ${formatNum(answer)}.`
                : `${n}% of ${pct} = ${formatNum(answer)}.`,
      ]),
      fallbackTitle: "Building blocks",
      fallbackSteps: steps([
        `10% of ${n} = ${formatNum(ten)}.`,
        `1% of ${n} = ${formatNum(one)}.`,
      ]),
    };
  }
  if (p.trick === "drop-zeros") {
    const left = pct / 10;
    const right = n / 10;
    return {
      title: "Drop the zeros",
      summary: "When both numbers end in zero, cross out the zeros and multiply.",
      steps: steps([
        `${pct}% of ${n} becomes ${left} × ${right}.`,
        `${left} × ${right} = ${formatNum(answer)}.`,
      ]),
    };
  }
  if (p.trick === "ten") {
    return {
      title: "10% building block",
      summary: "Move the decimal point one place to the left.",
      steps: steps([`10% of ${n} = ${formatNum(answer)}.`]),
    };
  }
  if (p.trick === "fifty") {
    return {
      title: "50% is half",
      summary: "Half the number.",
      steps: steps([`Half of ${n} is ${formatNum(answer)}.`]),
    };
  }
  if (p.trick === "quarter") {
    return {
      title: "25% is a quarter",
      summary: "Halve, then halve again — or divide by 4.",
      steps: steps([
        `Half of ${n} is ${formatNum(n / 2)}.`,
        `Half of that is ${formatNum(answer)}.`,
      ]),
    };
  }
  if (p.trick === "hundred") {
    return {
      title: "100% is the whole",
      summary: "100% of a number is the number itself.",
      steps: steps([`100% of ${n} = ${formatNum(n)}.`]),
    };
  }
  if (p.trick === "blocks-15") {
    return {
      title: "15% = 10% + 5%",
      summary: "Find 10%, then add half of that amount.",
      steps: steps([
        `10% of ${n} = ${formatNum(ten)}.`,
        `5% is half of that: ${formatNum(ten / 2)}.`,
        `${formatNum(ten)} + ${formatNum(ten / 2)} = ${formatNum(answer)}.`,
      ]),
    };
  }
  if (p.trick === "blocks-5") {
    return {
      title: "5% is half of 10%",
      summary: "Find 10%, then take half.",
      steps: steps([
        `10% of ${n} = ${formatNum(ten)}.`,
        `Half of ${formatNum(ten)} is ${formatNum(answer)}.`,
      ]),
    };
  }
  if (p.trick === "blocks-20") {
    return {
      title: "20% is 10% doubled",
      summary: "Find 10%, then multiply by 2.",
      steps: steps([
        `10% of ${n} = ${formatNum(ten)}.`,
        `${formatNum(ten)} × 2 = ${formatNum(answer)}.`,
      ]),
    };
  }
  if (p.trick === "blocks-9") {
    return {
      title: "9% = 10% − 1%",
      summary: "Find 10%, then subtract 1%.",
      steps: steps([
        `10% of ${n} = ${formatNum(ten)}.`,
        `1% of ${n} = ${formatNum(one)}.`,
        `${formatNum(ten)} − ${formatNum(one)} = ${formatNum(answer)}.`,
      ]),
    };
  }
  if (p.trick === "blocks-12") {
    return {
      title: "12% = 10% + 1% + 1%",
      summary: "Find 10%, then add 1% twice.",
      steps: steps([
        `10% of ${n} = ${formatNum(ten)}.`,
        `1% of ${n} = ${formatNum(one)}.`,
        `${formatNum(ten)} + ${formatNum(one)} + ${formatNum(one)} = ${formatNum(answer)}.`,
      ]),
    };
  }
  if (p.trick === "blocks-55") {
    return {
      title: "55% = 50% + 5%",
      summary: "Take half, then add one-tenth of that half.",
      steps: steps([
        `50% of ${n} = ${formatNum(n / 2)}.`,
        `5% of ${n} = ${formatNum(ten / 2)}.`,
        `${formatNum(n / 2)} + ${formatNum(ten / 2)} = ${formatNum(answer)}.`,
      ]),
    };
  }
  if (p.trick === "blocks-18") {
    return {
      title: "18% = 10% + 5% + 1% + 1% + 1%",
      summary: "Stack 10%, 5%, and three 1% blocks — or 20% minus 2%.",
      steps: steps([
        `20% of ${n} = ${formatNum(ten * 2)}.`,
        `2% of ${n} = ${formatNum(one * 2)}.`,
        `${formatNum(ten * 2)} − ${formatNum(one * 2)} = ${formatNum(answer)}.`,
      ]),
    };
  }

  return {
    title: "10% and 1% building blocks",
    summary: "Almost any percent is a mix of 10% and 1%.",
    steps: steps([
      `10% of ${n} = ${formatNum(ten)}.`,
      `1% of ${n} = ${formatNum(one)}.`,
      `${pct} × 1% = ${formatNum(answer)}.`,
    ]),
  };
}

export function buildWalkthrough(problem: Problem): Walkthrough {
  switch (problem.op) {
    case "add":
      return addWalk(problem);
    case "sub":
      return subWalk(problem);
    case "mul":
      return mulWalk(problem);
    case "div":
      return divWalk(problem);
    case "pct":
      return pctWalk(problem);
  }
}
