# LinguaID

> Tata bahasa Inggris untuk orang Indonesia — disusun dari kata demi kata.

LinguaID adalah aplikasi web open-source untuk belajar tata bahasa Inggris. Inti pembelajarannya sederhana: pengguna **merangkai kalimat dari kata-kata yang sudah disediakan**, dipandu oleh sistem nilai dan tabel teori yang konsisten. Cocok untuk pemula Indonesia yang ingin mengunci pola tiga waktu (Sekarang / Lampau / Akan datang) dengan cepat.

## Yang ada di dalamnya

- **16 pelajaran**, semuanya dalam bahasa Indonesia
- **Latihan rangkai-kata** ala kartu — tap kata Inggris untuk membentuk kalimat dari prompt bahasa Indonesia
- **Chip waktu** (Sekarang / Lampau / Akan datang) untuk menghilangkan ambiguitas tense
- **Tabel teori 9 bentuk** (3 waktu × 3 jenis kalimat) yang konsisten antara halaman pelajaran dan layar bantuan
- **Sistem nilai 0.0–5.0** per pelajaran, disimpan di `localStorage`
- **Bantuan & Petunjuk** kontekstual di layar latihan

## Tumpukan

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS + sistem token via CSS variables
- Fraunces (judul) + Inter (badan teks)

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka <http://localhost:3000>.

## Struktur

```
app/                       — App Router
  page.tsx                 — Beranda + daftar 16 pelajaran
  lesson/[id]/page.tsx     — Halaman teori per pelajaran
  lesson/[id]/latihan/     — Layar latihan
components/                — UI
  TheoryGrid.tsx           — Tabel 9 bentuk (3 waktu × 3 jenis)
  WordTapTrainer.tsx       — Latihan rangkai-kata (Pelajaran 1)
  Lesson1HelpModal.tsx     — Bantuan / teori
  Lesson1HintModal.tsx     — Petunjuk kontekstual
data/                      — Konten
  lessons.ts               — Naskah 16 pelajaran
  lesson1Bank.ts           — Generator soal Pelajaran 1
lib/storage.ts             — Persistensi nilai (localStorage)
```

## Lisensi

MIT — silakan fork, modifikasi, dan gunakan ulang.
