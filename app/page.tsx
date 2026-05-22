import { lessons } from "@/data/lessons";
import { LessonCard } from "@/components/LessonCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="linguaid-paper border-b border-paper-line">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
            <span className="inline-block rounded-full border border-paper-line bg-paper-surface px-3 py-1 font-display text-xs font-semibold uppercase tracking-[0.18em] text-indigo">
              Edisi pemula Indonesia
            </span>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-6xl">
              Susun bahasa Inggris{" "}
              <span className="relative inline-block">
                <span className="relative z-10">kata demi kata.</span>
                <span
                  className="absolute inset-x-0 bottom-1 z-0 h-3 -skew-x-3 bg-orange/40"
                  aria-hidden
                />
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-ink-soft sm:text-xl">
              Tap setiap kata sesuai urutan, kunci tiga waktu (Sekarang —
              Lampau — Akan datang), dan biarkan tabel teori membimbing.
              Tanpa hafalan kosong, tanpa kuliah panjang.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#daftar"
                className="inline-flex items-center gap-2 rounded-md bg-indigo px-5 py-3 font-semibold text-white shadow-card transition hover:bg-indigo-dark"
              >
                Mulai dari Pelajaran 1
                <span aria-hidden>→</span>
              </a>
              <a
                href="#metode"
                className="inline-flex items-center gap-2 rounded-md border border-paper-line-strong bg-paper-surface px-5 py-3 font-semibold text-ink transition hover:border-indigo"
              >
                Pelajari metodenya
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-10">
              {[
                { value: "16", label: "Pelajaran" },
                { value: "20+", label: "Kata kerja inti" },
                { value: "9", label: "Bentuk kalimat" },
                { value: "0₽", label: "Selalu gratis" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-extrabold text-indigo sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Daftar pelajaran ─────────────────────────────── */}
        <section id="daftar" className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                16 langkah, satu kerangka
              </h2>
              <p className="mt-2 max-w-2xl text-ink-soft">
                Setiap kartu menampilkan nilai Anda di pelajaran itu (0.0–5.0).
                Lingkaran berubah dari oranye ke teal saat Anda mencapai 4.5
                atau lebih.
              </p>
            </div>
            <span className="text-xs uppercase tracking-[0.18em] text-ink-muted">
              Mulai dari atas, urut ke bawah
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </section>

        {/* ── Metode ───────────────────────────────────────── */}
        <section
          id="metode"
          className="border-t border-paper-line bg-paper-soft"
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Bagaimana LinguaID mengajar
            </h2>
            <p className="mt-3 max-w-3xl text-ink-soft">
              Daripada menghafal daftar kata, Anda dilatih{" "}
              <strong>membentuk</strong> kalimat berulang-ulang dari
              komponennya. Pola yang sama — tiga waktu kali tiga jenis
              kalimat — diterapkan ke puluhan kata kerja sampai gerakannya
              terasa alami.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Satu kerangka",
                  body: "Sembilan bentuk kalimat dalam satu tabel. Sekali kuasai, berlaku untuk semua kata kerja.",
                  k: "01",
                },
                {
                  title: "Tap, jangan ketik",
                  body: "Kata-kata sudah disiapkan — Anda hanya merangkainya. Lebih cepat dari pena, lebih ingat dari membaca.",
                  k: "02",
                },
                {
                  title: "Nilai yang jujur",
                  body: "Nilai 0.0–5.0 dihitung dari 20 percobaan terakhir, disimpan lokal. Lulus saat ≥ 4.5.",
                  k: "03",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-lg border border-paper-line bg-paper-surface p-6 shadow-soft"
                >
                  <div className="font-display text-sm font-bold text-orange">
                    {c.k}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft">{c.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-3xl text-sm text-ink-muted">
              Latihan rutin 15 menit per hari memberi hasil lebih baik
              daripada satu sesi panjang sekali seminggu. Mulai dari
              Pelajaran 1 — di sana Anda mendapat seluruh kerangka.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
