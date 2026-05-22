import { notFound } from "next/navigation";
import Link from "next/link";
import { getLessonById, lessons } from "@/data/lessons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConjugationTable } from "@/components/ConjugationTable";
import { VerbConjugation } from "@/components/VerbConjugation";
import { SummaryGrid } from "@/components/SummaryGrid";
import { TheoryGrid } from "@/components/TheoryGrid";
import { VocabularyList } from "@/components/VocabularyList";
import { PhraseList } from "@/components/PhraseList";
import { ExampleList } from "@/components/ExampleList";
import { LessonNav } from "@/components/LessonNav";

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
    title: `${lesson.title} | LinguaID`,
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
          <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-ink-muted">
            <span className="font-display uppercase tracking-[0.18em]">
              Pelajaran {lesson.id} dari 16
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-paper-line">
            <div
              className="h-full bg-indigo transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
          {lesson.title}
        </h1>
        <p className="mt-3 text-lg text-ink-soft">{lesson.subtitle}</p>

        {/* Goal */}
        <div className="mt-7 rounded-lg border-l-4 border-orange bg-orange-soft/60 p-5">
          <div className="font-display text-xs font-bold uppercase tracking-[0.18em] text-orange-dark">
            Tujuan pelajaran
          </div>
          <p className="mt-1 text-ink">{lesson.goal}</p>
        </div>

        {/* Intro */}
        <section className="mt-8 leading-relaxed text-ink-soft">
          {lesson.intro}
        </section>

        {/* Grammar */}
        <section className="mt-12 space-y-10">
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">
            Tata bahasa
          </h2>
          {lesson.grammar.map((g, i) => (
            <div key={i}>
              <h3 className="font-display text-2xl font-bold text-ink">
                {g.heading}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-soft">
                {g.explanation}
              </p>
              {g.theoryGrid && (
                <div className="my-5">
                  <TheoryGrid
                    verb={{
                      v1: g.theoryGrid.v1,
                      v1s: g.theoryGrid.v1s,
                      v2: g.theoryGrid.v2,
                    }}
                    caption={g.theoryGrid.caption}
                  />
                </div>
              )}
              {g.conjugation && <VerbConjugation data={g.conjugation} />}
              {g.summaryGrid && <SummaryGrid data={g.summaryGrid} />}
              {g.table && <ConjugationTable data={g.table} />}
              {g.examples && <ExampleList items={g.examples} />}
              {g.note && (
                <div className="mt-3 rounded-md border-l-4 border-orange bg-orange-soft/40 px-4 py-2.5 text-sm text-ink">
                  <strong className="font-display text-orange-dark">
                    Catatan —
                  </strong>{" "}
                  {g.note}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Vocabulary */}
        <section className="mt-14">
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">
            Kosakata
          </h2>
          <h3 className="mt-1 font-display text-2xl font-bold text-ink">
            {lesson.vocabulary.length} kata penting
          </h3>
          <div className="mt-4">
            <VocabularyList items={lesson.vocabulary} />
          </div>
        </section>

        {/* Phrases */}
        <section className="mt-14">
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">
            Frasa praktis
          </h2>
          <h3 className="mt-1 font-display text-2xl font-bold text-ink">
            Siap dipakai sekarang
          </h3>
          <div className="mt-4">
            <PhraseList items={lesson.phrases} />
          </div>
        </section>

        {/* Trainer CTA */}
        <section className="mt-14">
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">
            Latihan
          </h2>
          <Link
            href={`/lesson/${lesson.id}/latihan`}
            className="mt-3 block overflow-hidden rounded-lg border-2 border-indigo bg-paper-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:bg-paper-soft sm:p-8"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-indigo font-display text-2xl text-paper shadow-soft">
                ▸
              </div>
              <div className="flex-1">
                <div className="font-display text-2xl font-bold text-ink sm:text-3xl">
                  Mulai sesi rangkai-kata
                </div>
                <p className="mt-1 text-sm text-ink-soft">
                  Satu pertanyaan per layar, panel kata di bawah, nilai
                  realtime di atas. Tutup kapan saja — progres tersimpan
                  otomatis.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-paper-tint px-3 py-1 font-medium text-ink-soft">
                    25 soal per sesi
                  </span>
                  <span className="rounded-full bg-paper-tint px-3 py-1 font-medium text-ink-soft">
                    ~5 menit
                  </span>
                  <span className="ml-auto font-display font-bold text-orange">
                    Mulai →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        <LessonNav current={lesson.id} />
      </main>
      <Footer />
    </>
  );
}
