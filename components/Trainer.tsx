"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Exercise } from "@/data/types";

function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/[.,!?;:'"`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

type Status = "answering" | "correct" | "wrong";

export function Trainer({
  exercises,
  lessonId,
  lessonTitle,
}: {
  exercises: Exercise[];
  lessonId: number;
  lessonTitle: string;
}) {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<Status>("answering");
  const [revealed, setRevealed] = useState(false);
  // results: index -> "correct" | "wrong" | "skipped"
  const [results, setResults] = useState<Record<number, "correct" | "wrong" | "skipped">>(
    {}
  );
  const [finished, setFinished] = useState(false);

  const total = exercises.length;
  const current = exercises[index];
  const progress = ((index + (status === "answering" ? 0 : 1)) / total) * 100;

  const correctCount = useMemo(
    () => Object.values(results).filter((r) => r === "correct").length,
    [results]
  );
  const wrongCount = useMemo(
    () => Object.values(results).filter((r) => r === "wrong").length,
    [results]
  );
  const skippedCount = useMemo(
    () => Object.values(results).filter((r) => r === "skipped").length,
    [results]
  );

  const check = (v?: string) => {
    const ans = v ?? value;
    if (!ans.trim()) return;
    if (normalize(ans) === normalize(current.answer)) {
      setStatus("correct");
      setResults((r) => ({ ...r, [index]: "correct" }));
    } else {
      setStatus("wrong");
      setResults((r) => ({ ...r, [index]: r[index] ?? "wrong" }));
    }
  };

  const reveal = () => {
    setRevealed(true);
    setResults((r) => ({ ...r, [index]: r[index] ?? "wrong" }));
  };

  const skip = () => {
    setResults((r) => ({ ...r, [index]: r[index] ?? "skipped" }));
    next();
  };

  const next = () => {
    if (index + 1 < total) {
      setIndex(index + 1);
      setValue("");
      setStatus("answering");
      setRevealed(false);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setIndex(0);
    setValue("");
    setStatus("answering");
    setRevealed(false);
    setResults({});
    setFinished(false);
  };

  // ---- Finish screen ----
  if (finished) {
    const score = correctCount;
    const percent = Math.round((score / total) * 100);
    const grade =
      percent >= 90 ? "Luar biasa!" :
      percent >= 70 ? "Bagus sekali!" :
      percent >= 50 ? "Tidak buruk!" :
      "Coba lagi!";
    const emoji =
      percent >= 90 ? "🏆" :
      percent >= 70 ? "🎉" :
      percent >= 50 ? "👍" : "💪";

    return (
      <div className="mx-auto max-w-xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="text-6xl">{emoji}</div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">{grade}</h2>
          <p className="mt-2 text-slate-600">
            Anda menyelesaikan latihan pelajaran {lessonId}.
          </p>

          <div className="mx-auto my-6 flex h-32 w-32 items-center justify-center rounded-full border-8 border-brand-100 bg-brand-50">
            <div>
              <div className="text-3xl font-bold text-brand-700">
                {score}<span className="text-xl text-slate-400">/{total}</span>
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-500">
                {percent}%
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-sm">
            <div className="rounded-lg bg-emerald-50 px-3 py-2">
              <div className="font-bold text-emerald-700">{correctCount}</div>
              <div className="text-xs text-slate-500">Benar</div>
            </div>
            <div className="rounded-lg bg-rose-50 px-3 py-2">
              <div className="font-bold text-rose-700">{wrongCount}</div>
              <div className="text-xs text-slate-500">Salah</div>
            </div>
            <div className="rounded-lg bg-slate-100 px-3 py-2">
              <div className="font-bold text-slate-700">{skippedCount}</div>
              <div className="text-xs text-slate-500">Lewati</div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <button
              onClick={restart}
              className="rounded-lg bg-brand-600 px-6 py-3 font-medium text-white hover:bg-brand-700"
            >
              ↻ Ulangi
            </button>
            <Link
              href={`/lesson/${lessonId}`}
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 hover:border-slate-400"
            >
              ← Kembali ke pelajaran
            </Link>
            {lessonId < 16 && (
              <Link
                href={`/lesson/${lessonId + 1}`}
                className="rounded-lg border border-brand-300 bg-brand-50 px-6 py-3 font-medium text-brand-700 hover:bg-brand-100"
              >
                Pelajaran berikutnya →
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ---- Trainer screen ----
  return (
    <div className="mx-auto max-w-xl">
      {/* Top bar: close + progress */}
      <div className="mb-5 flex items-center gap-3">
        <Link
          href={`/lesson/${lessonId}`}
          aria-label="Tutup"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:border-slate-400 hover:text-slate-900"
        >
          ✕
        </Link>
        <div className="flex-1">
          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full bg-brand-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="shrink-0 text-xs font-medium text-slate-600">
          {index + 1} / {total}
        </div>
      </div>

      {/* Pills */}
      <div className="mb-4 flex items-center gap-2 text-xs">
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700">
          ✓ {correctCount}
        </span>
        <span className="rounded-full bg-rose-50 px-2 py-0.5 font-medium text-rose-700">
          ✗ {wrongCount}
        </span>
        <span className="ml-auto truncate text-slate-400">
          {lessonTitle}
        </span>
      </div>

      {/* Card */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-widest text-brand-600">
          {current.type === "translate"
            ? "Terjemahkan"
            : current.type === "fill"
            ? "Lengkapi"
            : "Pilih jawaban"}
        </div>
        <p className="mt-2 text-sm text-slate-600">{current.prompt}</p>
        <div className="mt-5 rounded-2xl bg-slate-50 px-5 py-6 text-center text-xl font-medium text-slate-900">
          {current.question}
        </div>

        {/* Answer area */}
        {current.options ? (
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-2">
            {current.options.map((opt) => {
              const isPicked = value === opt;
              const isCorrect = normalize(opt) === normalize(current.answer);
              const showCorrect = status !== "answering" && isCorrect;
              const showWrong = status === "wrong" && isPicked;
              return (
                <button
                  key={opt}
                  disabled={status !== "answering"}
                  onClick={() => {
                    setValue(opt);
                    check(opt);
                  }}
                  className={`rounded-xl border-2 px-4 py-3 text-sm font-medium transition ${
                    showCorrect
                      ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                      : showWrong
                      ? "border-rose-500 bg-rose-50 text-rose-800"
                      : isPicked
                      ? "border-brand-500 bg-brand-50"
                      : "border-slate-200 bg-white hover:border-slate-400 disabled:opacity-60"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mt-5">
            <input
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (status !== "answering") setStatus("answering");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (status === "answering") check();
                  else next();
                }
              }}
              autoFocus
              disabled={status === "correct"}
              placeholder="Ketik jawabanmu di sini..."
              className={`w-full rounded-xl border-2 px-4 py-3 text-base outline-none transition ${
                status === "correct"
                  ? "border-emerald-500 bg-emerald-50"
                  : status === "wrong"
                  ? "border-rose-400 bg-rose-50"
                  : "border-slate-300 focus:border-brand-500"
              }`}
            />
          </div>
        )}

        {/* Feedback */}
        {status === "correct" && (
          <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            <div className="font-semibold">✓ Benar!</div>
            <div className="mt-1">
              Jawaban: <strong>{current.answer}</strong>
            </div>
          </div>
        )}
        {status === "wrong" && (
          <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
            <div className="font-semibold">✗ Belum tepat.</div>
            {revealed ? (
              <div className="mt-1">
                Jawaban yang benar:{" "}
                <strong>{current.answer}</strong>
              </div>
            ) : (
              <button
                onClick={reveal}
                className="mt-1 text-rose-700 underline hover:text-rose-900"
              >
                Tampilkan jawaban
              </button>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-6 flex gap-2">
          {status === "answering" && !current.options && (
            <button
              onClick={() => check()}
              disabled={!value.trim()}
              className="flex-1 rounded-xl bg-brand-600 px-6 py-3 font-medium text-white hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cek jawaban
            </button>
          )}
          {status === "answering" && (
            <button
              onClick={skip}
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-600 hover:border-slate-400"
            >
              Lewati →
            </button>
          )}
          {status !== "answering" && (
            <button
              onClick={next}
              autoFocus
              className="flex-1 rounded-xl bg-brand-600 px-6 py-3 font-medium text-white hover:bg-brand-700"
            >
              {index + 1 < total ? "Lanjut →" : "Selesai →"}
            </button>
          )}
        </div>
      </div>

      {/* Tip */}
      <p className="mt-4 text-center text-xs text-slate-400">
        Tekan <kbd className="rounded border border-slate-300 bg-white px-1.5">Enter</kbd> untuk mengecek atau lanjut
      </p>
    </div>
  );
}
