import type { SummaryGridData } from "@/data/types";

/**
 * "9-form" summary grid in the Polyglot style:
 *   - 3 rows (3 tenses) × 3 columns (positive / negative / question)
 *   - One verb, one subject — to make the pattern crystal clear
 *   - Auxiliaries highlighted in color
 */

const COLOR = {
  positive: {
    headerBg: "bg-emerald-100",
    headerText: "text-emerald-800",
    cell: "bg-emerald-50",
    accent: "text-emerald-700",
  },
  negative: {
    headerBg: "bg-rose-100",
    headerText: "text-rose-800",
    cell: "bg-rose-50",
    accent: "text-rose-700",
  },
  question: {
    headerBg: "bg-sky-100",
    headerText: "text-sky-800",
    cell: "bg-sky-50",
    accent: "text-sky-700",
  },
} as const;
const KEYS = ["positive", "negative", "question"] as const;

const AUX_RE =
  /\b(Do|Does|Did|Will|do not|does not|did not|will not|don't|doesn't|didn't|won't|will|'ll)\b/g;

function highlight(text: string, accentClass: string) {
  const segments: (string | { aux: string })[] = [];
  let last = 0;
  for (const m of text.matchAll(AUX_RE)) {
    const start = m.index ?? 0;
    if (start > last) segments.push(text.slice(last, start));
    segments.push({ aux: m[0] });
    last = start + m[0].length;
  }
  if (last < text.length) segments.push(text.slice(last));
  return segments.map((s, i) =>
    typeof s === "string" ? (
      <span key={i}>{s}</span>
    ) : (
      <span key={i} className={`font-bold ${accentClass}`}>
        {s.aux}
      </span>
    )
  );
}

export function SummaryGrid({ data }: { data: SummaryGridData }) {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border-2 border-slate-300 bg-white shadow-md">
      {/* Caption */}
      <div className="border-b-2 border-slate-300 bg-slate-50 px-5 py-3 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
          Ringkasan — 9 bentuk
        </div>
        {data.caption && (
          <div className="mt-1 text-base font-semibold text-slate-900">
            {data.caption}
          </div>
        )}
        <div className="mt-1 text-sm text-slate-600">
          subjek: <span className="font-semibold italic">{data.subject}</span>{" "}
          · kata kerja:{" "}
          <span className="font-semibold italic">{data.verb}</span>
        </div>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-[auto_repeat(3,minmax(0,1fr))] border-b-2 border-slate-200 text-center text-xs font-bold uppercase tracking-wider">
        <div className="px-3 py-3 text-slate-400">Waktu</div>
        {KEYS.map((k, i) => (
          <div
            key={k}
            className={`px-3 py-3 ${COLOR[k].headerBg} ${COLOR[k].headerText}`}
          >
            {i === 0 ? "Positif" : i === 1 ? "Negatif" : "Pertanyaan"}
          </div>
        ))}
      </div>

      {/* Rows */}
      {data.rows.map((row, ri) => (
        <div
          key={ri}
          className="grid grid-cols-[auto_repeat(3,minmax(0,1fr))] border-t border-slate-200 first:border-t-0"
        >
          <div className="flex flex-col items-start justify-center gap-0.5 border-r border-slate-200 bg-slate-50 px-4 py-4">
            <div className="text-sm font-semibold text-slate-900">
              {row.tense}
            </div>
            {row.aux && (
              <div className="text-xs text-slate-500">
                kata bantu: <span className="font-mono">{row.aux}</span>
              </div>
            )}
          </div>
          {row.cells.map((cell, ci) => {
            const k = KEYS[ci];
            return (
              <div
                key={ci}
                className={`flex items-center justify-center border-r border-slate-200 px-3 py-4 text-center text-base last:border-r-0 ${COLOR[k].cell}`}
              >
                <span>{highlight(cell, COLOR[k].accent)}</span>
              </div>
            );
          })}
        </div>
      ))}

      {data.hint && (
        <div className="border-t-2 border-slate-200 bg-amber-50 px-5 py-3 text-sm text-amber-900">
          💡 {data.hint}
        </div>
      )}
    </div>
  );
}
