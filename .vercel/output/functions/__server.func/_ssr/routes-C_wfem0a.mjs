import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as BookOpen, a as RotateCw, c as Play, d as Moon, f as Minus, g as Check, h as Divide, i as Sun, l as Percent, m as Flag, o as RotateCcw, p as Lightbulb, r as Timer, s as Plus, t as X, u as Pause } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, l as Slot, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C_wfem0a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatClock(totalSeconds) {
	const safe = Math.max(0, Math.floor(totalSeconds));
	const m = Math.floor(safe / 60);
	const s = safe % 60;
	return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-muted",
			outline: "border border-border bg-transparent text-foreground hover:bg-muted",
			ghost: "text-foreground hover:bg-muted",
			destructive: "bg-destructive text-primary-foreground hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 rounded-sm px-3 text-xs",
			lg: "h-12 rounded-lg px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border border-border bg-card text-card-foreground shadow-card", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col gap-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
	ref,
	className: cn("font-display text-lg font-semibold leading-snug tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-foreground/40 data-[state=open]:animate-[overlay-in_250ms_cubic-bezier(0.22,1,0.36,1)] data-[state=closed]:animate-[overlay-in_150ms_cubic-bezier(0.22,1,0.36,1)_reverse]", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-1/2 top-1/2 z-50 grid w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-card duration-200 data-[state=open]:animate-[modal-in_250ms_cubic-bezier(0.22,1,0.36,1)]", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-3 top-3 rounded-sm p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 text-left", className),
		...props
	});
}
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("font-display text-xl font-semibold leading-snug tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground leading-relaxed", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Sheet = Dialog$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-foreground/40", className),
	...props
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var SheetContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-card text-card-foreground shadow-card", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-3 top-3 rounded-sm p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 p-6 pr-12", className),
		...props
	});
}
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("font-display text-lg font-semibold", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription$1.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-12 w-full rounded-md border border-border bg-muted px-4 py-2 text-base text-foreground shadow-none transition-[border-color,box-shadow] duration-150 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pick(items) {
	return items[Math.floor(Math.random() * items.length)];
}
function uid() {
	return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
function digitRange(digits) {
	if (digits <= 1) return {
		min: 2,
		max: 9
	};
	return {
		min: 10 ** (digits - 1),
		max: 10 ** digits - 1
	};
}
function randDigits(digits) {
	const { min, max } = digitRange(digits);
	return randInt(min, max);
}
function make(op, a, b, answer, trick) {
	return {
		id: uid(),
		op,
		a,
		b,
		answer,
		trick
	};
}
function pctAns(pct, n) {
	return Math.round(pct * n / 100 * 100) / 100;
}
function generateAdd(level) {
	const a = randDigits(level);
	const b = randDigits(level);
	const last = b % 10;
	const lastTwo = b % 100;
	let trick = "l2r";
	if (level >= 2 && (last === 8 || last === 9 || lastTwo > 85)) trick = "compensate";
	else if (level >= 2 && a % 100 >= 85 && a % 100 <= 99) trick = "bridge";
	return make("add", a, b, a + b, trick);
}
function generateSub(level) {
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
function generateMul(level) {
	if (level === 1) {
		const a = randInt(2, 9);
		const b = randInt(2, 9);
		return make("mul", a, b, a * b, "tables");
	}
	const specials = [
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
		}
	];
	if (Math.random() < .45) return pick(specials)();
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
function generateDiv(level) {
	if (level === 1) {
		const b = randInt(2, 9);
		const q = randInt(2, 9);
		return make("div", b * q, b, q, "tables");
	}
	if (Math.random() < .35) {
		const kind = pick([
			"div-5",
			"div-4",
			"div-2"
		]);
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
	const b = pick([
		12,
		15,
		16,
		20,
		25
	]);
	const q = randInt(8, 36);
	return make("div", b * q, b, q, "split");
}
function generatePct(level) {
	if (level === 1) {
		const kind = pick([
			"ten",
			"fifty",
			"quarter",
			"hundred"
		]);
		const n = pick([
			20,
			40,
			60,
			80,
			100,
			120
		]);
		if (kind === "ten") return make("pct", 10, n, pctAns(10, n), "ten");
		if (kind === "fifty") return make("pct", 50, n, pctAns(50, n), "fifty");
		if (kind === "quarter") return make("pct", 25, n, pctAns(25, n), "quarter");
		return make("pct", 100, n, n, "hundred");
	}
	if (level === 2) {
		const kind = pick([
			"drop-zeros",
			"fifteen",
			"five",
			"flip",
			"twenty"
		]);
		if (kind === "drop-zeros") {
			const pct = pick([
				20,
				30,
				40,
				50,
				60,
				80
			]);
			const n = pick([
				20,
				30,
				40,
				50,
				60,
				80,
				90
			]);
			return make("pct", pct, n, pctAns(pct, n), "drop-zeros");
		}
		if (kind === "fifteen") {
			const n = pick([
				20,
				40,
				60,
				80,
				100,
				120
			]);
			return make("pct", 15, n, pctAns(15, n), "blocks-15");
		}
		if (kind === "five") {
			const n = pick([
				20,
				40,
				60,
				80,
				100,
				120
			]);
			return make("pct", 5, n, pctAns(5, n), "blocks-5");
		}
		if (kind === "twenty") {
			const n = pick([
				15,
				25,
				35,
				45,
				55
			]);
			return make("pct", 20, n, pctAns(20, n), "blocks-20");
		}
		const n = pick([
			10,
			20,
			25,
			50
		]);
		const pct = pick([
			8,
			12,
			16,
			24,
			32,
			36,
			48
		]);
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
		"quarter"
	]);
	if (kind === "flip") {
		const n = pick([
			10,
			20,
			25,
			50
		]);
		const pct = pick([
			12,
			16,
			24,
			32,
			36,
			48,
			64,
			72
		]);
		return make("pct", pct, n, pctAns(pct, n), "flip");
	}
	if (kind === "drop-zeros") {
		const pct = pick([
			20,
			30,
			40,
			60,
			70,
			80
		]);
		const n = pick(level >= 4 ? [
			40,
			50,
			80,
			120,
			150,
			200,
			250
		] : [
			40,
			50,
			60,
			80,
			120,
			150
		]);
		return make("pct", pct, n, pctAns(pct, n), "drop-zeros");
	}
	if (kind === "blocks-9") {
		const n = pick([
			40,
			50,
			60,
			80,
			90,
			120
		]);
		return make("pct", 9, n, pctAns(9, n), "blocks-9");
	}
	if (kind === "blocks-12") {
		const n = pick([
			25,
			40,
			50,
			80,
			125
		]);
		return make("pct", 12, n, pctAns(12, n), "blocks-12");
	}
	if (kind === "blocks-15") {
		const n = pick([
			40,
			60,
			80,
			120,
			160,
			200
		]);
		return make("pct", 15, n, pctAns(15, n), "blocks-15");
	}
	if (kind === "blocks-55") {
		const n = pick([
			20,
			40,
			60,
			80,
			120
		]);
		return make("pct", 55, n, pctAns(55, n), "blocks-55");
	}
	if (kind === "blocks-18") {
		const n = pick([
			50,
			100,
			150,
			200
		]);
		return make("pct", 18, n, pctAns(18, n), "blocks-18");
	}
	const n = pick([
		36,
		48,
		64,
		80,
		120,
		160
	]);
	return make("pct", 25, n, pctAns(25, n), "quarter");
}
function generateProblem(op, level) {
	switch (op) {
		case "add": return generateAdd(level);
		case "sub": return generateSub(level);
		case "mul": return generateMul(level);
		case "div": return generateDiv(level);
		case "pct": return generatePct(level);
	}
}
function generateChallenge(level) {
	const ops = [
		"add",
		"sub",
		"mul",
		"div",
		"pct"
	];
	for (let i = ops.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		const tmp = ops[i];
		ops[i] = ops[j];
		ops[j] = tmp;
	}
	return ops.map((op) => generateProblem(op, level));
}
var OP_META = {
	add: {
		label: "Addition",
		short: "Add",
		symbol: "+",
		hint: "Left to right"
	},
	sub: {
		label: "Subtraction",
		short: "Subtract",
		symbol: "−",
		hint: "Count up or compensate"
	},
	mul: {
		label: "Multiplication",
		short: "Multiply",
		symbol: "×",
		hint: "Break apart and double"
	},
	div: {
		label: "Division",
		short: "Divide",
		symbol: "÷",
		hint: "Friendly splits"
	},
	pct: {
		label: "Percentages",
		short: "Percent",
		symbol: "%",
		hint: "Flip, zeros, blocks"
	}
};
var LEVELS = [
	{
		id: 1,
		title: "1-Digit",
		subtitle: "Warm-up"
	},
	{
		id: 2,
		title: "2-Digit",
		subtitle: "Casual"
	},
	{
		id: 3,
		title: "3-Digit",
		subtitle: "Core"
	},
	{
		id: 4,
		title: "4-Digit",
		subtitle: "Stretch"
	}
];
function formatNum(n) {
	if (!Number.isFinite(n)) return "0";
	const rounded = Math.round(n * 1e3) / 1e3;
	if (Number.isInteger(rounded)) return String(rounded);
	return String(rounded);
}
function answersMatch(raw, expected) {
	const trimmed = raw.trim();
	if (trimmed === "") return false;
	const value = Number(trimmed);
	if (!Number.isFinite(value)) return false;
	return Math.abs(value - expected) < 5e-4;
}
function problemParts(p) {
	if (p.op === "pct") return {
		left: `${p.a}%`,
		op: "of",
		right: formatNum(p.b)
	};
	return {
		left: formatNum(p.a),
		op: OP_META[p.op].symbol,
		right: formatNum(p.b)
	};
}
function problemPrompt(p) {
	const parts = problemParts(p);
	return `${parts.left} ${parts.op} ${parts.right}`;
}
function steps(lines) {
	return lines.map((text) => ({ text }));
}
function addWalk(p) {
	const { a, b, answer } = p;
	if (p.trick === "compensate") {
		const roundAmount = b % 100 > 85 ? 100 : 10;
		const next = Math.ceil(b / roundAmount) * roundAmount;
		const extra = next - b;
		return {
			title: "Compensation (round up)",
			summary: `${b} is close to ${next}. Add the round number, then take the extra back.`,
			steps: steps([
				`Round ${b} up to ${next} (that is ${extra} extra).`,
				`${a} + ${next} = ${formatNum(a + next)}.`,
				`${formatNum(a + next)} − ${extra} = ${formatNum(answer)}.`
			])
		};
	}
	if (p.trick === "bridge") {
		const need = 100 - a % 100;
		if (b > need) return {
			title: "Make a hundred",
			summary: `Slide ${need} from ${b} so ${a} becomes a clean hundred.`,
			steps: steps([
				`${a} needs ${need} to reach ${a + need}.`,
				`${b} − ${need} = ${b - need} left over.`,
				`${a + need} + ${b - need} = ${formatNum(answer)}.`
			])
		};
	}
	const digits = String(b).split("").map(Number);
	const lines = [`Start from ${a}.`];
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
		steps: steps(lines)
	};
}
function subWalk(p) {
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
				`Add the extra ${extra} back: ${formatNum(a - next)} + ${extra} = ${formatNum(answer)}.`
			])
		};
	}
	if (p.trick === "count-up") return {
		title: "Count up",
		summary: "Jump from the smaller number up to the larger one.",
		steps: steps([
			`Start at ${b}.`,
			`The gap up to ${a} is ${formatNum(answer)}.`,
			`So ${a} − ${b} = ${formatNum(answer)}.`
		])
	};
	const digits = String(b).split("").map(Number);
	const lines = [`Start from ${a}.`];
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
		steps: steps(lines)
	};
}
function mulWalk(p) {
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
					mid >= 10 ? `Carry the 1: the result is ${formatNum(answer)}.` : `Write ${tens}${mid}${ones} = ${formatNum(answer)}.`
				])
			};
		}
	}
	if (p.trick === "times-5" || small === 5) {
		const n = small === 5 ? large : a === 5 ? b : a;
		return {
			title: "Times 5",
			summary: "Multiply by 10, then take half.",
			steps: steps([`${n} × 10 = ${n * 10}.`, `Half of ${n * 10} is ${formatNum(answer)}.`])
		};
	}
	if (p.trick === "times-9" || small === 9) {
		const n = small === 9 ? large : a === 9 ? b : a;
		return {
			title: "Times 9",
			summary: "Multiply by 10, then subtract the original number.",
			steps: steps([`${n} × 10 = ${n * 10}.`, `${n * 10} − ${n} = ${formatNum(answer)}.`])
		};
	}
	if (p.trick === "double" || small === 4 || small === 8) {
		const n = large;
		if (small === 4) return {
			title: "Double twice",
			summary: "×4 is the same as doubling, then doubling again.",
			steps: steps([`${n} × 2 = ${n * 2}.`, `${n * 2} × 2 = ${formatNum(answer)}.`])
		};
		if (small === 8) return {
			title: "Double three times",
			summary: "×8 is three doubles.",
			steps: steps([
				`${n} × 2 = ${n * 2}.`,
				`${n * 2} × 2 = ${n * 4}.`,
				`${n * 4} × 2 = ${formatNum(answer)}.`
			])
		};
	}
	if (p.trick === "times-25" || small === 25) {
		const n = small === 25 ? large : a === 25 ? b : a;
		return {
			title: "Times 25",
			summary: "×100, then divide by 4 (half, then half).",
			steps: steps([`${n} × 100 = ${n * 100}.`, `Half is ${n * 50}; half again is ${formatNum(answer)}.`])
		};
	}
	const tens = Math.floor(b / 10) * 10;
	const ones = b % 10;
	if (tens > 0 && ones > 0) return {
		title: "Break apart (distributive)",
		summary: `Split ${b} into ${tens} + ${ones}, then multiply each part.`,
		steps: steps([
			`${a} × ${tens} = ${a * tens}.`,
			`${a} × ${ones} = ${a * ones}.`,
			`${a * tens} + ${a * ones} = ${formatNum(answer)}.`
		])
	};
	return {
		title: "Direct product",
		summary: "Use a known fact or a small split.",
		steps: steps([`${a} × ${b} = ${formatNum(answer)}.`])
	};
}
function divWalk(p) {
	const { a, b, answer } = p;
	if (p.trick === "div-5" || b === 5) return {
		title: "Divide by 5",
		summary: "Double the number, then divide by 10 (drop a zero / shift the decimal).",
		steps: steps([`${a} × 2 = ${a * 2}.`, `${a * 2} ÷ 10 = ${formatNum(answer)}.`])
	};
	if (p.trick === "div-4" || b === 4) return {
		title: "Divide by 4",
		summary: "Halve, then halve again.",
		steps: steps([`Half of ${a} is ${a / 2}.`, `Half of ${a / 2} is ${formatNum(answer)}.`])
	};
	if (p.trick === "div-2" || b === 2) return {
		title: "Halve it",
		summary: "Dividing by 2 is taking half.",
		steps: steps([`Half of ${a} is ${formatNum(answer)}.`])
	};
	const str = String(a);
	if (str.length >= 2) {
		const highPlace = 10 ** (str.length - 1);
		const high = Math.floor(a / highPlace) * highPlace;
		const rem = a - high;
		if (high % b === 0 && rem % b === 0 && rem !== 0) return {
			title: "Split the dividend",
			summary: "Break into friendly parts that each divide cleanly.",
			steps: steps([
				`${a} = ${high} + ${rem}.`,
				`${high} ÷ ${b} = ${high / b}.`,
				`${rem} ÷ ${b} = ${rem / b}.`,
				`${high / b} + ${rem / b} = ${formatNum(answer)}.`
			])
		};
	}
	return {
		title: "Think multiplication",
		summary: `What times ${b} gives ${a}?`,
		steps: steps([`${b} × ${formatNum(answer)} = ${a}.`, `So ${a} ÷ ${b} = ${formatNum(answer)}.`])
	};
}
function pctWalk(p) {
	const pct = p.a;
	const n = p.b;
	const answer = p.answer;
	const ten = n / 10;
	const one = n / 100;
	if (p.trick === "flip") return {
		title: "The flip rule",
		summary: `${pct}% of ${n} is the same as ${n}% of ${pct}. Flip to the easier side.`,
		steps: steps([`${n}% of ${pct} is simpler.`, n === 50 ? `50% means half: half of ${pct} is ${formatNum(answer)}.` : n === 25 ? `25% means one quarter: ${pct} ÷ 4 = ${formatNum(answer)}.` : n === 10 ? `10% means move the decimal one place: 10% of ${pct} = ${formatNum(answer)}.` : n === 20 ? `20% is 10% doubled: 10% of ${pct} is ${pct / 10}, times 2 is ${formatNum(answer)}.` : `${n}% of ${pct} = ${formatNum(answer)}.`]),
		fallbackTitle: "Building blocks",
		fallbackSteps: steps([`10% of ${n} = ${formatNum(ten)}.`, `1% of ${n} = ${formatNum(one)}.`])
	};
	if (p.trick === "drop-zeros") {
		const left = pct / 10;
		const right = n / 10;
		return {
			title: "Drop the zeros",
			summary: "When both numbers end in zero, cross out the zeros and multiply.",
			steps: steps([`${pct}% of ${n} becomes ${left} × ${right}.`, `${left} × ${right} = ${formatNum(answer)}.`])
		};
	}
	if (p.trick === "ten") return {
		title: "10% building block",
		summary: "Move the decimal point one place to the left.",
		steps: steps([`10% of ${n} = ${formatNum(answer)}.`])
	};
	if (p.trick === "fifty") return {
		title: "50% is half",
		summary: "Half the number.",
		steps: steps([`Half of ${n} is ${formatNum(answer)}.`])
	};
	if (p.trick === "quarter") return {
		title: "25% is a quarter",
		summary: "Halve, then halve again — or divide by 4.",
		steps: steps([`Half of ${n} is ${formatNum(n / 2)}.`, `Half of that is ${formatNum(answer)}.`])
	};
	if (p.trick === "hundred") return {
		title: "100% is the whole",
		summary: "100% of a number is the number itself.",
		steps: steps([`100% of ${n} = ${formatNum(n)}.`])
	};
	if (p.trick === "blocks-15") return {
		title: "15% = 10% + 5%",
		summary: "Find 10%, then add half of that amount.",
		steps: steps([
			`10% of ${n} = ${formatNum(ten)}.`,
			`5% is half of that: ${formatNum(ten / 2)}.`,
			`${formatNum(ten)} + ${formatNum(ten / 2)} = ${formatNum(answer)}.`
		])
	};
	if (p.trick === "blocks-5") return {
		title: "5% is half of 10%",
		summary: "Find 10%, then take half.",
		steps: steps([`10% of ${n} = ${formatNum(ten)}.`, `Half of ${formatNum(ten)} is ${formatNum(answer)}.`])
	};
	if (p.trick === "blocks-20") return {
		title: "20% is 10% doubled",
		summary: "Find 10%, then multiply by 2.",
		steps: steps([`10% of ${n} = ${formatNum(ten)}.`, `${formatNum(ten)} × 2 = ${formatNum(answer)}.`])
	};
	if (p.trick === "blocks-9") return {
		title: "9% = 10% − 1%",
		summary: "Find 10%, then subtract 1%.",
		steps: steps([
			`10% of ${n} = ${formatNum(ten)}.`,
			`1% of ${n} = ${formatNum(one)}.`,
			`${formatNum(ten)} − ${formatNum(one)} = ${formatNum(answer)}.`
		])
	};
	if (p.trick === "blocks-12") return {
		title: "12% = 10% + 1% + 1%",
		summary: "Find 10%, then add 1% twice.",
		steps: steps([
			`10% of ${n} = ${formatNum(ten)}.`,
			`1% of ${n} = ${formatNum(one)}.`,
			`${formatNum(ten)} + ${formatNum(one)} + ${formatNum(one)} = ${formatNum(answer)}.`
		])
	};
	if (p.trick === "blocks-55") return {
		title: "55% = 50% + 5%",
		summary: "Take half, then add one-tenth of that half.",
		steps: steps([
			`50% of ${n} = ${formatNum(n / 2)}.`,
			`5% of ${n} = ${formatNum(ten / 2)}.`,
			`${formatNum(n / 2)} + ${formatNum(ten / 2)} = ${formatNum(answer)}.`
		])
	};
	if (p.trick === "blocks-18") return {
		title: "18% = 10% + 5% + 1% + 1% + 1%",
		summary: "Stack 10%, 5%, and three 1% blocks — or 20% minus 2%.",
		steps: steps([
			`20% of ${n} = ${formatNum(ten * 2)}.`,
			`2% of ${n} = ${formatNum(one * 2)}.`,
			`${formatNum(ten * 2)} − ${formatNum(one * 2)} = ${formatNum(answer)}.`
		])
	};
	return {
		title: "10% and 1% building blocks",
		summary: "Almost any percent is a mix of 10% and 1%.",
		steps: steps([
			`10% of ${n} = ${formatNum(ten)}.`,
			`1% of ${n} = ${formatNum(one)}.`,
			`${pct} × 1% = ${formatNum(answer)}.`
		])
	};
}
function buildWalkthrough(problem) {
	switch (problem.op) {
		case "add": return addWalk(problem);
		case "sub": return subWalk(problem);
		case "mul": return mulWalk(problem);
		case "div": return divWalk(problem);
		case "pct": return pctWalk(problem);
	}
}
var CHALLENGE_SECONDS = 600;
var QUESTION_COUNT = 5;
function ChallengeDialog({ open, onOpenChange, level, onFinished }) {
	const [phase, setPhase] = (0, import_react.useState)("intro");
	const [questions, setQuestions] = (0, import_react.useState)([]);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [value, setValue] = (0, import_react.useState)("");
	const [remaining, setRemaining] = (0, import_react.useState)(CHALLENGE_SECONDS);
	const [results, setResults] = (0, import_react.useState)([]);
	const [flash, setFlash] = (0, import_react.useState)(null);
	const endAt = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const finishedRef = (0, import_react.useRef)(false);
	const resultsRef = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
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
	(0, import_react.useEffect)(() => {
		if (phase !== "play") return;
		const id = window.setInterval(() => {
			if (!endAt.current) return;
			const left = Math.max(0, Math.round((endAt.current - Date.now()) / 1e3));
			setRemaining(left);
			if (left === 0) wrapUp();
		}, 250);
		return () => window.clearInterval(id);
	}, [phase]);
	(0, import_react.useEffect)(() => {
		if (phase === "play") inputRef.current?.focus();
	}, [phase, index]);
	function begin() {
		finishedRef.current = false;
		resultsRef.current = [];
		setQuestions(generateChallenge(level));
		setIndex(0);
		setValue("");
		setResults([]);
		setRemaining(CHALLENGE_SECONDS);
		endAt.current = Date.now() + CHALLENGE_SECONDS * 1e3;
		setPhase("play");
	}
	function wrapUp(finalResults) {
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
	function submitAnswer(event) {
		event.preventDefault();
		const problem = questions[index];
		if (!problem || flash) return;
		const correct = answersMatch(value, problem.answer);
		const entry = {
			problem,
			given: value.trim() || "—",
			correct,
			walk: buildWalkthrough(problem)
		};
		const nextResults = [...results, entry];
		resultsRef.current = nextResults;
		setResults(nextResults);
		setFlash(correct ? "ok" : "no");
		window.setTimeout(() => {
			setFlash(null);
			setValue("");
			if (index + 1 >= QUESTION_COUNT) wrapUp(nextResults);
			else setIndex((i) => i + 1);
		}, 650);
	}
	const current = questions[index];
	const correctCount = results.filter((r) => r.correct).length;
	const elapsed = CHALLENGE_SECONDS - remaining;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90dvh] overflow-y-auto sm:max-w-xl",
			children: [
				phase === "intro" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "5-question challenge" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Ten minutes on the clock. One problem from each skill: add, subtract, multiply, divide, and percent. Use whatever tricks you like." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-md bg-muted px-3 py-2",
								children: "5 mixed questions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-md bg-muted px-3 py-2",
								children: "10-minute timer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-md bg-muted px-3 py-2",
								children: ["Current difficulty: Level ", level]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-md bg-muted px-3 py-2",
								children: "Review with tricks at the end"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => onOpenChange(false),
							children: "Not now"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							onClick: begin,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, { className: "size-4" }), "Begin challenge"]
						})]
					})
				] }) : null,
				phase === "play" && current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "flex items-center justify-between gap-3 pr-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Question ",
							index + 1,
							" of ",
							QUESTION_COUNT
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: cn("inline-flex items-center gap-1.5 font-mono text-base font-medium tabular-nums", remaining <= 60 ? "text-destructive" : "text-primary"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "size-4" }), formatClock(remaining)]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [OP_META[current.op].label, " · answer before the clock runs out"] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center gap-1.5",
						"aria-hidden": true,
						children: Array.from({ length: QUESTION_COUNT }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1.5 w-8 rounded-full", i < index ? "bg-primary" : i === index ? "bg-primary/60" : "bg-muted") }, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-lg bg-muted px-4 py-6 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl font-semibold tabular-nums sm:text-4xl",
							children: problemPrompt(current)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submitAnswer,
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							ref: inputRef,
							inputMode: "decimal",
							autoComplete: "off",
							placeholder: "Your answer",
							value,
							onChange: (e) => setValue(e.target.value),
							disabled: flash !== null,
							className: "h-14 text-center font-mono text-2xl tabular-nums"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "h-12 w-full",
							disabled: flash !== null || value.trim() === "",
							children: "Lock in"
						})]
					}),
					flash ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("text-center text-sm font-medium", flash === "ok" ? "text-success" : "text-destructive"),
						role: "status",
						children: flash === "ok" ? "Correct" : `The answer was ${formatNum(current.answer)}`
					}) : null
				] }) : null,
				phase === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Challenge complete" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
						correctCount,
						" of ",
						QUESTION_COUNT,
						" correct",
						remaining === 0 && results.length < QUESTION_COUNT ? " · time ran out" : ` · ${formatClock(elapsed)} used`
					] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between rounded-lg bg-muted px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wide text-muted-foreground",
							children: "Score"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display text-3xl font-semibold tabular-nums",
							children: [
								correctCount,
								"/",
								QUESTION_COUNT
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-wide text-muted-foreground",
								children: "Time"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-lg tabular-nums",
								children: formatClock(elapsed)
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-3",
						children: results.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-md border border-border px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted-foreground",
										children: [
											i + 1,
											". ",
											OP_META[r.problem.op].label
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-mono text-sm tabular-nums",
										children: [
											problemPrompt(r.problem),
											" = ",
											formatNum(r.problem.answer)
										]
									}),
									!r.correct ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-destructive",
										children: ["You entered ", r.given]
									}) : null
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("rounded-full px-2 py-0.5 text-xs font-medium", r.correct ? "bg-success-bg text-success" : "bg-danger-bg text-destructive"),
									children: r.correct ? "Correct" : "Miss"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-medium text-foreground",
									children: [r.walk.title, ". "]
								}), r.walk.summary]
							})]
						}, r.problem.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => onOpenChange(false),
							children: "Close"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: begin,
							children: "Try again"
						})]
					})
				] }) : null
			]
		})
	});
}
function ProblemCard({ problem, inputRef, value, onValue, onSubmit, onSkip, locked, feedback }) {
	const parts = problemParts(problem);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
		className: "px-5 py-8 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex min-h-24 max-w-full items-center justify-center overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-baseline gap-3 font-display text-4xl font-semibold tabular-nums tracking-tight text-foreground sm:gap-4 sm:text-5xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: parts.left }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-3xl font-medium text-primary sm:text-4xl",
							children: parts.op
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: parts.right })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "mx-auto mt-6 max-w-sm space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: "answer",
						children: "Your answer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						ref: inputRef,
						id: "answer",
						inputMode: "decimal",
						autoComplete: "off",
						placeholder: "Your answer",
						value,
						disabled: locked,
						onChange: (e) => onValue(e.target.value),
						className: "h-14 text-center font-mono text-2xl font-medium tabular-nums"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "h-12 flex-1",
							disabled: locked || value.trim() === "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), "Check"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "secondary",
							className: "h-12 px-4",
							onClick: onSkip,
							disabled: locked,
							"aria-label": "Skip problem",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "size-4" })
						})]
					})
				]
			}),
			feedback ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("mt-6 rounded-lg px-4 py-3 text-center", feedback.correct ? "bg-success-bg text-success" : "bg-danger-bg text-destructive"),
				role: "status",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold",
						children: feedback.message
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-0.5 text-xs opacity-90",
						children: feedback.detail
					}),
					!feedback.correct ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 font-mono text-sm tabular-nums",
						children: ["Answer: ", formatNum(problem.answer)]
					}) : null
				]
			}) : null
		]
	}) });
}
var PRESETS = [
	1,
	5,
	10,
	15,
	20
];
function SessionTimer({ remaining, durationMin, running, expired, onStart, onPause, onReset, onDuration }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-w-0 flex-1 flex-col gap-2 lg:flex-row lg:items-center lg:gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden size-8 items-center justify-center rounded-sm bg-muted text-primary sm:inline-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("font-mono text-2xl font-medium tabular-nums tracking-tight sm:text-3xl", remaining <= 60 && (running || expired) ? "text-destructive" : "text-foreground"),
					"aria-live": "polite",
					"aria-label": `Timer ${formatClock(remaining)}`,
					children: formatClock(remaining).split("").map((ch, i) => ch === ":" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("px-0.5", running && "timer-colon"),
						children: ":"
					}, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ch }, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [running ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						size: "icon",
						onClick: onPause,
						"aria-label": "Pause timer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" })
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						size: "icon",
						onClick: onStart,
						"aria-label": "Start timer",
						disabled: remaining === 0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon",
						onClick: onReset,
						"aria-label": "Reset timer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-w-0 items-center gap-1 overflow-x-auto",
			children: PRESETS.map((min) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onDuration(min),
				disabled: running,
				className: cn("h-9 shrink-0 rounded-full px-3 text-xs font-medium transition-colors duration-150", durationMin === min ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground", running && "opacity-60"),
				children: [min, " min"]
			}, min))
		})]
	});
}
var TRICKS = {
	add: [
		{
			title: "Left-to-right split",
			blurb: "Add place values from the left so you keep a running total.",
			example: "342 + 235",
			lines: [
				"342 + 200 = 542",
				"542 + 30 = 572",
				"572 + 5 = 577"
			]
		},
		{
			title: "Compensation",
			blurb: "If a number ends in 7, 8, or 9, round up, then take the extra back.",
			example: "456 + 198",
			lines: [
				"198 is 2 short of 200",
				"456 + 200 = 656",
				"656 − 2 = 654"
			]
		},
		{
			title: "Make a hundred",
			blurb: "Slide a little from one number so the other lands on a clean hundred.",
			example: "295 + 143",
			lines: [
				"295 needs 5 to become 300",
				"Steal 5 from 143 (leaves 138)",
				"300 + 138 = 438"
			]
		}
	],
	sub: [
		{
			title: "Count up",
			blurb: "Jump from the smaller number to the larger one. The jump is the answer.",
			example: "500 − 468",
			lines: [
				"468 → 470 (2)",
				"470 → 500 (30)",
				"2 + 30 = 32"
			]
		},
		{
			title: "Compensation",
			blurb: "Subtract a round number, then add back what you overshot.",
			example: "650 − 198",
			lines: [
				"198 is 2 below 200",
				"650 − 200 = 450",
				"450 + 2 = 452"
			]
		},
		{
			title: "Left-to-right split",
			blurb: "Peel off hundreds, then tens, then ones.",
			example: "836 − 251",
			lines: [
				"836 − 200 = 636",
				"636 − 50 = 586",
				"586 − 1 = 585"
			]
		}
	],
	mul: [
		{
			title: "Break apart",
			blurb: "Split the second number into tens and ones, then add the two products.",
			example: "23 × 12",
			lines: [
				"23 × 10 = 230",
				"23 × 2 = 46",
				"230 + 46 = 276"
			]
		},
		{
			title: "The 11 trick",
			blurb: "For a two-digit number, write the digits and put their sum in the middle.",
			example: "35 × 11",
			lines: [
				"Digits 3 and 5",
				"3 + 5 = 8 in the middle",
				"385"
			]
		},
		{
			title: "Friendly factors",
			blurb: "×5 is ×10 then half. ×9 is ×10 minus the number. ×4 is double twice.",
			example: "24 × 5",
			lines: ["24 × 10 = 240", "Half of 240 = 120"]
		}
	],
	div: [
		{
			title: "Split the dividend",
			blurb: "Break the big number into parts that each divide cleanly.",
			example: "846 ÷ 3",
			lines: [
				"846 = 840 + 6",
				"840 ÷ 3 = 280",
				"6 ÷ 3 = 2",
				"282"
			]
		},
		{
			title: "Divide by 5",
			blurb: "Double, then divide by 10.",
			example: "85 ÷ 5",
			lines: ["85 × 2 = 170", "170 ÷ 10 = 17"]
		},
		{
			title: "Halve for 2, 4, and 8",
			blurb: "÷2 is half. ÷4 is half twice. ÷8 is half three times.",
			example: "96 ÷ 4",
			lines: ["Half of 96 = 48", "Half of 48 = 24"]
		}
	],
	pct: [
		{
			title: "The flip rule",
			blurb: "x% of y equals y% of x. Swap if the other side is easier.",
			example: "12% of 50",
			lines: ["Same as 50% of 12", "Half of 12 is 6"]
		},
		{
			title: "Drop the zeros",
			blurb: "When both the percent and the number end in zero, cross the zeros and multiply.",
			example: "30% of 60",
			lines: ["Become 3 × 6", "18"]
		},
		{
			title: "10% and 1% blocks",
			blurb: "10% moves the decimal one place; 1% moves it two. Build any percent from those.",
			example: "15% of 80",
			lines: [
				"10% = 8",
				"5% = 4",
				"8 + 4 = 12"
			]
		},
		{
			title: "Near-ten percents",
			blurb: "9% is 10% minus 1%. 12% is 10% plus 1% twice. 55% is half plus 5%.",
			example: "9% of 80",
			lines: [
				"10% = 8",
				"1% = 0.8",
				"8 − 0.8 = 7.2"
			]
		}
	]
};
var GOLDEN_RULE = "Keep a running total in words. Do not picture the paper algorithm (carrying, long division) in your head.";
function TrickBlock({ trick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
				className: "flex items-center gap-2 text-sm font-semibold text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-1 rounded-xs bg-primary" }), trick.title]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-relaxed text-muted-foreground",
				children: trick.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md bg-muted px-3 py-2.5 font-mono text-xs text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 font-medium",
					children: trick.example
				}), trick.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-muted-foreground",
					children: line
				}, line))]
			})
		]
	});
}
function TricksContent({ op }) {
	const cards = TRICKS[op];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "leading-relaxed text-muted-foreground",
				children: op === "pct" ? "Percent problems get fast when you treat 10% and 1% as blocks, drop matching zeros, or flip the two numbers." : `Work ${OP_META[op].label.toLowerCase()} left to right. Keep a spoken running total instead of picturing the paper method.`
			}),
			cards.map((trick) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrickBlock, { trick }, trick.title)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-border bg-muted px-3 py-3 text-xs leading-relaxed text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 font-semibold text-foreground",
					children: "Keep this in mind"
				}), GOLDEN_RULE]
			})
		]
	});
}
function TricksPanel({ op }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "flex max-h-[85vh] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card lg:sticky lg:top-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 border-b border-border px-5 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-8 items-center justify-center rounded-sm bg-muted text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "font-display text-base font-semibold",
				children: [OP_META[op].label, " tricks"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: OP_META[op].hint
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "custom-scrollbar overflow-y-auto px-5 py-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TricksContent, { op })
		})]
	});
}
function WalkthroughCard({ walk }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "animate-fade-rise",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			className: "flex-row items-center gap-2 space-y-0 pb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-8 items-center justify-center rounded-sm bg-muted text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "size-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				className: "text-base",
				children: "Mental path"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold text-primary",
					children: walk.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed text-muted-foreground",
					children: walk.summary
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-1.5 font-mono text-xs text-foreground",
					children: walk.steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-subtle",
							children: [i + 1, "."]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.text })]
					}, i))
				}),
				walk.fallbackTitle && walk.fallbackSteps ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium",
						children: walk.fallbackTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-1.5 space-y-1 font-mono text-xs text-muted-foreground",
						children: walk.fallbackSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: step.text }, i))
					})]
				}) : null
			]
		})]
	});
}
var KEY = "mentalmath-pro-v1";
var DEFAULT_STATE = {
	theme: "light",
	op: "pct",
	level: 2,
	timerMinutes: 10,
	stats: {
		correct: 0,
		streak: 0,
		bestStreak: 0,
		total: 0,
		challengeBest: 0
	}
};
function loadState() {
	if (typeof window === "undefined") return DEFAULT_STATE;
	try {
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const savedTheme = loadTheme();
		const raw = localStorage.getItem(KEY);
		if (!raw) return {
			...DEFAULT_STATE,
			theme: savedTheme ?? (prefersDark ? "dark" : "light")
		};
		const parsed = JSON.parse(raw);
		return {
			...DEFAULT_STATE,
			...parsed,
			theme: parsed.theme ?? savedTheme ?? (prefersDark ? "dark" : "light"),
			stats: {
				...DEFAULT_STATE.stats,
				...parsed.stats ?? {}
			}
		};
	} catch {
		return DEFAULT_STATE;
	}
}
function saveState(state) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(KEY, JSON.stringify(state));
	} catch {}
}
function loadTheme() {
	if (typeof window === "undefined") return null;
	try {
		const t = localStorage.getItem("mentalmath-theme");
		if (t === "dark" || t === "light") return t;
	} catch {}
	return null;
}
function saveTheme(theme) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem("mentalmath-theme", theme);
	} catch {}
}
var OPS = [
	{
		id: "add",
		icon: Plus
	},
	{
		id: "sub",
		icon: Minus
	},
	{
		id: "mul",
		icon: X
	},
	{
		id: "div",
		icon: Divide
	},
	{
		id: "pct",
		icon: Percent
	}
];
function TrainerApp() {
	const boot = (0, import_react.useMemo)(() => loadState(), []);
	const [theme, setTheme] = (0, import_react.useState)(boot.theme);
	const [op, setOp] = (0, import_react.useState)(boot.op);
	const [level, setLevel] = (0, import_react.useState)(boot.level);
	const [problem, setProblem] = (0, import_react.useState)(() => generateProblem(boot.op, boot.level));
	const [value, setValue] = (0, import_react.useState)("");
	const [stats, setStats] = (0, import_react.useState)(boot.stats);
	const [walk, setWalk] = (0, import_react.useState)(null);
	const [feedback, setFeedback] = (0, import_react.useState)(null);
	const [durationMin, setDurationMin] = (0, import_react.useState)(boot.timerMinutes);
	const [remaining, setRemaining] = (0, import_react.useState)(boot.timerMinutes * 60);
	const [running, setRunning] = (0, import_react.useState)(false);
	const [expired, setExpired] = (0, import_react.useState)(false);
	const [sessionCorrect, setSessionCorrect] = (0, import_react.useState)(0);
	const [sessionTotal, setSessionTotal] = (0, import_react.useState)(0);
	const [challengeOpen, setChallengeOpen] = (0, import_react.useState)(false);
	const [tricksOpen, setTricksOpen] = (0, import_react.useState)(false);
	const inputRef = (0, import_react.useRef)(null);
	const endAt = (0, import_react.useRef)(null);
	const locked = expired;
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		saveTheme(theme);
	}, [theme]);
	(0, import_react.useEffect)(() => {
		saveState({
			theme,
			op,
			level,
			timerMinutes: durationMin,
			stats
		});
	}, [
		theme,
		op,
		level,
		durationMin,
		stats
	]);
	(0, import_react.useEffect)(() => {
		if (!running) return;
		const id = window.setInterval(() => {
			if (!endAt.current) return;
			const left = Math.max(0, Math.round((endAt.current - Date.now()) / 1e3));
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
		setValue("");
		setFeedback(null);
		setWalk(null);
		window.setTimeout(() => inputRef.current?.focus(), 0);
	}
	function changeOp(next) {
		setOp(next);
		nextProblem(next, level);
	}
	function changeLevel(next) {
		setLevel(next);
		nextProblem(op, next);
	}
	function startTimer() {
		if (remaining <= 0) return;
		endAt.current = Date.now() + remaining * 1e3;
		setExpired(false);
		setRunning(true);
	}
	function pauseTimer() {
		if (endAt.current) setRemaining(Math.max(0, Math.round((endAt.current - Date.now()) / 1e3)));
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
	function setMinutes(min) {
		if (running) return;
		setDurationMin(min);
		setRemaining(min * 60);
		setExpired(false);
	}
	function handleSubmit(event) {
		event.preventDefault();
		if (locked) return;
		const ok = answersMatch(value, problem.answer);
		setStats((prev) => {
			const streak = ok ? prev.streak + 1 : 0;
			return {
				...prev,
				total: prev.total + 1,
				correct: prev.correct + (ok ? 1 : 0),
				streak,
				bestStreak: Math.max(prev.bestStreak, streak)
			};
		});
		setSessionTotal((n) => n + 1);
		if (ok) setSessionCorrect((n) => n + 1);
		setFeedback({
			correct: ok,
			message: ok ? "Correct" : "Not this time",
			detail: ok ? `Streak ${stats.streak + 1}. Keep the running total going.` : `Walk the steps below, then try a new one.`
		});
		setWalk(buildWalkthrough(problem));
		if (ok) window.setTimeout(() => nextProblem(), 900);
	}
	function onChallengeFinished(correct) {
		setStats((prev) => ({
			...prev,
			challengeBest: Math.max(prev.challengeBest, correct)
		}));
	}
	function openChallenge() {
		if (running) pauseTimer();
		setChallengeOpen(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-8 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Percent, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-lg font-semibold leading-none tracking-tight sm:text-xl",
									children: "MentalMath Pro"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hidden text-xs text-muted-foreground sm:block",
									children: "Percent, multiply, divide, add"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "outline",
									className: "h-11 px-3",
									onClick: () => setTricksOpen(true),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Tricks"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									className: "h-11 px-3",
									onClick: openChallenge,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Challenge"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "ghost",
									size: "icon",
									"aria-label": theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
									onClick: () => setTheme((t) => t === "dark" ? "light" : "dark"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative inline-flex size-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: cn("absolute inset-0 size-4 transition-[opacity,transform,filter] duration-200", theme === "dark" ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: cn("absolute inset-0 size-4 transition-[opacity,transform,filter] duration-200", theme === "light" ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]") })]
									})
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionTimer, {
						remaining,
						durationMin,
						running,
						expired,
						onStart: startTimer,
						onPause: pauseTimer,
						onReset: resetTimer,
						onDuration: setMinutes
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "space-y-5 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground",
									children: "Skill"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-1 overflow-x-auto",
									children: OPS.map(({ id, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => changeOp(id),
										className: cn("flex h-11 shrink-0 items-center gap-1.5 rounded-full px-3.5 text-sm font-medium transition-colors duration-150", op === id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }), OP_META[id].short]
									}, id))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground",
									children: "Level"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
									children: LEVELS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => changeLevel(item.id),
										className: cn("flex h-14 flex-col items-center justify-center rounded-lg border px-2 transition-colors duration-150", level === item.id ? "border-primary bg-muted text-foreground" : "border-border text-muted-foreground hover:text-foreground"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-semibold",
											children: item.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs opacity-80",
											children: item.subtitle
										})]
									}, item.id))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2 border-t border-border pt-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											label: "Correct",
											value: stats.correct
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											label: "Streak",
											value: stats.streak,
											accent: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											label: "Solved",
											value: stats.total
										})
									]
								})
							]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProblemCard, {
							problem,
							inputRef,
							value,
							onValue: setValue,
							onSubmit: handleSubmit,
							onSkip: () => nextProblem(),
							locked,
							feedback
						}),
						walk ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalkthroughCard, { walk }) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TricksPanel, { op })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: tricksOpen,
				onOpenChange: setTricksOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, { children: [OP_META[op].label, " tricks"] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "custom-scrollbar flex-1 overflow-y-auto px-6 pb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TricksContent, { op })
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChallengeDialog, {
				open: challengeOpen,
				onOpenChange: setChallengeOpen,
				level,
				onFinished: onChallengeFinished
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: expired,
				onOpenChange: (open) => !open && resetTimer(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Time is up" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Optional practice timer finished. Your session score is below — reset to keep going." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md bg-muted px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-wide text-muted-foreground",
								children: "Correct"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl font-semibold tabular-nums",
								children: sessionCorrect
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md bg-muted px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-wide text-muted-foreground",
								children: "Attempted"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl font-semibold tabular-nums",
								children: sessionTotal
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							"Best streak this device: ",
							stats.bestStreak,
							". Challenge best: ",
							stats.challengeBest,
							"/5."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: resetTimer,
							children: "Reset timer"
						})
					})
				] })
			})
		]
	});
}
function Stat({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-muted px-2 py-3 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("font-display text-xl font-semibold tabular-nums", accent ? "text-primary" : "text-foreground"),
			children: formatNum(value)
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrainerApp, {});
}
//#endregion
export { Home as component };
