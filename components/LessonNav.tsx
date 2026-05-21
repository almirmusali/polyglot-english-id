import Link from "next/link";
import { lessons } from "@/data/lessons";

export function LessonNav({ current }: { current: number }) {
  const prev = lessons.find((l) => l.id === current - 1);
  const next = lessons.find((l) => l.id === current + 1);

  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
      {prev ? (
        <Link
          href={`/lesson/${prev.id}`}
          className="flex-1 rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-300"
        >
          <div className="text-xs uppercase tracking-wider text-slate-400">
            ← Sebelumnya
          </div>
          <div className="mt-1 font-medium text-slate-900">
            Pelajaran {prev.id} — {prev.title.replace(/^Pelajaran \d+\s*—\s*/, "")}
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          href={`/lesson/${next.id}`}
          className="flex-1 rounded-xl border border-slate-200 bg-white p-4 text-right hover:border-brand-300"
        >
          <div className="text-xs uppercase tracking-wider text-slate-400">
            Selanjutnya →
          </div>
          <div className="mt-1 font-medium text-slate-900">
            Pelajaran {next.id} — {next.title.replace(/^Pelajaran \d+\s*—\s*/, "")}
          </div>
        </Link>
      ) : (
        <Link
          href="/"
          className="flex-1 rounded-xl border border-slate-200 bg-white p-4 text-right hover:border-brand-300"
        >
          <div className="text-xs uppercase tracking-wider text-slate-400">
            Selesai!
          </div>
          <div className="mt-1 font-medium text-slate-900">Kembali ke beranda</div>
        </Link>
      )}
    </div>
  );
}
