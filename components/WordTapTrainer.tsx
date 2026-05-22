"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  generateSession,
  type Question,
  KIND_LABEL,
} from "@/data/lesson1Bank";
import {
  loadProgress,
  saveProgress,
  recordAttempt,
  calcScore,
  PASS_THRESHOLD,
  type LessonProgress,
} from "@/lib/storage";
import { TenseChip } from "./TenseChip";
import { Lesson1HintModal } from "./Lesson1HintModal";
import { Lesson1HelpModal } from "./Lesson1HelpModal";

const SESSION_SIZE = 25;

type Status = "answering" | "correct" | "wrong";

/**
 * WordTapTrainer — versi Pelajaran 1 ala Polyglot:
 *   - chip waktu (Sekarang/Lampau/Akan datang)
 *   - kalimat Indonesia di tengah
 *   - grid tombol kata, tap urut untuk merangkai
 *   - "Ups, salah", "Petunjuk", "Bantuan", "Jawaban lisan"
 *   - bilah riwayat, nilai 0.0–5.0 di header
 */
export function WordTapTrainer({ lessonId }: { lessonId: number }) {
  const [session, setSession] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number[]>([]); // indices into question.words
  const [status, setStatus] = useState<Status>("answering");
  const [progress, setProgress] = useState<LessonProgress | null>(null);
  const [history, setHistory] = useState<("correct" | "wrong")[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [revealed, setRevealed] = useState(false);

  // Init: load session + progress
  useEffect(() => {
    setSession(generateSession(SESSION_SIZE));
    const p = loadProgress(lessonId);
    setProgress(p);
    setHistory(p.attempts);
  }, [lessonId]);

  const current = session[index];
  const correct = current?.english ?? [];

  const builtTokens = useMemo(
    () => (current ? picked.map((i) => current.words[i]) : []),
    [picked, current]
  );

  const checkAnswer = useCallback(
    (tokens: string[]) => {
      if (!current) return;
      const ok =
        tokens.length === correct.length &&
        tokens.every((t, i) => t === correct[i]);
      setStatus(ok ? "correct" : "wrong");

      const updated = recordAttempt(
        progress ?? loadProgress(lessonId),
        ok ? "correct" : "wrong"
      );
      setProgress(updated);
      setHistory(updated.attempts);
      saveProgress(updated);
    },
    [correct, current, lessonId, progress]
  );

  // Auto-check when token count matches
  useEffect(() => {
    if (!current || status !== "answering") return;
    if (builtTokens.length === correct.length && builtTokens.length > 0) {
      checkAnswer(builtTokens);
    }
  }, [builtTokens, correct.length, current, status, checkAnswer]);

  if (!current || !progress) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-slate-400">
        Memuat latihan…
      </div>
    );
  }

  const score = calcScore(progress);
  const passed = score >= PASS_THRESHOLD;
  const correctCount = history.filter((a) => a === "correct").length;
  const wrongCount = history.filter((a) => a === "wrong").length;

  const tapWord = (i: number) => {
    if (status !== "answering") return;
    if (picked.includes(i)) return;
    setPicked([...picked, i]);
  };

  const undo = () => {
    if (status === "correct") return;
    if (status === "wrong") {
      // re-enable retry
      setStatus("answering");
      setRevealed(false);
      setPicked(picked.slice(0, -1));
      return;
    }
    setPicked(picked.slice(0, -1));
  };

  const next = () => {
    if (index + 1 >= session.length) {
      // Generate a fresh session and continue
      setSession(generateSession(SESSION_SIZE));
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setPicked([]);
    setStatus("answering");
    setRevealed(false);
  };

  const reveal = () => setRevealed(true);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* ── Top bar (header) ──────────────────────────────────── */}
      <header className="sticky top-0 z-20 bg-emerald-600 text-white shadow">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3">
          <Link
            href={`/lesson/${lessonId}`}
            aria-label="Kembali ke pelajaran"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
          >
            ←
          </Link>
          <div className="flex-1 truncate">
            <div className="text-xs text-emerald-100">Pelajaran {lessonId}</div>
            <div className="truncate text-sm font-semibold">
              Bentuk Dasar Kata Kerja
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold">
            <span className="flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1">
              <span aria-hidden>★</span>
              <span className={passed ? "text-yellow-200" : ""}>
                {score.toFixed(1)}
              </span>
            </span>
            <span className="flex items-center gap-1 rounded-full bg-emerald-500/40 px-2.5 py-1">
              ✓ {correctCount}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-rose-500/40 px-2.5 py-1">
              ✗ {wrongCount}
            </span>
          </div>
        </div>

        {/* History bar */}
        <div className="mx-auto flex max-w-2xl gap-0.5 px-4 pb-2">
          {Array.from({ length: 20 }).map((_, i) => {
            const a = history[history.length - 20 + i];
            return (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-sm ${
                  a === "correct"
                    ? "bg-emerald-300"
                    : a === "wrong"
                    ? "bg-rose-400"
                    : "bg-white/20"
                }`}
              />
            );
          })}
        </div>
      </header>

      {/* ── Main ──────────────────────────────────────────────── */}
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-4 py-5">
        {/* Tense + kind */}
        <div className="flex items-center justify-center gap-2">
          <TenseChip tense={current.tense} />
          <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
            {KIND_LABEL[current.kind]}
          </span>
        </div>

        {/* Indonesian sentence */}
        <div className="mt-5 rounded-2xl bg-white px-5 py-7 text-center shadow-sm ring-1 ring-slate-200">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Terjemahkan ke bahasa Inggris
          </div>
          <div className="mt-2 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
            {current.indonesian.sentence}
          </div>
          {current.indonesian.hint && (
            <div className="mt-2 text-xs italic text-amber-700">
              ({current.indonesian.hint})
            </div>
          )}
          <div className="mt-1 text-xs text-slate-500">
            soal {index + 1} / {session.length}
          </div>
        </div>

        {/* Built answer area */}
        <div
          className={`mt-4 flex min-h-[56px] flex-wrap items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-3 py-3 transition ${
            status === "correct"
              ? "border-emerald-400 bg-emerald-50"
              : status === "wrong"
              ? "border-rose-400 bg-rose-50"
              : "border-slate-300 bg-white"
          }`}
        >
          {builtTokens.length === 0 ? (
            <span className="text-sm text-slate-400">
              Tap kata di bawah untuk merangkai jawaban…
            </span>
          ) : (
            <>
              {builtTokens.map((w, i) => (
                <span
                  key={i}
                  className="rounded-xl bg-slate-800 px-3 py-1.5 text-base font-semibold text-white shadow-sm"
                >
                  {w}
                </span>
              ))}
              {status === "answering" && (
                <span className="text-lg text-slate-400">{current.punct}</span>
              )}
              {status !== "answering" && (
                <span className="text-lg text-slate-700">{current.punct}</span>
              )}
            </>
          )}
        </div>

        {/* Word grid */}
        <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
          {current.words.map((w, i) => {
            const used = picked.includes(i);
            return (
              <button
                key={i}
                disabled={used || status !== "answering"}
                onClick={() => tapWord(i)}
                className={`rounded-xl border-2 px-3 py-3 text-base font-semibold transition active:scale-95 ${
                  used
                    ? "border-slate-200 bg-slate-100 text-slate-300 opacity-50"
                    : "border-slate-200 bg-white text-slate-900 hover:border-emerald-400 hover:bg-emerald-50"
                }`}
              >
                {w}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {status === "correct" && (
          <div className="mt-4 rounded-xl border-2 border-emerald-300 bg-emerald-50 px-4 py-3 text-center text-emerald-800">
            <div className="text-lg font-bold">✓ Benar!</div>
            <div className="mt-1 text-sm">
              {current.english.join(" ")}
              {current.punct}
            </div>
          </div>
        )}
        {status === "wrong" && (
          <div className="mt-4 rounded-xl border-2 border-rose-300 bg-rose-50 px-4 py-3 text-center text-rose-800">
            <div className="text-lg font-bold">✗ Belum tepat</div>
            {revealed ? (
              <div className="mt-1 text-sm">
                Jawaban benar:{" "}
                <strong>
                  {current.english.join(" ")}
                  {current.punct}
                </strong>
              </div>
            ) : (
              <button
                onClick={reveal}
                className="mt-1 text-sm text-rose-700 underline hover:text-rose-900"
              >
                Tampilkan jawaban
              </button>
            )}
          </div>
        )}

        {/* Next button when feedback shown */}
        {status !== "answering" && (
          <button
            onClick={next}
            autoFocus
            className="mt-4 rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-emerald-700"
          >
            Soal berikutnya →
          </button>
        )}

        <div className="flex-1" />

        {/* ── Bottom panel: 4 tombol ─────────────────────────── */}
        <nav className="sticky bottom-0 -mx-4 mt-6 grid grid-cols-4 gap-1 border-t border-slate-200 bg-white px-2 py-2 shadow-[0_-2px_8px_rgba(0,0,0,0.04)]">
          <button
            onClick={undo}
            disabled={picked.length === 0 && status === "answering"}
            className="flex flex-col items-center gap-0.5 rounded-lg px-1 py-2 text-[11px] font-medium text-slate-700 hover:bg-rose-50 disabled:opacity-40"
          >
            <span className="text-lg" aria-hidden>↶</span>
            Ups, salah
          </button>
          <button
            onClick={() => setShowHint(true)}
            className="flex flex-col items-center gap-0.5 rounded-lg px-1 py-2 text-[11px] font-medium text-slate-700 hover:bg-amber-50"
          >
            <span className="text-lg" aria-hidden>💡</span>
            Petunjuk
          </button>
          <button
            onClick={() => setShowHelp(true)}
            className="flex flex-col items-center gap-0.5 rounded-lg px-1 py-2 text-[11px] font-medium text-slate-700 hover:bg-sky-50"
          >
            <span className="text-lg" aria-hidden>?</span>
            Bantuan
          </button>
          <button
            disabled
            title="Segera hadir"
            className="flex flex-col items-center gap-0.5 rounded-lg px-1 py-2 text-[11px] font-medium text-slate-400 opacity-60"
          >
            <span className="text-lg" aria-hidden>🎤</span>
            Jawaban lisan
          </button>
        </nav>
      </main>

      {/* Modals */}
      {showHint && (
        <Lesson1HintModal
          question={current}
          onClose={() => setShowHint(false)}
        />
      )}
      {showHelp && <Lesson1HelpModal onClose={() => setShowHelp(false)} />}
    </div>
  );
}
