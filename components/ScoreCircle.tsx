"use client";

import { useEffect, useState } from "react";
import { calcScore, loadProgress, PASS_THRESHOLD } from "@/lib/storage";

/**
 * Lingkaran nilai 0.0–5.0 — hijau jika lulus (≥ 4.5), oranye jika belum.
 * Membaca progres dari localStorage saat mount (di klien saja).
 */
export function ScoreCircle({
  lessonId,
  size = "md",
}: {
  lessonId: number;
  size?: "sm" | "md" | "lg";
}) {
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    setScore(calcScore(loadProgress(lessonId)));
    // re-read when window regains focus (so cards refresh after a training session)
    const onFocus = () => setScore(calcScore(loadProgress(lessonId)));
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, [lessonId]);

  const value = score ?? 0;
  const passed = value >= PASS_THRESHOLD;

  const dim =
    size === "sm" ? "h-10 w-10 text-sm" :
    size === "lg" ? "h-16 w-16 text-xl" :
    "h-12 w-12 text-base";

  return (
    <div
      className={`${dim} flex shrink-0 items-center justify-center rounded-full font-bold text-white shadow-sm ${
        passed ? "bg-emerald-500" : "bg-amber-500"
      }`}
      title={passed ? "Lulus" : "Belum lulus"}
    >
      {value.toFixed(1)}
    </div>
  );
}
