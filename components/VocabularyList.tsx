import type { VocabItem } from "@/data/types";

export function VocabularyList({ items }: { items: VocabItem[] }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {items.map((v, i) => (
        <div
          key={i}
          className="flex items-baseline justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3"
        >
          <div>
            <div className="font-medium text-slate-900">{v.en}</div>
            <div className="text-sm text-slate-600">{v.id}</div>
          </div>
          {v.pron && (
            <div className="shrink-0 text-xs font-mono text-brand-600">
              [{v.pron}]
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
