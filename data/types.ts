export type ConjugationTable = {
  caption: string;
  columns: string[];
  rows: string[][];
};

export type ExampleSentence = {
  en: string;
  id: string;
};

export type ConjugationGroup = {
  pronouns: string[];
  cells: [string, string, string]; // [positive, negative, question]
};

export type VerbConjugationData = {
  verb: string; // e.g. "to love"
  tense: string; // e.g. "Present Simple — sekarang"
  columns?: [string, string, string]; // default: ["Positif", "Negatif", "Pertanyaan"]
  groups: ConjugationGroup[];
  hint?: string;
};

export type SummaryGridData = {
  caption?: string;
  subject: string; // e.g. "I"
  verb: string; // e.g. "love"
  rows: {
    tense: string; // e.g. "Sekarang"
    aux?: string; // e.g. "do / does"
    cells: [string, string, string]; // [positive, negative, question]
  }[];
  hint?: string;
};

export type TheoryGridLessonData = {
  caption?: string;
  v1: string; // base form
  v1s: string; // 3rd person singular present (+s/+es)
  v2: string; // past form
};

export type GrammarSection = {
  heading: string;
  explanation: string;
  table?: ConjugationTable;
  conjugation?: VerbConjugationData;
  summaryGrid?: SummaryGridData;
  theoryGrid?: TheoryGridLessonData;
  examples?: ExampleSentence[];
  note?: string;
};

export type VocabItem = {
  en: string;
  id: string;
  pron?: string;
};

export type PhraseItem = {
  en: string;
  id: string;
};

export type Exercise = {
  type: "translate" | "fill" | "choose";
  prompt: string;
  question: string;
  answer: string;
  options?: string[];
};

export type Lesson = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  goal: string;
  intro: string;
  grammar: GrammarSection[];
  vocabulary: VocabItem[];
  phrases: PhraseItem[];
  exercises: Exercise[];
};
