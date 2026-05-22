"use client";

import { TheoryGrid } from "./TheoryGrid";

/**
 * Layar Teori — LinguaID.
 *
 * Disusun seperti satu lembar buku saku: kontras Indonesia-Inggris
 * di atas, lalu tabel sembilan bentuk yang sama dengan halaman
 * pelajaran. Aturan ditulis ulang dengan bahasa percakapan.
 */
export function Lesson1HelpModal({ onClose }: { onClose: () => void }) {
  const verb = { v1: "love", v1s: "loves", v2: "loved" };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 sm:items-center"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-xl bg-paper-surface p-5 shadow-pop sm:rounded-lg sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between">
          <div>
            <div className="font-display text-xs font-bold uppercase tracking-[0.18em] text-orange">
              Teori
            </div>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink">
              Tiga waktu, tiga jenis kalimat
            </h2>
            <p className="mt-1 text-sm text-ink-soft">
              Semua aturan Pelajaran 1 dalam satu tabel.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-paper-line text-ink-soft hover:border-indigo hover:text-indigo"
          >
            ✕
          </button>
        </div>

        {/* Indonesia ↔ Inggris */}
        <section className="rounded-lg border border-paper-line bg-paper-soft p-5">
          <h3 className="font-display text-base font-bold text-indigo">
            Apa bedanya dengan bahasa Indonesia?
          </h3>
          <p className="mt-2 text-sm text-ink-soft">
            Bahasa Indonesia menandai waktu lewat kata keterangan ("sudah",
            "akan", "kemarin"), sedangkan bahasa Inggris mengubah{" "}
            <strong>bentuk kata kerja</strong> dan/atau menambahkan{" "}
            <strong>kata bantu</strong>. Empat hal di bawah ini adalah
            pengganggu paling sering bagi pemula:
          </p>
          <ol className="mt-3 grid gap-2 text-sm text-ink sm:grid-cols-2">
            <li className="rounded-md bg-paper-surface px-3 py-2">
              <span className="font-display font-bold text-orange">a.</span>{" "}
              Untuk waktu sekarang dengan <em>he/she/it</em>, kata kerja
              dapat akhiran <strong>-s</strong>: <em>She eats.</em>
            </li>
            <li className="rounded-md bg-paper-surface px-3 py-2">
              <span className="font-display font-bold text-orange">b.</span>{" "}
              Pertanyaan dan negasi <strong>wajib</strong> punya kata bantu —
              do, does, did, atau will.
            </li>
            <li className="rounded-md bg-paper-surface px-3 py-2">
              <span className="font-display font-bold text-orange">c.</span>{" "}
              Setelah kata bantu, kata kerja{" "}
              <strong>kembali ke bentuk dasar</strong> (tanpa -s, tanpa -ed).
            </li>
            <li className="rounded-md bg-paper-surface px-3 py-2">
              <span className="font-display font-bold text-orange">d.</span>{" "}
              Kata "dia" perlu dipilih jadi <em>he</em> (laki-laki) atau{" "}
              <em>she</em> (perempuan). Bahasa Inggris membedakan, bahasa
              Indonesia tidak.
            </li>
          </ol>
        </section>

        {/* Theory grid */}
        <section className="mt-7">
          <h3 className="font-display text-base font-bold text-indigo">
            Sembilan bentuk dari satu kata kerja
          </h3>
          <p className="mt-2 text-sm text-ink-soft">
            Contoh memakai <em>love</em>. Baca dari atas (waktu paling jauh)
            ke bawah (waktu paling jauh ke belakang), dari kiri (bertanya) ke
            kanan (menyangkal).
          </p>
          <div className="mt-4">
            <TheoryGrid verb={verb} caption="9 bentuk untuk love (mencintai)" />
          </div>
        </section>

        {/* Per-column rules */}
        <section className="mt-7 grid gap-3">
          <h3 className="font-display text-base font-bold text-indigo">
            Apa kunci tiap kolom?
          </h3>

          <div className="rounded-md border-l-4 border-ask bg-ask-soft/50 p-4">
            <div className="font-display text-sm font-bold uppercase tracking-[0.18em] text-ask">
              Pertanyaan
            </div>
            <p className="mt-1 text-sm text-ink">
              Mulai kalimat dengan kata bantu <em>Will / Do / Does / Did</em>,
              lalu subjek, lalu kata kerja dalam bentuk dasar. Tidak perlu
              tambah -s atau -ed di akhir — semua "tanggung jawab" waktu
              sudah dipikul kata bantu.
            </p>
          </div>

          <div className="rounded-md border-l-4 border-state bg-state-soft/50 p-4">
            <div className="font-display text-sm font-bold uppercase tracking-[0.18em] text-state">
              Pernyataan
            </div>
            <p className="mt-1 text-sm text-ink">
              Inilah satu-satunya kolom di mana <strong>bentuk kata
              kerja</strong> bisa berubah. <em>Will + dasar</em> untuk
              masa depan, <em>dasar</em> (atau <em>+s</em> untuk dia)
              untuk sekarang, dan bentuk ke-2 (<em>loved / ate / went</em>)
              untuk lampau.
            </p>
          </div>

          <div className="rounded-md border-l-4 border-deny bg-deny-soft/50 p-4">
            <div className="font-display text-sm font-bold uppercase tracking-[0.18em] text-deny">
              Negasi
            </div>
            <p className="mt-1 text-sm text-ink">
              Selalu pakai kata bantu + <em>not</em>, disingkat menjadi{" "}
              <em>won't / don't / doesn't / didn't</em>. Kata kerjanya
              kembali ke bentuk dasar, sama seperti di kolom Pertanyaan.
            </p>
          </div>
        </section>

        {/* Pronoun map */}
        <section className="mt-7">
          <h3 className="font-display text-base font-bold text-indigo">
            Kata ganti — Indonesia ke Inggris
          </h3>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
            {[
              ["saya / aku", "I"],
              ["kamu / Anda / kalian", "you"],
              ["kami / kita", "we"],
              ["mereka", "they"],
              ["dia (laki-laki)", "he"],
              ["dia (perempuan)", "she"],
              ["itu / ia (benda)", "it"],
            ].map(([id, en]) => (
              <div
                key={id}
                className="flex items-center justify-between rounded-md border border-paper-line bg-paper-surface px-3 py-2"
              >
                <span className="text-ink-soft">{id}</span>
                <span className="font-display font-bold text-indigo">
                  {en}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-7 text-center">
          <button
            onClick={onClose}
            className="rounded-md bg-indigo px-6 py-2.5 font-display font-semibold text-white hover:bg-indigo-dark"
          >
            Kembali ke latihan
          </button>
        </div>
      </div>
    </div>
  );
}
