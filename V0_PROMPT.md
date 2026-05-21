# Promt untuk v0.dev

Buka [v0.dev](https://v0.dev), tempel teks di bawah ke dalam prompt, lalu klik "Generate". Hasil v0 bisa langsung di-deploy ke Vercel atau di-import sebagai variasi UI baru.

---

## Prompt (English — lebih efektif untuk v0)

```
Create a modern landing page + lesson reader app called "Poliglot English" — an English-learning web app for Indonesian speakers, inspired by the famous "16 lessons" polyglot method.

REQUIREMENTS:
- Next.js 14+ App Router, TypeScript, Tailwind CSS, shadcn/ui components
- Interface language: Bahasa Indonesia (all UI text in Indonesian)
- Color palette: warm red/orange (brand-600 = #dc2626) on light slate background
- Typography: clean sans-serif, generous spacing
- Mobile-first responsive design

PAGES NEEDED:

1. Home page (/)
   - Hero with gradient background: title "Belajar bahasa Inggris dengan metode Poliglot", subtitle "Sistem cepat untuk pelajar Indonesia: kuasai kerangka tata bahasa hanya dalam 16 pelajaran"
   - Two CTAs: "Mulai Pelajaran 1 →" and "Tentang metode ini"
   - Stats row: 16 Pelajaran lengkap, 200+ Kosakata, 100+ Latihan, 100% Gratis
   - Grid of 16 lesson cards (3 columns desktop, 2 tablet, 1 mobile)
   - Each card: numbered circle, "Pelajaran N" label, title, subtitle, vocab/exercise count
   - About section explaining the method (3 feature cards)

2. Lesson page (/lesson/[id])
   - Progress bar at top showing "Pelajaran N dari 16" with percentage
   - Big title + subtitle
   - Highlighted "Tujuan pelajaran" (lesson goal) box with brand color
   - Introduction paragraph
   - Multiple grammar sections, each with:
     • heading + explanation
     • optional conjugation table (English / Bahasa Indonesia columns)
     • example sentences with translation
     • optional yellow "Catatan" note box
   - Vocabulary grid (English word, Indonesian translation, pronunciation in brackets)
   - Practical phrases list (English with Indonesian translation, brand left-border accent)
   - Interactive exercises section: text input + "Cek" button, options for multiple choice, "Tampilkan jawaban" reveal
   - Previous/Next lesson navigation cards at bottom

CONTENT (16 lessons):
1. Kata Ganti & "to be" — Pronouns + am/is/are
2. Tiga Bentuk Waktu — Present/Past/Future pyramid
3. Pertanyaan & Negasi — do/does/did/will
4. Kata Kepemilikan & "to have" — possessives + has/have
5. Artikel (a/an/the) & Bentuk Jamak — articles + plurals
6. Preposisi — in/on/at + place/time
7. Kata Kerja Modal — can/must/should/may
8. Present Continuous — am/is/are + V-ing
9. Past Simple Irregular Verbs — 30 most common
10. Bentuk Masa Depan — will vs going to
11. Present Perfect — have/has + V3
12. Perbandingan — comparatives & superlatives
13. Kalimat Pengandaian — conditionals (0/1/2/3)
14. Kalimat Pasif — passive voice all tenses
15. Reported Speech — backshift
16. Rangkuman & Percakapan — phrases, idioms, putting it together

For each lesson include: goal, intro (Indonesian), 3-5 grammar sections, 10-15 vocab items, 5-8 practical phrases, 4-5 interactive exercises.

DESIGN DETAILS:
- Cards: rounded-2xl, border-slate-200, hover:border-brand-300, subtle shadow on hover
- Tables: alternating row backgrounds, sticky-style header, rounded container
- Interactive exercises: immediate feedback (green check ✓ for correct, red ✗ for wrong)
- Smooth scroll, accessible focus states
- Header with logo (red P) + nav links: Beranda, Pelajaran, Tentang
- Footer with subtle text

The vibe should feel like a friendly, modern language app — think Duolingo meets a textbook. Clean, focused, encouraging.
```

---

## Setelah generate

1. v0 akan menampilkan preview. Anda bisa:
   - **"Add to codebase"** — copy ke project lokal
   - **"Deploy"** — langsung ke Vercel sebagai project baru
   - **"Edit"** — iterasi UI di v0 dengan instruksi tambahan

2. Untuk integrasi dengan project ini, salin komponen dari hasil v0 ke folder `components/` dan ganti komponen lama jika perlu.

3. Tips: jika ingin lebih spesifik, tambahkan referensi dari project lokal seperti:
   - "Use the same color scheme as the existing project (brand-600 = #dc2626)"
   - "Match the structure in data/lessons.ts which has Lesson type with grammar, vocabulary, phrases, exercises"
