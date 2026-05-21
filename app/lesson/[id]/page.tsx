import { notFound } from "next/navigation";
import { getLessonById, lessons } from "@/data/lessons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConjugationTable } from "@/components/ConjugationTable";
import { VocabularyList } from "@/components/VocabularyList";
import { PhraseList } from "@/components/PhraseList";
import { ExampleList } from "@/components/ExampleList";
import { ExerciseSection } from "@/components/ExerciseSection";
import { LessonNav } from "@/components/LessonNav";

export function generateStaticParams() {
  return lessons.map((l) => ({ id: l.id.toString() }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const lesson = getLessonById(parseInt(params.id, 10));
  if (!lesson) return {};
  return {
    title: `${lesson.title} | Poliglot English`,
    description: lesson.goal,
  };
}

export default function LessonPage({ params }: { params: { id: string } }) {
  const lesson = getLessonById(parseInt(params.id, 10));
  if (!lesson) notFound();

  const progress = (lesson.id / 16) * 100;

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-8">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
            <span>Pelajaran {lesson.id} dari 16</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full bg-brand-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          {lesson.title}
        </h1>
        <p className="mt-2 text-lg text-slate-600">{lesson.subtitle}</p>

        {/* Goal */}
        <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
            Tujuan pelajaran
          </div>
          <div className="mt-1 text-slate-800">{lesson.goal}</div>
        </div>

        {/* Intro */}
        <section className="mt-8 text-slate-700 leading-relaxed">
          {lesson.intro}
        </section>

        {/* Grammar sections */}
        <section className="mt-10 space-y-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Tata Bahasa
          </h2>
          {lesson.grammar.map((g, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold text-slate-900">
                {g.heading}
              </h3>
              <p className="mt-2 text-slate-700">{g.explanation}</p>
              {g.table && <ConjugationTable data={g.table} />}
              {g.examples && <ExampleList items={g.examples} />}
              {g.note && (
                <div className="mt-3 rounded-md border-l-4 border-amber-400 bg-amber-50 px-4 py-2 text-sm text-amber-900">
                  <strong>Catatan:</strong> {g.note}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Vocabulary */}
        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Kosakata
          </h2>
          <h3 className="mt-1 text-xl font-semibold text-slate-900">
            {lesson.vocabulary.length} kata penting
          </h3>
          <div className="mt-4">
            <VocabularyList items={lesson.vocabulary} />
          </div>
        </section>

        {/* Phrases */}
        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Frasa Praktis
          </h2>
          <h3 className="mt-1 text-xl font-semibold text-slate-900">
            Frasa siap pakai
          </h3>
          <div className="mt-4">
            <PhraseList items={lesson.phrases} />
          </div>
        </section>

        {/* Exercises */}
        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Latihan
          </h2>
          <h3 className="mt-1 text-xl font-semibold text-slate-900">
            Uji pemahamanmu
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Ketik jawabannya dan tekan Cek. Anda bisa melihat jawaban kapan
            saja.
          </p>
          <div className="mt-4">
            <ExerciseSection exercises={lesson.exercises} />
          </div>
        </section>

        {/* Navigation */}
        <LessonNav current={lesson.id} />
      </main>
      <Footer />
    </>
  );
}
