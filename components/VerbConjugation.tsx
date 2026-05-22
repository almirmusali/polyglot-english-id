import type { VerbConjugationData } from "@/data/types";

/**
 * Spesialisasi tabel konjugasi gaya "Poliglot":
 * - 3 kolom: Positif (hijau), Negatif (merah), Pertanyaan (biru)
 * - Kelompok kata ganti di sisi kiri tiap baris
 * - Mendukung pewarnaan kata bantu (do/does/did/will, don't/doesn't/didn't/won't)
 */

const COLOR = {
  positive: {
    headerBg: "bg-emerald-50",
    headerText: "text-emerald-700",
    cell: "bg-emerald-50/60",
    accent: "text-emerald-700",
  },
  negative: {
    headerBg: "bg-rose-50",
    headerText: "text-rose-700",
    cell: "bg-rose-50/60",
    accent: "text-rose-700",
  },
  question: {
    headerBg: "bg-sky-50",
    headerText: "text-sky-700",
    cell: "bg-sky-50/60",
    accent: "text-sky-700",
  },
} as const;

const COLUMN_KEYS = ["positive", "negative", "question"] as const;

// Highlights auxiliary words (do/does/did/will/don't/doesn't/didn't/won't/will not/-ed/-s)
// by wrapping them in colored spans.
function renderCell(text: string, accentClass: string) {
  // Special rendering for "..." placeholder used in questions like "Do ... love?"
  const parts = text.split(/(\.\.\.)/g);
  return parts.map((p, i) =>
    p === "..." ? (
      <span key={i} className="mx-1 inline-block text-slate-400">
        …
      </span>
    ) : (
      // accent first word if it's a known auxiliary
      <span key={i}>{highlightAuxiliaries(p, accentClass)}</span>
    )
  );
}

const AUX_RE =
  /\b(Do|Does|Did|Will|do not|does not|did not|will not|don't|doesn't|didn't|won't|will|'ll)\b/g;

function highlightAuxiliaries(text: string, accentClass: string) {
  const segments: (string | { aux: string })[] = [];
  let lastIndex = 0;
  for (const m of text.matchAll(AUX_RE)) {
    const start = m.index ?? 0;
    if (start > lastIndex) segments.push(text.slice(lastIndex, start));
    segments.push({ aux: m[0] });
    lastIndex = start + m[0].length;
  }
  if (lastIndex < text.length) segments.push(text.slice(lastIndex));

  return segments.map((s, i) =>
    typeof s === "string" ? (
      <span key={i}>{s}</span>
    ) : (
      <span key={i} className={`font-semibold ${accentClass}`}>
        {s.aux}
      </span>
    )
  );
}

export function VerbConjugation({ data }: { data: VerbConjugationData }) {
  const columns = data.columns ?? ["Positif", "Negatif", "Pertanyaan"];

  return (
    <div className="my-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-baseline justify-between border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white px-4 py-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {data.tense}
          </div>
          <div className="mt-0.5 text-lg font-bold text-slate-900">
            {data.verb}
          </div>
        </div>
        {data.hint && (
          <div className="hidden text-xs text-slate-500 sm:block">
            {data.hint}
          </div>
        )}
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-[auto_repeat(3,minmax(0,1fr))] border-b border-slate-200 text-center text-xs font-semibold uppercase tracking-wider">
        <div className="px-3 py-2 text-slate-400">Subjek</div>
        {columns.map((c, i) => {
          const k = COLUMN_KEYS[i];
          return (
            <div key={c} className={`px-3 py-2 ${COLOR[k].headerBg} ${COLOR[k].headerText}`}>
              {c}
            </div>
          );
        })}
      </div>

      {/* Rows */}
      <div>
        {data.groups.map((g, gi) => (
          <div
            key={gi}
            className="grid grid-cols-[auto_repeat(3,minmax(0,1fr))] border-t border-slate-100 first:border-t-0"
          >
            <div className="flex flex-col items-start justify-center gap-0.5 border-r border-slate-100 bg-slate-50/50 px-3 py-3 text-sm italic text-slate-600">
              {g.pronouns.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
            {g.cells.map((cell, ci) => {
              const k = COLUMN_KEYS[ci];
              return (
                <div
                  key={ci}
                  className={`flex items-center justify-center border-r border-slate-100 px-3 py-3 text-center text-sm last:border-r-0 ${COLOR[k].cell}`}
                >
                  <span>{renderCell(cell, COLOR[k].accent)}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {data.hint && (
        <div className="border-t border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-600 sm:hidden">
          {data.hint}
        </div>
      )}
    </div>
  );
}
