"use client";

import type { Question } from "@/data/lesson1Bank";
import { PolyglotTable, type Highlight } from "./PolyglotTable";

/**
 * Petunjuk: tabel teori yang SAMA persis dengan layar Bantuan
 * (baris Akan datang → Sekarang → Lampau, kolom Pertanyaan →
 * Pernyataan → Negasi, kata ganti vertikal, kata bantu di kiri),
 * tetapi dengan SEL AKTIF yang disorot hijau sesuai soal Anda.
 *
 * Khusus untuk Sekarang, di mana sel berisi dua sub-grup
 * (I/you/we/they vs he/she/it), sub-grup yang cocok dengan kata
 * ganti soal juga ditandai cincin hijau di dalam sel.
 */
export function Lesson1HintModal({
  question,
  onClose,
}: {
  question: Question;
  onClose: () => void;
}) {
  const { pronoun, verb, tense, kind } = question;

  const highlight: Highlight = {
    tense,
    // map "negative" → "negation" untuk komponen tabel
    kind: kind === "negative" ? "negation" : kind === "statement" ? "statement" : "question",
    pronoun: pronoun.en as Highlight["pronoun"],
  };

  const verbForms = {
    v1: verb.v1,
    v1s: verb.v1s,
    v2: verb.v2,
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/60 sm:items-center"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Petunjuk
            </div>
            <div className="text-xl font-bold text-slate-900">
              {pronoun.en} + <span className="italic">{verb.v1}</span>
            </div>
            <div className="mt-0.5 text-sm text-slate-600">
              Subjek:{" "}
              <span className="italic">{pronoun.idDisplay}</span> · Kata
              kerja: <span className="italic">{verb.idVerb}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-900"
          >
            ✕
          </button>
        </div>

        <PolyglotTable
          verb={verbForms}
          highlight={highlight}
          caption={`Tabel untuk kata kerja "${verb.v1}"`}
        />

        <div className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-xs text-emerald-900">
          💡 Sel yang ditandai <strong>cincin hijau</strong> menunjukkan
          jawaban untuk soal Anda saat ini.
          {tense === "present" && (
            <>
              {" "}
              Di dalam sel itu, sub-grup yang cocok dengan kata ganti{" "}
              <strong>{pronoun.en}</strong> juga ditandai.
            </>
          )}
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-700 hover:border-slate-400"
          >
            Tutup petunjuk
          </button>
        </div>
      </div>
    </div>
  );
}
