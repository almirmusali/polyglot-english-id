"use client";

import { PolyglotTable } from "./PolyglotTable";

/**
 * Bantuan untuk Pelajaran 1.
 *
 * Strukturnya disesuaikan dengan TABEL TEORI yang sama:
 *   baris  : Akan datang (Future) → Sekarang (Present) → Lampau (Past)
 *   kolom  : Pertanyaan → Pernyataan → Negasi
 *   tiap sel: kata bantu (kiri) + daftar kata ganti vertikal + bentuk kata kerja
 *
 * Penjelasan teks di atas tabel mengacu langsung ke kolom & baris tabel
 * sehingga pelajar bisa membaca aturan dan langsung melihat polanya.
 */
export function Lesson1HelpModal({ onClose }: { onClose: () => void }) {
  const loveVerb = { v1: "love", v1s: "loves", v2: "loved" };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/60 sm:items-center"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Bantuan
            </div>
            <div className="text-2xl font-bold text-slate-900">
              Pelajaran 1 — Teori
            </div>
            <div className="mt-0.5 text-sm text-slate-600">
              Bentuk dasar kata kerja di tiga simple tenses
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-900"
          >
            ✕
          </button>
        </div>

        {/* ── Perbedaan dengan bahasa Indonesia ─────────── */}
        <section className="rounded-2xl border-l-4 border-brand-500 bg-brand-50 p-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-700">
            Perbedaan dengan bahasa Indonesia
          </h3>
          <ul className="mt-2 space-y-2 text-sm text-slate-800">
            <li>
              <strong>1. Bentuk kata kerja berubah menurut waktu.</strong>{" "}
              Dalam bahasa Indonesia kata kerja sama untuk semua waktu —
              "saya makan" bisa berarti sekarang, kemarin, atau besok. Dalam
              bahasa Inggris bentuknya berubah:{" "}
              <em>I eat / I ate / I will eat</em>.
            </li>
            <li>
              <strong>2. Akhiran -s untuk he/she/it.</strong> Di waktu
              sekarang, jika subjek dia (he/she/it), kata kerja mendapat{" "}
              <em>-s</em>: <em>She eats.</em> Kesalahan paling umum bagi
              penutur Indonesia.
            </li>
            <li>
              <strong>3. Kata bantu wajib.</strong> Pertanyaan dan negasi
              memerlukan kata bantu (<em>do/does/did/will</em>). Setelah
              kata bantu, kata kerja kembali ke <em>bentuk dasar</em>.
            </li>
            <li>
              <strong>4. Kata "dia" netral gender.</strong> Bahasa Indonesia
              memakai satu kata "dia" untuk laki-laki dan perempuan. Bahasa
              Inggris membedakan: <em>he</em> (laki-laki), <em>she</em>{" "}
              (perempuan). Soal latihan memberi petunjuk gender.
            </li>
          </ul>
        </section>

        {/* ── Tabel teori utama ─────────────────────────── */}
        <section className="mt-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
            Tabel Teori
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Satu kata kerja contoh — <em>love</em> (mencintai). Baca tabel
            dari atas ke bawah (Akan datang → Sekarang → Lampau), dari kiri
            ke kanan (Pertanyaan → Pernyataan → Negasi).
          </p>
          <div className="mt-3">
            <PolyglotTable
              verb={loveVerb}
              caption="9 bentuk untuk kata kerja love"
            />
          </div>
        </section>

        {/* ── Penjelasan per kolom ──────────────────────── */}
        <section className="mt-6 space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
            Aturan per kolom
          </h3>

          <div className="rounded-xl border-2 border-sky-200 bg-sky-50 p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Pertanyaan — kolom kiri
            </div>
            <p className="mt-1 text-sm text-slate-800">
              Selalu mulai dengan <strong>kata bantu</strong>:{" "}
              <em>Will</em> (Akan datang), <em>Do/Does</em> (Sekarang),{" "}
              <em>Did</em> (Lampau). Setelah subjek, kata kerja{" "}
              <strong>tetap dalam bentuk dasar</strong>, bahkan untuk
              he/she/it.
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Contoh: <em>Does he love?</em> bukan <em>Does he loves?</em>
            </p>
          </div>

          <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Pernyataan — kolom tengah
            </div>
            <p className="mt-1 text-sm text-slate-800">
              <strong>Akan datang:</strong> tambahkan <em>will</em> sebelum
              kata kerja dasar. <br />
              <strong>Sekarang:</strong> kata kerja dasar untuk
              I/you/we/they; tambahkan <em>-s</em> untuk he/she/it. <br />
              <strong>Lampau:</strong> gunakan bentuk ke-2 (regular +ed →{" "}
              <em>loved</em>; irregular dari kamus → <em>ate, saw, went</em>
              ).
            </p>
          </div>

          <div className="rounded-xl border-2 border-rose-200 bg-rose-50 p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Negasi — kolom kanan
            </div>
            <p className="mt-1 text-sm text-slate-800">
              Selalu pakai <strong>kata bantu + not</strong>, biasanya
              disingkat: <em>won't, don't, doesn't, didn't</em>. Kata kerja
              kembali ke <strong>bentuk dasar</strong>.
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Lengkapnya: <em>will not, do not, does not, did not</em>.
            </p>
          </div>
        </section>

        {/* ── Pemetaan kata ganti ──────────────────────── */}
        <section className="mt-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
            Kata ganti Indonesia → Inggris
          </h3>
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
            {[
              ["saya / aku", "I"],
              ["kamu / Anda / kalian", "you"],
              ["kami / kita", "we"],
              ["mereka", "they"],
              ["dia (laki-laki)", "he"],
              ["dia (perempuan)", "she"],
              ["itu / ia (benda)", "it"],
            ].map(([idP, enP]) => (
              <div
                key={idP}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2"
              >
                <span className="text-slate-700">{idP}</span>
                <span className="font-bold text-slate-900">{enP}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="rounded-xl bg-brand-600 px-6 py-2.5 font-medium text-white hover:bg-brand-700"
          >
            Mengerti — kembali ke latihan
          </button>
        </div>
      </div>
    </div>
  );
}
