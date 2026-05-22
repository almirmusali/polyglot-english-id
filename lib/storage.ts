// localStorage helpers untuk menyimpan nilai dan progres pelajaran.
// Skor dihitung sebagai rata-rata dari maks. 20 percobaan terakhir,
// dipetakan ke skala 0.0–5.0. Lulus saat skor ≥ 4.5.

const KEY_PREFIX = "poliglot:lesson:";
const WINDOW_SIZE = 20;
export const PASS_THRESHOLD = 4.5;

export type Attempt = "correct" | "wrong";

export type LessonProgress = {
  lessonId: number;
  attempts: Attempt[]; // rolling window of last N attempts
  correctTotal: number; // lifetime total
  wrongTotal: number; // lifetime total
  updatedAt: number; // ms epoch
};

function key(lessonId: number) {
  return `${KEY_PREFIX}${lessonId}`;
}

export function emptyProgress(lessonId: number): LessonProgress {
  return {
    lessonId,
    attempts: [],
    correctTotal: 0,
    wrongTotal: 0,
    updatedAt: Date.now(),
  };
}

export function loadProgress(lessonId: number): LessonProgress {
  if (typeof window === "undefined") return emptyProgress(lessonId);
  try {
    const raw = window.localStorage.getItem(key(lessonId));
    if (!raw) return emptyProgress(lessonId);
    const parsed = JSON.parse(raw) as LessonProgress;
    if (!Array.isArray(parsed.attempts)) return emptyProgress(lessonId);
    return parsed;
  } catch {
    return emptyProgress(lessonId);
  }
}

export function saveProgress(p: LessonProgress) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      key(p.lessonId),
      JSON.stringify({ ...p, updatedAt: Date.now() })
    );
  } catch {
    // ignore (quota, private mode, etc.)
  }
}

export function recordAttempt(
  current: LessonProgress,
  result: Attempt
): LessonProgress {
  const attempts = [...current.attempts, result].slice(-WINDOW_SIZE);
  return {
    ...current,
    attempts,
    correctTotal: current.correctTotal + (result === "correct" ? 1 : 0),
    wrongTotal: current.wrongTotal + (result === "wrong" ? 1 : 0),
    updatedAt: Date.now(),
  };
}

/**
 * Calculate score 0.0–5.0 based on rolling window of attempts.
 * - 0 attempts → 0.0
 * - 100% correct → 5.0
 * - 0% correct → 0.0
 * - linear interpolation in between
 */
export function calcScore(p: LessonProgress): number {
  if (p.attempts.length === 0) return 0;
  const correct = p.attempts.filter((a) => a === "correct").length;
  const score = (correct / p.attempts.length) * 5;
  return Math.round(score * 10) / 10; // 1 decimal
}

export function resetProgress(lessonId: number) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(key(lessonId));
  } catch {}
}
