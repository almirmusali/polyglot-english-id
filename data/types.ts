export type ConjugationTable = {
  caption: string;
  columns: string[];
  rows: string[][];
};

export type ExampleSentence = {
  en: string;
  id: string;
};

export type GrammarSection = {
  heading: string;
  explanation: string;
  table?: ConjugationTable;
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
