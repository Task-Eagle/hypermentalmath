import type { Level, Op } from "@/lib/math/types";

const KEY = "mentalmath-pro-v1";

export interface PersistedStats {
  correct: number;
  streak: number;
  bestStreak: number;
  total: number;
  challengeBest: number;
}

export interface PersistedState {
  theme: "light" | "dark";
  op: Op;
  level: Level;
  timerMinutes: number;
  stats: PersistedStats;
}

const DEFAULT_STATE: PersistedState = {
  theme: "light",
  op: "pct",
  level: 2,
  timerMinutes: 10,
  stats: { correct: 0, streak: 0, bestStreak: 0, total: 0, challengeBest: 0 },
};

export function loadState(): PersistedState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = loadTheme();
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      return {
        ...DEFAULT_STATE,
        theme: savedTheme ?? (prefersDark ? "dark" : "light"),
      };
    }
    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    return {
      ...DEFAULT_STATE,
      ...parsed,
      theme: parsed.theme ?? savedTheme ?? (prefersDark ? "dark" : "light"),
      stats: { ...DEFAULT_STATE.stats, ...(parsed.stats ?? {}) },
    };
  } catch {
    return DEFAULT_STATE;
  }
}

export function saveState(state: PersistedState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* ignore quota */
  }
}

export function loadTheme(): "light" | "dark" | null {
  if (typeof window === "undefined") return null;
  try {
    const t = localStorage.getItem("mentalmath-theme");
    if (t === "dark" || t === "light") return t;
  } catch {
    /* ignore */
  }
  return null;
}

export function saveTheme(theme: "light" | "dark"): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("mentalmath-theme", theme);
  } catch {
    /* ignore */
  }
}
