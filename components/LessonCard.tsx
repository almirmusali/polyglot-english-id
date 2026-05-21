import Link from "next/link";
import type { Lesson } from "@/data/types";

export function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <Link
      href={`/lesson/${lesson.id}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 font-bold text-brand-700 group-hover:bg-brand-100">
          {lesson.id}
        </span>
        <span className="text-xs uppercase tracking-wider text-slate-400">
          Pelajaran {lesson.id}
        </span>
      </div>
      <h3 className="mb-1 text-base font-semibold text-slate-900 group-hover:text-brand-700">
        {lesson.title.replace(/^Pelajaran \d+\s*—\s*/, "")}
      </h3>
      <p className="text-sm text-slate-600">{lesson.subtitle}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <span>{lesson.vocabulary.length} kosakata</span>
        <span>{lesson.exercises.length} latihan</span>
      </div>
    </Link>
  );
}
