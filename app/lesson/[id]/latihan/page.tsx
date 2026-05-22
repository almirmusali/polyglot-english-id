import { notFound } from "next/navigation";
import { getLessonById, lessons } from "@/data/lessons";
import { Trainer } from "@/components/Trainer";

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
    title: `Latihan — ${lesson.title} | Poliglot English`,
    description: `Latihan interaktif untuk ${lesson.title}.`,
  };
}

export default async function TrainerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lesson = getLessonById(parseInt(id, 10));
  if (!lesson) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-white">
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
