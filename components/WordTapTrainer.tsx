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
 * WordTapTrainer LinguaID.
 *
 * Mekanika: pengguna men-tap kata-kata Inggris secara berurutan
 * untuk membentuk kalimat yang diminta oleh prompt bahasa
 * Indonesia. Pengguna dibantu chip waktu, sehingga tidak ada
 * ambiguitas tense.
 *
 * Tampilan baru:
 *   • header krem terang dengan logo merek (bukan bar hijau)
 *   • prompt menggunakan tipografi Fraunces untuk karakter
 *   • tombol kata radius besar, hover oranye
 *   • bilah riwayat di kanan atas, kompak
 *   • panel bawah 4 ikon, gaya kartu
 */
export function WordTapTrainer({ lessonId }: { lessonId: number }) {
  const [session, setSession] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number[]>([]);
  const [status, setStatus] = useState<Status>("answering");
  const [progress, setProgress] = useState<LessonProgress | null>(null);
  const [history, setHistory] = useState<("correct" | "wrong")[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [revealed, setRevealed] = useState(false);

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

  useEffect(() => {
    if (!current || status !== "answering") return;
    if (builtTokens.length === correct.length && builtTokens.length > 0) {
      checkAnswer(builtTokens);
    }
  }, [builtTokens, correct.length, current, status, checkAnswer]);

  if (!current || !progress) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-ink-muted">
        Memuat sesi latihan…
      </div>
    );
  }

  const score = calcScore(progress);
  const passed = score >= PASS_THRESHOLD;
  const correctCount = history.filter((a) => a === "correct").length;
  const wrongCount = history.filter((a) => a === "wrong").length;

  const tapWord = (i: number) => {
    if (status !== "answering" || picked.includes(i)) return;
    setPicked([...picked, i]);
  };

  const undo = () => {
    if (status === "correct") return;
    if (status === "wrong") {
      setStatus("answering");
      setRevealed(false);
      setPicked(picked.slice(0, -1));
      return;
    }
    setPicked(picked.slice(0, -1));
  };

  const next = () => {
    if (index + 1 >= session.length) {
      setSession(generateSession(SESSION_SIZE));
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setPicked([]);
    setStatus("answering");
    setRevealed(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      {/* ── Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-20 border-b border-paper-line bg-paper-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3">
          <Link
            href={`/lesson/${lessonId}`}
            aria-label="Kembali ke pelajaran"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-paper-line text-ink-soft hover:border-indigo hover:text-indigo"
          >
            ←
          </Link>
          <div className="min-w-0 flex-1 truncate">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-muted">
              Pelajaran {lessonId} · LinguaID
            </div>
            <div className="truncate font-display text-base font-semibold text-ink">
              Bentuk dasar kata kerja
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold">
            <span
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 ${
                passed
                  ? "bg-state-soft text-state"
                  : "bg-orange-soft text-orange-dark"
              }`}
            >
              <span aria-hidden>★</span>
              {score.toFixed(1)}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-correct-soft px-2 py-1 text-correct">
              ✓ {correctCount}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-wrong-soft px-2 py-1 text-wrong">
              ✗ {wrongCount}
            </span>
          </div>
        </div>

        {/* History strip */}
        <div className="mx-auto flex max-w-2xl gap-0.5 px-4 pb-2">
          {Array.from({ length: 20 }).map((_, i) => {
            const a = history[history.length - 20 + i];
            return (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-sm ${
                  a === "correct"
                    ? "bg-correct"
                    : a === "wrong"
                    ? "bg-wrong"
                    : "bg-paper-line"
                }`}
              />
            );
          })}
        </div>
      </header>

      {/* ── Main ───────────────────────────────────────────── */}
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-4 py-6">
        <div className="flex items-center justify-center gap-2">
          <TenseChip tense={current.tense} />
          <span className="rounded-full border border-paper-line bg-paper-surface px-3 py-1 font-display text-xs font-semibold text-ink-soft">
            {KIND_LABEL[current.kind]}
          </span>
        </div>

        {/* Indonesian prompt */}
        <div className="mt-6 rounded-lg border border-paper-line bg-paper-surface px-6 py-8 text-center shadow-soft">
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-muted">
            Terjemahkan ke bahasa Inggris
          </div>
          <p className="mt-3 font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
            {current.indonesian.sentence}
          </p>
          {current.indonesian.hint && (
            <p className="mt-2 text-xs italic text-past">
              ({current.indonesian.hint})
            </p>
          )}
          <p className="mt-1 text-xs text-ink-muted">
            soal {index + 1} / {session.length}
          </p>
        </div>

        {/* Answer area */}
        <div
          className={`mt-4 flex min-h-[56px] flex-wrap items-center justify-center gap-2 rounded-lg border-2 border-dashed px-3 py-3 transition ${
            status === "correct"
              ? "border-correct bg-correct-soft"
              : status === "wrong"
              ? "border-wrong bg-wrong-soft"
              : "border-paper-line bg-paper-surface"
          }`}
        >
          {builtTokens.length === 0 ? (
            <span className="text-sm italic text-ink-muted">
              Tap kata-kata di bawah secara berurutan…
            </span>
          ) : (
            <>
              {builtTokens.map((w, i) => (
                <span
                  key={i}
                  className="rounded-md bg-ink px-3 py-1.5 font-display text-base font-semibold text-paper shadow-soft"
                >
                  {w}
                </span>
              ))}
              <span
                className={
                  status === "answering"
                    ? "text-lg text-ink-muted"
                    : "text-lg text-ink"
                }
              >
                {current.punct}
              </span>
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
                className={`rounded-md border-2 px-3 py-3 font-display text-base font-semibold transition active:scale-95 ${
                  used
                    ? "border-paper-line bg-paper-soft text-ink-muted opacity-40"
                    : "border-paper-line bg-paper-surface text-ink hover:-translate-y-0.5 hover:border-orange hover:bg-orange-soft hover:text-orange-dark"
                }`}
              >
                {w}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {status === "correct" && (
          <div className="mt-4 rounded-lg border-2 border-correct bg-correct-soft px-4 py-3 text-center text-correct">
            <div className="font-display text-lg font-bold">✓ Tepat!</div>
            <div className="mt-1 text-sm">
              {current.english.join(" ")}
              {current.punct}
            </div>
          </div>
        )}
        {status === "wrong" && (
          <div className="mt-4 rounded-lg border-2 border-wrong bg-wrong-soft px-4 py-3 text-center text-wrong">
            <div className="font-display text-lg font-bold">
              ✗ Belum tepat
            </div>
            {revealed ? (
              <div className="mt-1 text-sm">
                Yang benar:{" "}
                <strong>
                  {current.english.join(" ")}
                  {current.punct}
                </strong>
              </div>
            ) : (
              <button
                onClick={() => setRevealed(true)}
                className="mt-1 text-sm underline hover:opacity-80"
              >
                Tampilkan jawaban
              </button>
            )}
          </div>
        )}

        {status !== "answering" && (
          <button
            onClick={next}
            autoFocus
            className="mt-4 rounded-md bg-indigo px-6 py-3 font-display text-base font-semibold text-white shadow-card hover:bg-indigo-dark"
          >
            Soal berikutnya →
          </button>
        )}

        <div className="flex-1" />

        {/* Bottom panel */}
        <nav className="sticky bottom-0 -mx-4 mt-6 grid grid-cols-4 gap-1 border-t border-paper-line bg-paper-surface/95 px-2 py-2 backdrop-blur">
          <button
            onClick={undo}
            disabled={picked.length === 0 && status === "answering"}
            className="flex flex-col items-center gap-0.5 rounded-md px-1 py-2 text-[11px] font-medium text-ink-soft hover:bg-orange-soft hover:text-orange-dark disabled:opacity-40"
          >
            <span className="text-lg" aria-hidden>
              ↶
            </span>
            Ulang langkah
          </button>
          <button
            onClick={() => setShowHint(true)}
            className="flex flex-col items-center gap-0.5 rounded-md px-1 py-2 text-[11px] font-medium text-ink-soft hover:bg-ask-soft hover:text-ask"
          >
            <span className="text-lg" aria-hidden>
              ⌖
            </span>
            Petunjuk
          </button>
          <button
            onClick={() => setShowHelp(true)}
            className="flex flex-col items-center gap-0.5 rounded-md px-1 py-2 text-[11px] font-medium text-ink-soft hover:bg-paper-soft hover:text-indigo"
          >
            <span className="text-lg" aria-hidden>
              ❖
            </span>
            Teori
          </button>
          <button
            disabled
            title="Akan datang di versi berikutnya"
            className="flex flex-col items-center gap-0.5 rounded-md px-1 py-2 text-[11px] font-medium text-ink-muted opacity-60"
          >
            <span className="text-lg" aria-hidden>
              ◉
            </span>
            Jawaban lisan
          </button>
        </nav>
      </main>

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
