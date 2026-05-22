import Link from "next/link";
import type { Lesson } from "@/data/types";
import { ScoreCircle } from "./ScoreCircle";

/**
 * Kartu pelajaran LinguaID.
 * Tata letak: [lingkaran nilai] [nomor + judul + ringkasan] [→]
 * Aksen di garis kiri berwarna oranye merek.
 */
export function LessonCard({ lesson }: { lesson: Lesson }) {
  const title = lesson.title.replace(/^Pelajaran \d+\s*—\s*/, "");
  return (
    <Link
      href={`/lesson/${lesson.id}`}
      className="group relative flex items-center gap-5 overflow-hidden rounded-lg border border-paper-line bg-paper-surface p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-indigo hover:shadow-card"
    >
      <span
        className="absolute inset-y-0 left-0 w-1 bg-orange opacity-0 transition group-hover:opacity-100"
        aria-hidden
      />
      <ScoreCircle lessonId={lesson.id} size="lg" />
      <div className="min-w-0 flex-1">
        <div className="font-display text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">
          Pelajaran {String(lesson.id).padStart(2, "0")}
        </div>
        <div className="mt-1 font-display text-lg font-semibold leading-snug text-ink group-hover:text-indigo">
          {title}
        </div>
        <div className="mt-1 line-clamp-1 text-sm text-ink-soft">
          {lesson.subtitle}
        </div>
      </div>
      <span
        className="text-xl text-ink-muted transition group-hover:translate-x-1 group-hover:text-orange"
        aria-hidden
      >
        →
      </span>
    </Link>
  );
}
