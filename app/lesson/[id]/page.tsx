import { notFound } from "next/navigation";
import { getLessonById, lessons } from "@/data/lessons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConjugationTable } from "@/components/ConjugationTable";
import { VerbConjugation } from "@/components/VerbConjugation";
import { SummaryGrid } from "@/components/SummaryGrid";
import { VocabularyList } from "@/components/VocabularyList";
import { PhraseList } from "@/components/PhraseList";
import { ExampleList } from "@/components/ExampleList";
import { LessonNav } from "@/components/LessonNav";
import Link from "next/link";

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
    title: `${lesson.title} | Poliglot English`,
    description: lesson.goal,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lesson = getLessonById(parseInt(id, 10));
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
              {g.conjugation && <VerbConjugation data={g.conjugation} />}
              {g.summaryGrid && <SummaryGrid data={g.summaryGrid} />}
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

        {/* Trainer CTA */}
        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Latihan
          </h2>
          <Link
            href={`/lesson/${lesson.id}/latihan`}
            className="mt-3 block overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-amber-50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-md sm:p-8"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-2xl text-white shadow-sm">
                ▶
              </div>
              <div className="flex-1">
                <div className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Buka Latihan Pelajaran {lesson.id}
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  {lesson.exercises.length} latihan interaktif — terjemahan,
                  pilihan ganda, dan isi titik-titik. Satu pertanyaan per
                  layar, dengan skor di akhir.
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-white px-3 py-1 font-medium text-slate-700 ring-1 ring-slate-200">
                    {lesson.exercises.length} pertanyaan
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 font-medium text-slate-700 ring-1 ring-slate-200">
                    ~{Math.max(3, Math.ceil(lesson.exercises.length * 0.7))} menit
                  </span>
                  <span className="ml-auto font-semibold text-brand-700">
                    Mulai →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Navigation */}
        <LessonNav current={lesson.id} />
      </main>
      <Footer />
    </>
  );
}
