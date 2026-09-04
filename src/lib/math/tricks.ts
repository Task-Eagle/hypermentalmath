import type { Op } from "./types";

export interface TrickCard {
  title: string;
  blurb: string;
  example: string;
  lines: string[];
}

export const TRICKS: Record<Op, TrickCard[]> = {
  add: [
    {
      title: "Left-to-right split",
      blurb: "Add place values from the left so you keep a running total.",
      example: "342 + 235",
      lines: ["342 + 200 = 542", "542 + 30 = 572", "572 + 5 = 577"],
    },
    {
      title: "Compensation",
      blurb: "If a number ends in 7, 8, or 9, round up, then take the extra back.",
      example: "456 + 198",
      lines: ["198 is 2 short of 200", "456 + 200 = 656", "656 − 2 = 654"],
    },
    {
      title: "Make a hundred",
      blurb: "Slide a little from one number so the other lands on a clean hundred.",
      example: "295 + 143",
      lines: ["295 needs 5 to become 300", "Steal 5 from 143 (leaves 138)", "300 + 138 = 438"],
    },
  ],
  sub: [
    {
      title: "Count up",
      blurb: "Jump from the smaller number to the larger one. The jump is the answer.",
      example: "500 − 468",
      lines: ["468 → 470 (2)", "470 → 500 (30)", "2 + 30 = 32"],
    },
    {
      title: "Compensation",
      blurb: "Subtract a round number, then add back what you overshot.",
      example: "650 − 198",
      lines: ["198 is 2 below 200", "650 − 200 = 450", "450 + 2 = 452"],
    },
    {
      title: "Left-to-right split",
      blurb: "Peel off hundreds, then tens, then ones.",
      example: "836 − 251",
      lines: ["836 − 200 = 636", "636 − 50 = 586", "586 − 1 = 585"],
    },
  ],
  mul: [
    {
      title: "Break apart",
      blurb: "Split the second number into tens and ones, then add the two products.",
      example: "23 × 12",
      lines: ["23 × 10 = 230", "23 × 2 = 46", "230 + 46 = 276"],
    },
    {
      title: "The 11 trick",
      blurb: "For a two-digit number, write the digits and put their sum in the middle.",
      example: "35 × 11",
      lines: ["Digits 3 and 5", "3 + 5 = 8 in the middle", "385"],
    },
    {
      title: "Friendly factors",
      blurb: "×5 is ×10 then half. ×9 is ×10 minus the number. ×4 is double twice.",
      example: "24 × 5",
      lines: ["24 × 10 = 240", "Half of 240 = 120"],
    },
  ],
  div: [
    {
      title: "Split the dividend",
      blurb: "Break the big number into parts that each divide cleanly.",
      example: "846 ÷ 3",
      lines: ["846 = 840 + 6", "840 ÷ 3 = 280", "6 ÷ 3 = 2", "282"],
    },
    {
      title: "Divide by 5",
      blurb: "Double, then divide by 10.",
      example: "85 ÷ 5",
      lines: ["85 × 2 = 170", "170 ÷ 10 = 17"],
    },
    {
      title: "Halve for 2, 4, and 8",
      blurb: "÷2 is half. ÷4 is half twice. ÷8 is half three times.",
      example: "96 ÷ 4",
      lines: ["Half of 96 = 48", "Half of 48 = 24"],
    },
  ],
  pct: [
    {
      title: "The flip rule",
      blurb: "x% of y equals y% of x. Swap if the other side is easier.",
      example: "12% of 50",
      lines: ["Same as 50% of 12", "Half of 12 is 6"],
    },
    {
      title: "Drop the zeros",
      blurb: "When both the percent and the number end in zero, cross the zeros and multiply.",
      example: "30% of 60",
      lines: ["Become 3 × 6", "18"],
    },
    {
      title: "10% and 1% blocks",
      blurb: "10% moves the decimal one place; 1% moves it two. Build any percent from those.",
      example: "15% of 80",
      lines: ["10% = 8", "5% = 4", "8 + 4 = 12"],
    },
    {
      title: "Near-ten percents",
      blurb: "9% is 10% minus 1%. 12% is 10% plus 1% twice. 55% is half plus 5%.",
      example: "9% of 80",
      lines: ["10% = 8", "1% = 0.8", "8 − 0.8 = 7.2"],
    },
  ],
};

export const GOLDEN_RULE =
  "Keep a running total in words. Do not picture the paper algorithm (carrying, long division) in your head.";
