"use client";

import { useState } from "react";
import type { Exercise } from "@/data/types";

function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/[.,!?;:'"`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function ExerciseItem({ exercise, index }: { exercise: Exercise; index: number }) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [revealed, setRevealed] = useState(false);

  const check = () => {
    if (normalize(value) === normalize(exercise.answer)) {
      setStatus("correct");
    } else {
      setStatus("wrong");
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-1 text-xs uppercase tracking-wider text-slate-400">
        Latihan {index + 1} — {exercise.type === "translate" ? "Terjemahkan" : exercise.type === "fill" ? "Lengkapi" : "Pilih"}
      </div>
      <div className="mb-2 text-sm text-slate-600">{exercise.prompt}</div>
      <div className="mb-3 text-base font-medium text-slate-900">
        {exercise.question}
      </div>

      {exercise.options ? (
        <div className="mb-3 flex flex-wrap gap-2">
          {exercise.options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                setValue(opt);
                if (normalize(opt) === normalize(exercise.answer)) {
                  setStatus("correct");
                } else {
                  setStatus("wrong");
                }
              }}
              className={`rounded-lg border px-3 py-1.5 text-sm transition ${
                value === opt
                  ? status === "correct"
                    ? "border-green-500 bg-green-50"
                    : status === "wrong"
                    ? "border-red-500 bg-red-50"
                    : "border-brand-500 bg-brand-50"
                  : "border-slate-200 bg-white hover:border-slate-400"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <div className="mb-3 flex gap-2">
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setStatus("idle");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") check();
            }}
            placeholder="Ketik jawabanmu..."
            className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-500"
          />
          <button
            onClick={check}
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            Cek
          </button>
        </div>
      )}

      {status === "correct" && (
        <div className="text-sm font-medium text-green-700">
          ✓ Benar! Jawabannya: <strong>{exercise.answer}</strong>
        </div>
      )}
      {status === "wrong" && (
        <div className="text-sm text-red-700">
          ✗ Coba lagi. {revealed && <span>Jawaban: <strong>{exercise.answer}</strong></span>}
        </div>
      )}
      {status !== "correct" && (
        <button
          onClick={() => setRevealed(true)}
          className="mt-2 text-xs text-slate-500 underline hover:text-slate-700"
        >
          Tampilkan jawaban
        </button>
      )}
    </div>
  );
}

export function ExerciseSection({ exercises }: { exercises: Exercise[] }) {
  return (
    <div className="space-y-3">
      {exercises.map((e, i) => (
        <ExerciseItem key={i} exercise={e} index={i} />
      ))}
    </div>
  );
}
