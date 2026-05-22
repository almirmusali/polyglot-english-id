"use client";

/**
 * Bantuan: teori lengkap untuk Pelajaran 1.
 * - Aturan tiga simple tenses
 * - Bagian khusus: Perbedaan dengan bahasa Indonesia
 * - Tiga kartu tense (Pertanyaan / Pernyataan / Negasi)
 * - Tabel ringkas 3×3 di bawah
 */

export function Lesson1HelpModal({ onClose }: { onClose: () => void }) {
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
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Bantuan
            </div>
            <div className="text-2xl font-bold text-slate-900">
              Pelajaran 1 — Teori
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

        {/* Perbedaan dengan bahasa Indonesia */}
        <section className="rounded-2xl border-l-4 border-brand-500 bg-brand-50 p-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-700">
            Perbedaan dengan bahasa Indonesia
          </h3>
          <ul className="mt-2 space-y-2 text-sm text-slate-800">
            <li>
              <strong>1. Bentuk kata kerja berubah.</strong> Dalam bahasa
              Indonesia kata kerja sama untuk semua waktu — "saya makan"
              berlaku untuk sekarang, kemarin, dan besok. Dalam bahasa
              Inggris, bentuknya berubah: <em>I eat / I ate / I will eat</em>.
            </li>
            <li>
              <strong>2. Akhiran -s untuk he/she/it.</strong> Di waktu
              sekarang, jika subjek adalah dia (he/she/it), kata kerja
              mendapat -s di akhir: <em>She eats.</em> Kesalahan paling
              umum bagi penutur Indonesia.
            </li>
            <li>
              <strong>3. Kata bantu wajib.</strong> Pertanyaan dan negasi
              memerlukan kata bantu (<em>do/does/did/will</em>). Setelah
              kata bantu, kata kerja kembali ke bentuk dasar.
            </li>
            <li>
              <strong>4. Kata "dia" — laki-laki atau perempuan?</strong>{" "}
              Bahasa Indonesia memakai satu kata "dia" untuk laki-laki dan
              perempuan. Bahasa Inggris membedakan: <em>he</em>{" "}
              (laki-laki), <em>she</em> (perempuan). Soal akan memberi
              petunjuk gender.
            </li>
          </ul>
        </section>

        {/* Tiga kartu tense */}
        <section className="mt-6 grid gap-3 sm:grid-cols-3">
          {/* Present */}
          <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Sekarang — Present
            </div>
            <div className="mt-1 text-sm text-emerald-900">
              <p className="font-semibold">Pernyataan:</p>
              <p className="ml-2">
                I/you/we/they + <em>love</em>
                <br />
                he/she/it + <em>loves</em> <span className="font-bold text-rose-600">(+s)</span>
              </p>
              <p className="mt-2 font-semibold">Negasi:</p>
              <p className="ml-2">
                I/you/we/they + <em>don&apos;t love</em>
                <br />
                he/she/it + <em>doesn&apos;t love</em>
              </p>
              <p className="mt-2 font-semibold">Pertanyaan:</p>
              <p className="ml-2">
                <em>Do</em> + I/you/we/they + love?
                <br />
                <em>Does</em> + he/she/it + love?
              </p>
            </div>
          </div>

          {/* Past */}
          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Lampau — Past
            </div>
            <div className="mt-1 text-sm text-amber-900">
              <p className="font-semibold">Pernyataan:</p>
              <p className="ml-2">
                semua subjek + <em>loved</em>{" "}
                <span className="font-bold text-rose-600">(V2)</span>
                <br />
                <em className="text-xs text-amber-700">
                  irregular: ate, saw, bought, went…
                </em>
              </p>
              <p className="mt-2 font-semibold">Negasi:</p>
              <p className="ml-2">
                semua subjek + <em>didn&apos;t love</em>
              </p>
              <p className="mt-2 font-semibold">Pertanyaan:</p>
              <p className="ml-2">
                <em>Did</em> + semua subjek + love?
              </p>
            </div>
          </div>

          {/* Future */}
          <div className="rounded-2xl border-2 border-sky-200 bg-sky-50 p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Akan datang — Future
            </div>
            <div className="mt-1 text-sm text-sky-900">
              <p className="font-semibold">Pernyataan:</p>
              <p className="ml-2">
                semua subjek + <em>will love</em>
              </p>
              <p className="mt-2 font-semibold">Negasi:</p>
              <p className="ml-2">
                semua subjek + <em>won&apos;t love</em>
                <br />
                <em className="text-xs text-sky-700">(= will not)</em>
              </p>
              <p className="mt-2 font-semibold">Pertanyaan:</p>
              <p className="ml-2">
                <em>Will</em> + semua subjek + love?
              </p>
            </div>
          </div>
        </section>

        {/* Tabel ringkas 3×3 */}
        <section className="mt-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
            Ringkasan 3×3 — "I + love"
          </h3>
          <div className="mt-2 overflow-hidden rounded-2xl border-2 border-slate-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border-b border-slate-200 bg-slate-50 px-3 py-2 text-left text-xs uppercase text-slate-500">
                    Waktu
                  </th>
                  <th className="border-b border-slate-200 bg-emerald-100 px-3 py-2 text-left text-xs font-bold uppercase text-emerald-800">
                    Pernyataan
                  </th>
                  <th className="border-b border-slate-200 bg-rose-100 px-3 py-2 text-left text-xs font-bold uppercase text-rose-800">
                    Negasi
                  </th>
                  <th className="border-b border-slate-200 bg-sky-100 px-3 py-2 text-left text-xs font-bold uppercase text-sky-800">
                    Pertanyaan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="bg-slate-50 px-3 py-2 font-semibold">
                    Sekarang
                  </td>
                  <td className="bg-emerald-50 px-3 py-2">I love</td>
                  <td className="bg-rose-50 px-3 py-2">
                    I <span className="font-bold text-rose-700">don&apos;t</span> love
                  </td>
                  <td className="bg-sky-50 px-3 py-2">
                    <span className="font-bold text-sky-700">Do</span> I love?
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="bg-slate-50 px-3 py-2 font-semibold">
                    Lampau
                  </td>
                  <td className="bg-emerald-50 px-3 py-2">
                    I <span className="font-bold text-amber-700">loved</span>
                  </td>
                  <td className="bg-rose-50 px-3 py-2">
                    I <span className="font-bold text-rose-700">didn&apos;t</span> love
                  </td>
                  <td className="bg-sky-50 px-3 py-2">
                    <span className="font-bold text-sky-700">Did</span> I love?
                  </td>
                </tr>
                <tr>
                  <td className="bg-slate-50 px-3 py-2 font-semibold">
                    Akan datang
                  </td>
                  <td className="bg-emerald-50 px-3 py-2">
                    I <span className="font-bold text-sky-700">will</span> love
                  </td>
                  <td className="bg-rose-50 px-3 py-2">
                    I <span className="font-bold text-rose-700">won&apos;t</span> love
                  </td>
                  <td className="bg-sky-50 px-3 py-2">
                    <span className="font-bold text-sky-700">Will</span> I love?
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pemetaan kata ganti */}
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
