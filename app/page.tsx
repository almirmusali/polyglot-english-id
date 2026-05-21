import { lessons } from "@/data/lessons";
import { LessonCard } from "@/components/LessonCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10">
        {/* Hero */}
        <section className="rounded-3xl bg-gradient-to-br from-brand-50 via-white to-amber-50 px-6 py-12 sm:px-12 sm:py-16">
          <div className="max-w-3xl">
            <div className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              Bahasa Inggris dalam 16 Pelajaran
            </div>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Belajar bahasa Inggris dengan metode{" "}
              <span className="text-brand-600">Poliglot</span>
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Sistem cepat untuk pelajar Indonesia: kuasai{" "}
              <strong>kerangka tata bahasa</strong> bahasa Inggris hanya dalam
              16 pelajaran singkat. Tanpa hafalan kosong — semua dijelaskan
              dalam bahasa Indonesia dengan contoh praktis.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#pelajaran"
                className="rounded-lg bg-brand-600 px-5 py-3 font-medium text-white shadow-sm hover:bg-brand-700"
              >
                Mulai Pelajaran 1 →
              </a>
              <a
                href="#tentang"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 hover:border-slate-400"
              >
                Tentang metode ini
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
              <div>
                <div className="text-2xl font-bold text-slate-900">16</div>
                <div>Pelajaran lengkap</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">200+</div>
                <div>Kosakata penting</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">100+</div>
                <div>Latihan interaktif</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div>Gratis</div>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons grid */}
        <section id="pelajaran" className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                16 Pelajaran
              </h2>
              <p className="mt-1 text-slate-600">
                Mulailah dari pelajaran pertama. Setiap pelajaran membangun
                dasar untuk yang berikutnya.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </section>

        {/* About */}
        <section
          id="tentang"
          className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 sm:p-12"
        >
          <h2 className="text-2xl font-bold text-slate-900">
            Tentang metode 16 pelajaran
          </h2>
          <div className="mt-4 space-y-4 text-slate-700">
            <p>
              Metode ini terinspirasi dari pendekatan ahli poliglot terkenal —
              fokus pada <strong>kerangka tata bahasa</strong> bahasa Inggris
              alih-alih menghafal ribuan kata sekaligus. Idenya sederhana:
              kuasai 80% dari struktur bahasa hanya dengan 20% usaha.
            </p>
            <p>
              Setiap pelajaran berisi <strong>penjelasan dalam bahasa
              Indonesia</strong>, tabel konjugasi yang mudah dihafal, contoh
              kalimat dengan terjemahan, kosakata inti dengan pengucapan, dan
              latihan interaktif untuk menguatkan pengetahuan.
            </p>
            <p>
              Disarankan: 1 pelajaran per hari, durasi 20–30 menit. Setelah 16
              hari Anda akan memiliki fondasi yang kuat untuk percakapan
              sehari-hari.
            </p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Berbasis kerangka",
                desc: "Tata bahasa sebagai tulang punggung — kosakata tumbuh di atasnya.",
              },
              {
                title: "Untuk orang Indonesia",
                desc: "Penjelasan dalam Bahasa Indonesia, dengan perbandingan yang relevan.",
              },
              {
                title: "Praktis",
                desc: "Setiap pelajaran punya frasa siap pakai dan latihan langsung.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="font-semibold text-slate-900">{f.title}</div>
                <div className="mt-1 text-sm text-slate-600">{f.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
