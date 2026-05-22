"use client";

import type { Question } from "@/data/lesson1Bank";
import { TheoryGrid, type TheoryHighlight } from "./TheoryGrid";

/**
 * Petunjuk — LinguaID.
 *
 * Tabel yang persis sama dengan layar Teori, namun sel yang cocok
 * dengan soal saat ini diberi cincin oranye merek + tag "INI".
 * Untuk Sekarang, sub-grup yang cocok dengan kata ganti soal juga
 * disorot.
 */
export function Lesson1HintModal({
  question,
  onClose,
}: {
  question: Question;
  onClose: () => void;
}) {
  const { pronoun, verb, tense, kind } = question;

  const highlight: TheoryHighlight = {
    tense,
    kind:
      kind === "negative"
        ? "negation"
        : kind === "statement"
        ? "statement"
        : "question",
    pronoun: pronoun.en as TheoryHighlight["pronoun"],
  };

  const verbForms = { v1: verb.v1, v1s: verb.v1s, v2: verb.v2 };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 sm:items-center"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-xl bg-paper-surface p-5 shadow-pop sm:rounded-lg sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between">
          <div>
            <div className="font-display text-xs font-bold uppercase tracking-[0.18em] text-orange">
              Petunjuk
            </div>
            <h2 className="mt-1 font-display text-xl font-bold text-ink">
              {pronoun.en} + <span className="italic">{verb.v1}</span>
            </h2>
            <p className="mt-0.5 text-sm text-ink-soft">
              Subjek: <span className="italic">{pronoun.idDisplay}</span> ·
              Kata kerja: <span className="italic">{verb.idVerb}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-paper-line text-ink-soft hover:border-indigo hover:text-indigo"
          >
            ✕
          </button>
        </div>

        <TheoryGrid
          verb={verbForms}
          highlight={highlight}
          caption={`Tabel "${verb.v1}" — sel target di bawah`}
        />

        <div className="mt-4 rounded-md border-l-4 border-orange bg-orange-soft/60 p-4 text-sm text-ink">
          Sel dengan tanda <strong className="text-orange-dark">INI</strong>{" "}
          adalah jawaban untuk soal Anda sekarang.
          {tense === "present" && (
            <>
              {" "}
              Di dalam sel, sub-grup kata ganti{" "}
              <strong>{pronoun.en}</strong> juga ditandai.
            </>
          )}
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={onClose}
            className="rounded-md border border-paper-line bg-paper-surface px-5 py-2 text-sm font-medium text-ink hover:border-indigo"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
