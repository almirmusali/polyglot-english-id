import Link from "next/link";
import type { Lesson } from "@/data/types";
import { ScoreCircle } from "./ScoreCircle";

/**
 * Kartu pelajaran ala Polyglot:
 * Layout horizontal: [lingkaran nilai 0.0–5.0] [nomor + judul]
 * Lingkaran hijau jika lulus (≥ 4.5), oranye jika belum.
 */
export function LessonCard({ lesson }: { lesson: Lesson }) {
  const title = lesson.title.replace(/^Pelajaran \d+\s*—\s*/, "");
  return (
    <Link
      href={`/lesson/${lesson.id}`}
      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
    >
      <ScoreCircle lessonId={lesson.id} size="lg" />
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-slate-900">
          Pelajaran {lesson.id}
        </div>
        <div className="mt-0.5 line-clamp-2 text-sm text-slate-600 group-hover:text-brand-700">
          {title}
        </div>
        <div className="mt-2 truncate text-xs text-slate-400">
          {lesson.subtitle}
        </div>
      </div>
      <span className="text-slate-300 group-hover:text-brand-400" aria-hidden>
        →
      </span>
    </Link>
  );
}
