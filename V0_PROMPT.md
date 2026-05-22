# Prompt untuk v0.dev — LinguaID

Tempel teks di bawah ke v0.dev untuk menghasilkan variasi UI proyek ini.

```
Create a Next.js 14+ App Router + TypeScript + Tailwind app called "LinguaID" — a grammar-learning web app for Indonesian speakers studying English.

CORE MECHANIC
Users assemble English sentences by tapping word buttons in order, guided by an Indonesian prompt and a tense chip (Sekarang / Lampau / Akan datang).

VISUAL IDENTITY
- Brand: LinguaID with a typographic logo (display serif period as accent)
- Palette: deep indigo (#1e3a8a), sunrise orange (#f97316), warm cream background (#fefaf2)
- Typography: Fraunces for headings (serif, with character), Inter for body
- Shape: generous rounded corners (radius 22px for cards), soft diffused shadows
- All UI text in Bahasa Indonesia

PAGES
1. Home (/) — hero with brand title, lesson grid with score circles (0.0-5.0 in colored badges)
2. Lesson page (/lesson/[id]) — theory with the unified 9-form table
3. Trainer (/lesson/[id]/latihan) — full-screen word-tap experience

THE 9-FORM TABLE (theory & hint share this layout)
Rows top-to-bottom: Akan datang (Future), Sekarang (Present), Lampau (Past)
Columns left-to-right: Pertanyaan (violet tint), Pernyataan (teal tint), Negasi (burnt-orange tint)
Each cell: auxiliary word on the left, pronouns stacked vertically, verb form on the right.
Present cell split into two sub-groups (I/you/we/they vs he/she/it) with a divider.

TRAINER
- Top bar (indigo): back, lesson title, ★ score, ✓ correct, ✗ wrong
- Tense chip + sentence-type pill, large Indonesian prompt card
- Word grid (8 buttons) tapped in order, with dashed answer area
- Bottom panel: Ulang langkah / Petunjuk / Bantuan / Mic (placeholder)
- Persist scores in localStorage with key "linguaid:lesson:<id>"

WRITING
Friendly, direct Indonesian. Avoid translated-from-Russian feel. Examples emphasize daily life: makan nasi, naik motor, bekerja, belajar.
```
