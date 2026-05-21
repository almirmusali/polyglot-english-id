# Poliglot English — Belajar bahasa Inggris dalam 16 Pelajaran

Aplikasi web untuk orang Indonesia yang ingin belajar bahasa Inggris dengan metode "16 pelajaran". Terinspirasi oleh metode poliglot terkenal yang berfokus pada kerangka tata bahasa daripada hafalan kata.

## Fitur

- **16 pelajaran lengkap** dalam Bahasa Indonesia
- Penjelasan tata bahasa dengan tabel konjugasi
- 200+ kosakata dengan pengucapan
- Frasa praktis sehari-hari
- Latihan interaktif (terjemahan, isi titik-titik, pilihan ganda)
- Navigasi antar pelajaran + progress bar
- Responsif (mobile-friendly)

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Struktur

```
app/
  page.tsx              # Beranda dengan daftar 16 pelajaran
  lesson/[id]/page.tsx  # Halaman individual pelajaran
  layout.tsx
  globals.css
components/             # UI components
data/
  lessons.ts            # Seluruh konten 16 pelajaran
  types.ts
```

## Deploy

Project ini siap di-deploy ke Vercel:

```bash
vercel --prod
```

## Kurikulum

1. Kata Ganti & "to be"
2. Tiga Bentuk Waktu (Piramida)
3. Pertanyaan & Negasi
4. Kata Kepemilikan & "to have"
5. Artikel (a/an/the) & Bentuk Jamak
6. Preposisi
7. Kata Kerja Modal
8. Present Continuous
9. Past Simple — Irregular Verbs
10. Bentuk Masa Depan (will & going to)
11. Present Perfect
12. Perbandingan
13. Kalimat Pengandaian
14. Kalimat Pasif
15. Reported Speech
16. Rangkuman & Percakapan
