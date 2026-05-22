"use client";

import type { Question } from "@/data/lesson1Bank";
import { buildEnglish, TENSE_LABEL } from "@/data/lesson1Bank";

/**
 * Petunjuk: tabel 3 waktu × 3 jenis untuk kata kerja & subjek
 * dari soal yang sedang aktif. Sel yang cocok dengan soal aktif
 * disorot hijau.
 */
export function Lesson1HintModal({
  question,
  onClose,
}: {
  question: Question;
  onClose: () => void;
}) {
  const { pronoun, verb, tense, kind } = question;

  const tenses = ["present", "past", "future"] as const;
  const kinds = ["statement", "negative", "question"] as const;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/60 sm:items-center"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-6"
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

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border-b-2 border-slate-200 bg-slate-50 px-3 py-2 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Waktu
                </th>
                <th className="border-b-2 border-slate-200 bg-emerald-50 px-3 py-2 text-left text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Pernyataan
                </th>
                <th className="border-b-2 border-slate-200 bg-rose-50 px-3 py-2 text-left text-xs font-bold uppercase tracking-wider text-rose-700">
                  Negasi
                </th>
                <th className="border-b-2 border-slate-200 bg-sky-50 px-3 py-2 text-left text-xs font-bold uppercase tracking-wider text-sky-700">
                  Pertanyaan
                </th>
              </tr>
            </thead>
            <tbody>
              {tenses.map((t) => (
                <tr key={t} className="border-b border-slate-100 last:border-b-0">
                  <td className="bg-slate-50 px-3 py-3 font-semibold text-slate-700">
                    {TENSE_LABEL[t]}
                  </td>
                  {kinds.map((k) => {
                    const tokens = buildEnglish(pronoun, verb, t, k);
                    const punct = k === "question" ? "?" : ".";
                    const active = t === tense && k === kind;
                    return (
                      <td
                        key={k}
                        className={`px-3 py-3 ${
                          active
                            ? "bg-emerald-100 font-semibold text-emerald-900 ring-2 ring-emerald-400"
                            : ""
                        }`}
                      >
                        {tokens.join(" ")}
                        {punct}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-xs text-amber-900">
          💡 Sel <span className="font-semibold">hijau</span> menunjukkan
          jawaban untuk soal Anda saat ini.
        </div>
      </div>
    </div>
  );
}
