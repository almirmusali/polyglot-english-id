// ============================================================
// Pelajaran 1 — Bank kata & generator soal
//
// Mengajarkan: konjugasi kata kerja dalam tiga simple tenses
// (Present / Past / Future) × tiga jenis kalimat (Pernyataan /
// Negasi / Pertanyaan).
//
// Penting (catatan kontras Indonesia-Inggris):
//   Bahasa Indonesia TIDAK mengubah bentuk kata kerja menurut
//   subjek maupun waktu. Karena itu setiap soal MENAMPILKAN chip
//   waktu yang jelas (Sekarang/Lampau/Akan datang). Tanpa chip,
//   satu kalimat Indonesia bisa berarti tiga tense yang berbeda.
//
//   Bahasa Inggris mengubah:
//     - bentuk kata kerja menurut waktu (loved, will love …)
//     - bentuk kata kerja menurut subjek di Present
//       (he/she/it → +s)
//     - kata bantu menurut waktu (do/does, did, will)
//
//   Catatan "dia": kata ganti bahasa Indonesia "dia" netral
//   gender. Karena itu, ketika subjek soal adalah he/she, kita
//   tampilkan "dia (laki-laki)" / "dia (perempuan)" agar
//   pengguna tahu apakah jawabannya he atau she.
// ============================================================

export type Tense = "present" | "past" | "future";
export type Kind = "statement" | "negative" | "question";

export type Pronoun = {
  en: string; // "I", "you", "he", ...
  idDisplay: string; // "saya", "dia (laki-laki)", ...
  idBase: string; // "saya", "dia", ... (digunakan dalam pertanyaan)
  thirdSingular: boolean; // true untuk he/she/it
};

export const PRONOUNS: Pronoun[] = [
  { en: "I", idDisplay: "saya", idBase: "saya", thirdSingular: false },
  { en: "you", idDisplay: "kamu", idBase: "kamu", thirdSingular: false },
  { en: "we", idDisplay: "kami", idBase: "kami", thirdSingular: false },
  { en: "they", idDisplay: "mereka", idBase: "mereka", thirdSingular: false },
  { en: "he", idDisplay: "dia (laki-laki)", idBase: "dia (laki-laki)", thirdSingular: true },
  { en: "she", idDisplay: "dia (perempuan)", idBase: "dia (perempuan)", thirdSingular: true },
];

export type Verb = {
  v1: string; // base form: "eat"
  v1s: string; // 3rd person sing. present: "eats" (handles +s/+es spelling)
  v2: string; // past form: "ate"
  idVerb: string; // active Indonesian form: "makan"
  regular: boolean;
};

// Daftar dari prompt — dipilih agar relevan untuk kehidupan
// orang Indonesia (makan, minum, membeli, pergi, dst.)
export const VERBS: Verb[] = [
  // ── Regular (V2 = V1 + -ed)
  { v1: "love", v1s: "loves", v2: "loved", idVerb: "mencintai", regular: true },
  { v1: "help", v1s: "helps", v2: "helped", idVerb: "membantu", regular: true },
  { v1: "ask", v1s: "asks", v2: "asked", idVerb: "bertanya", regular: true },
  { v1: "answer", v1s: "answers", v2: "answered", idVerb: "menjawab", regular: true },
  { v1: "close", v1s: "closes", v2: "closed", idVerb: "menutup", regular: true },
  { v1: "open", v1s: "opens", v2: "opened", idVerb: "membuka", regular: true },
  { v1: "call", v1s: "calls", v2: "called", idVerb: "menelepon", regular: true },
  { v1: "want", v1s: "wants", v2: "wanted", idVerb: "ingin", regular: true },
  { v1: "need", v1s: "needs", v2: "needed", idVerb: "butuh", regular: true },
  { v1: "like", v1s: "likes", v2: "liked", idVerb: "suka", regular: true },
  // ── Irregular (V2 berbeda)
  { v1: "see", v1s: "sees", v2: "saw", idVerb: "melihat", regular: false },
  { v1: "eat", v1s: "eats", v2: "ate", idVerb: "makan", regular: false },
  { v1: "drink", v1s: "drinks", v2: "drank", idVerb: "minum", regular: false },
  { v1: "make", v1s: "makes", v2: "made", idVerb: "membuat", regular: false },
  { v1: "sleep", v1s: "sleeps", v2: "slept", idVerb: "tidur", regular: false },
  { v1: "buy", v1s: "buys", v2: "bought", idVerb: "membeli", regular: false },
  { v1: "go", v1s: "goes", v2: "went", idVerb: "pergi", regular: false },
  { v1: "come", v1s: "comes", v2: "came", idVerb: "datang", regular: false },
  { v1: "give", v1s: "gives", v2: "gave", idVerb: "memberi", regular: false },
  { v1: "take", v1s: "takes", v2: "took", idVerb: "mengambil", regular: false },
];

// ============================================================
// Pembangun bentuk Inggris (aturan tata bahasa)
// ============================================================

export function buildEnglish(p: Pronoun, v: Verb, t: Tense, k: Kind): string[] {
  const subject = p.en;
  if (t === "present") {
    if (k === "statement") {
      // he/she/it + verb+s ; lainnya + verb
      return [subject, p.thirdSingular ? v.v1s : v.v1];
    }
    if (k === "negative") {
      return [subject, p.thirdSingular ? "doesn't" : "don't", v.v1];
    }
    // question
    return [p.thirdSingular ? "Does" : "Do", subject.toLowerCase(), v.v1];
  }
  if (t === "past") {
    if (k === "statement") return [subject, v.v2];
    if (k === "negative") return [subject, "didn't", v.v1];
    return ["Did", subject.toLowerCase(), v.v1];
  }
  // future
  if (k === "statement") return [subject, "will", v.v1];
  if (k === "negative") return [subject, "won't", v.v1];
  return ["Will", subject.toLowerCase(), v.v1];
}

// ============================================================
// Pembangun kalimat Indonesia
//
// Kalimat positif: "[subjek] [verb]."   (Present/Past)
//                  "[subjek] akan [verb]." (Future)
// Negasi:           "[subjek] tidak [verb]." (Present/Past)
//                  "[subjek] tidak akan [verb]." (Future)
// Pertanyaan:       "Apakah [subjek] [verb]?" (Present/Past)
//                  "Apakah [subjek] akan [verb]?" (Future)
//
// Kata "akan" alami untuk future. Untuk past, chip + petunjuk
// "(kemarin)" memperjelas tanpa mengubah jawaban Inggris.
// ============================================================

export function buildIndonesian(
  p: Pronoun,
  v: Verb,
  t: Tense,
  k: Kind
): { sentence: string; hint?: string } {
  const subj = p.idBase;
  const verb = v.idVerb;
  const willMark = t === "future" ? "akan " : "";
  const hint = t === "past" ? "petunjuk: kemarin" : undefined;

  if (k === "statement") {
    return { sentence: capitalize(`${subj} ${willMark}${verb}.`), hint };
  }
  if (k === "negative") {
    return {
      sentence: capitalize(`${subj} tidak ${willMark}${verb}.`),
      hint,
    };
  }
  // question
  return {
    sentence: capitalize(`Apakah ${subj} ${willMark}${verb}?`),
    hint,
  };
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ============================================================
// Distractor pool — kata-kata "salah tapi mirip"
// ============================================================

function distractorPool(v: Verb): string[] {
  return [
    // pronouns
    "I", "you", "he", "she", "we", "they",
    // present aux
    "Do", "Does", "don't", "doesn't",
    // past aux
    "Did", "didn't",
    // future aux
    "Will", "will", "won't",
    // verb forms
    v.v1, v.v1s, v.v2,
  ];
}

// ============================================================
// Tipe Question + generator
// ============================================================

export type Question = {
  pronoun: Pronoun;
  verb: Verb;
  tense: Tense;
  kind: Kind;
  indonesian: { sentence: string; hint?: string };
  english: string[]; // tokens, e.g. ["She", "doesn't", "eat"]
  punct: "." | "?";
  words: string[]; // shuffled grid of buttons
};

const TENSES: Tense[] = ["present", "past", "future"];
const KINDS: Kind[] = ["statement", "negative", "question"];

function rand<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function generateQuestion(): Question {
  const pronoun = rand(PRONOUNS);
  const verb = rand(VERBS);
  const tense = rand(TENSES);
  const kind = rand(KINDS);

  const english = buildEnglish(pronoun, verb, tense, kind);
  const indonesian = buildIndonesian(pronoun, verb, tense, kind);
  const punct = kind === "question" ? "?" : ".";

  // Kumpulkan grid kata: jawaban benar + distractor unik
  const correctSet = new Set(english);
  const pool = distractorPool(verb).filter((w) => !correctSet.has(w));
  // ambil 4-5 distractor agar total ~8 tombol
  const targetTotal = Math.min(8, english.length + 5);
  const distractors = shuffle(pool).slice(0, targetTotal - english.length);
  const words = shuffle([...english, ...distractors]);

  return {
    pronoun,
    verb,
    tense,
    kind,
    indonesian,
    english,
    punct,
    words,
  };
}

/**
 * Generate a session of N unique-by-signature questions.
 * Signature = `${pronoun}-${verb}-${tense}-${kind}` agar tidak
 * mengulang kombinasi yang sama dalam sesi.
 */
export function generateSession(count: number = 25): Question[] {
  const seen = new Set<string>();
  const result: Question[] = [];
  let safety = 0;
  while (result.length < count && safety < count * 20) {
    const q = generateQuestion();
    const sig = `${q.pronoun.en}-${q.verb.v1}-${q.tense}-${q.kind}`;
    if (!seen.has(sig)) {
      seen.add(sig);
      result.push(q);
    }
    safety++;
  }
  return result;
}

// ============================================================
// Label & helper UI
// ============================================================

export const TENSE_LABEL: Record<Tense, string> = {
  present: "Sekarang",
  past: "Lampau",
  future: "Akan datang",
};

export const KIND_LABEL: Record<Kind, string> = {
  statement: "Pernyataan",
  negative: "Negasi",
  question: "Pertanyaan",
};

export const TENSE_COLOR: Record<
  Tense,
  { bg: string; text: string; ring: string }
> = {
  present: { bg: "bg-emerald-100", text: "text-emerald-800", ring: "ring-emerald-300" },
  past: { bg: "bg-amber-100", text: "text-amber-800", ring: "ring-amber-300" },
  future: { bg: "bg-sky-100", text: "text-sky-800", ring: "ring-sky-300" },
};
