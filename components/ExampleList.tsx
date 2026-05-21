import type { ExampleSentence } from "@/data/types";

export function ExampleList({ items }: { items: ExampleSentence[] }) {
  return (
    <ul className="my-3 space-y-2">
      {items.map((e, i) => (
        <li key={i} className="rounded-md bg-slate-50 px-3 py-2 text-sm">
          <span className="font-medium text-slate-900">{e.en}</span>
          {e.id && (
            <span className="ml-2 text-slate-600">— {e.id}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
