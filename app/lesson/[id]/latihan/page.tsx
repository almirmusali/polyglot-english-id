import { notFound } from "next/navigation";
import { getLessonById, lessons } from "@/data/lessons";
import { Trainer } from "@/components/Trainer";
import { WordTapTrainer } from "@/components/WordTapTrainer";

export function generateStaticParams() {
  return lessons.map((l) => ({ id: l.id.toString() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lesson = getLessonById(parseInt(id, 10));
  if (!lesson) return {};
  return {
    title: `Latihan — ${lesson.title} | LinguaID`,
    description: `Sesi rangkai-kata untuk ${lesson.title}.`,
  };
}

export default async function TrainerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lessonId = parseInt(id, 10);
  const lesson = getLessonById(lessonId);
  if (!lesson) notFound();

  // Pelajaran 1 memakai WordTapTrainer khusus dengan generator
  // soal otomatis dan chip waktu. Pelajaran lain pakai trainer
  // generik berbasis daftar soal dari data/lessons.ts.
  if (lessonId === 1) {
    return <WordTapTrainer lessonId={1} />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <main className="flex flex-1 items-center justify-center px-4 py-8 sm:py-12">
        <Trainer
          exercises={lesson.exercises}
          lessonId={lesson.id}
          lessonTitle={lesson.title}
        />
      </main>
    </div>
  );
}
