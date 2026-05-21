import type { PhraseItem } from "@/data/types";

export function PhraseList({ items }: { items: PhraseItem[] }) {
  return (
    <div className="space-y-2">
      {items.map((p, i) => (
        <div
          key={i}
          className="rounded-lg border-l-4 border-brand-400 bg-white px-4 py-3 shadow-sm"
        >
          <div className="font-medium text-slate-900">{p.en}</div>
          <div className="mt-1 text-sm italic text-slate-600">{p.id}</div>
        </div>
      ))}
    </div>
  );
}
