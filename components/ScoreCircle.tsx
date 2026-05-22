"use client";

import { useEffect, useState } from "react";
import { calcScore, loadProgress, PASS_THRESHOLD } from "@/lib/storage";

/**
 * Lingkaran nilai LinguaID — 0.0–5.0 dengan dua status:
 *   • teal (lulus, ≥ 4.5) — sinkron dengan warna "Sekarang"
 *   • oranye merek (belum lulus)
 *
 * Membaca dari localStorage di klien; me-refresh saat tab kembali
 * fokus sehingga kartu di beranda terupdate setelah selesai sesi
 * latihan.
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
    const onFocus = () => setScore(calcScore(loadProgress(lessonId)));
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, [lessonId]);

  const value = score ?? 0;
  const passed = value >= PASS_THRESHOLD;

  const dim =
    size === "sm"
      ? "h-10 w-10 text-xs"
      : size === "lg"
      ? "h-14 w-14 text-base"
      : "h-12 w-12 text-sm";

  return (
    <div
      className={`${dim} relative flex shrink-0 items-center justify-center rounded-full font-display font-bold text-white shadow-soft ${
        passed ? "bg-state" : "bg-orange"
      }`}
      title={passed ? "Sudah lulus" : "Belum lulus"}
    >
      <span className="leading-none">{value.toFixed(1)}</span>
      {passed && (
        <span
          className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-paper-surface text-[10px]"
          aria-hidden
        >
          ✓
        </span>
      )}
    </div>
  );
}
