import { Fragment } from "react";

/**
 * PolyglotTable — replikasi tepat dari tabel teori "Polyglot":
 *
 *   Baris (atas → bawah): Akan datang (Future), Sekarang (Present), Lampau (Past)
 *   Kolom (kiri → kanan): Pertanyaan, Pernyataan, Negasi
 *
 *   Tiap sel berisi 1 atau 2 "grup":
 *     - daftar kata ganti VERTIKAL di tengah
 *     - kata bantu (Do/Does/Did/Will) di KIRI daftar
 *     - bentuk kata kerja (+ tanda baca) di KANAN
 *     - untuk negasi: kata bantu inline (don't/doesn't/didn't/won't) sebelum kata kerja
 *
 *   Present punya 2 grup di tiap sel (I/you/we/they vs he/she/it).
 *   Past & Future cukup 1 grup (semua subjek).
 */

export type PolyglotVerb = {
  v1: string; // base, e.g. "love"
  v1s: string; // 3rd person singular present, e.g. "loves"
  v2: string; // past, e.g. "loved"
};

export type Highlight = {
  tense: "future" | "present" | "past";
  kind: "question" | "statement" | "negation";
  /**
   * For Present we have 2 sub-groups (I/you/we/they vs he/she/it).
   * If provided, only that sub-group gets the inner ring.
   */
  pronoun?: "I" | "you" | "we" | "they" | "he" | "she" | "it";
};

type Group = {
  pronouns: string[];
  auxLeft?: string; // shown to the left of pronouns (for questions: Do/Does/Did/Will)
  auxInline?: string; // shown between pronouns and verb (for negation: don't/doesn't/didn't/won't; for future statement: will)
  verb: string;
  punct: "." | "?";
};

const COLORS = {
  question: {
    head: "bg-sky-100 text-sky-800",
    cell: "bg-sky-50",
    accent: "text-sky-700",
  },
  statement: {
    head: "bg-emerald-100 text-emerald-800",
    cell: "bg-emerald-50",
    accent: "text-emerald-700",
  },
  negation: {
    head: "bg-rose-100 text-rose-800",
    cell: "bg-rose-50",
    accent: "text-rose-700",
  },
} as const;

const TENSE_HEAD: Record<
  "future" | "present" | "past",
  { title: string; subtitle: string }
> = {
  future: { title: "Akan datang", subtitle: "Future" },
  present: { title: "Sekarang", subtitle: "Present" },
  past: { title: "Lampau", subtitle: "Past" },
};

function buildRow(
  tense: "future" | "present" | "past",
  v: PolyglotVerb
): Record<"question" | "statement" | "negation", Group[]> {
  const ALL = ["I", "you", "he / she / it", "we", "they"];
  const NON_THIRD = ["I", "you", "we", "they"];
  const THIRD = ["he", "she", "it"];

  if (tense === "future") {
    return {
      question: [
        { pronouns: ALL, auxLeft: "Will", verb: v.v1, punct: "?" },
      ],
      statement: [
        { pronouns: ALL, auxInline: "will", verb: v.v1, punct: "." },
      ],
      negation: [
        { pronouns: ALL, auxInline: "won't", verb: v.v1, punct: "." },
      ],
    };
  }
  if (tense === "present") {
    return {
      question: [
        { pronouns: NON_THIRD, auxLeft: "Do", verb: v.v1, punct: "?" },
        { pronouns: THIRD, auxLeft: "Does", verb: v.v1, punct: "?" },
      ],
      statement: [
        { pronouns: NON_THIRD, verb: v.v1, punct: "." },
        { pronouns: THIRD, verb: v.v1s, punct: "." },
      ],
      negation: [
        { pronouns: NON_THIRD, auxInline: "don't", verb: v.v1, punct: "." },
        { pronouns: THIRD, auxInline: "doesn't", verb: v.v1, punct: "." },
      ],
    };
  }
  // past
  return {
    question: [
      { pronouns: ALL, auxLeft: "Did", verb: v.v1, punct: "?" },
    ],
    statement: [
      { pronouns: ALL, verb: v.v2, punct: "." },
    ],
    negation: [
      { pronouns: ALL, auxInline: "didn't", verb: v.v1, punct: "." },
    ],
  };
}

function isSubgroupActive(
  tense: "future" | "present" | "past",
  pronouns: string[],
  highlight?: Highlight
): boolean {
  if (!highlight || !highlight.pronoun) return false;
  // Past & Future have a single group containing all pronouns — never inner-highlight
  if (tense !== "present") return false;
  // Present: check which sub-group the highlight pronoun belongs to
  const isThird = ["he", "she", "it"].includes(highlight.pronoun);
  const groupIsThird = pronouns.length === 3 && pronouns[0] === "he";
  return isThird === groupIsThird;
}

function GroupView({
  g,
  accent,
  active,
}: {
  g: Group;
  accent: string;
  active?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-[auto_auto_1fr] items-center gap-x-2 rounded-md px-1 py-1 ${
        active ? "bg-emerald-200/70 ring-2 ring-emerald-500" : ""
      }`}
    >
      {/* Left aux column */}
      <div className={`w-9 text-right text-base font-bold ${accent}`}>
        {g.auxLeft ?? ""}
      </div>
      {/* Pronouns stacked vertically */}
      <div className="flex flex-col text-xs italic leading-tight text-slate-600">
        {g.pronouns.map((p) => (
          <span key={p}>{p}</span>
        ))}
      </div>
      {/* Verb + inline aux + punct */}
      <div className="text-base">
        {g.auxInline && (
          <span className={`font-bold ${accent}`}>{g.auxInline} </span>
        )}
        <span className="font-medium text-slate-900">{g.verb}</span>
        <span className="text-slate-400">{g.punct}</span>
      </div>
    </div>
  );
}

function CellView({
  groups,
  kind,
  active,
  innerActivePronoun,
  tense,
}: {
  groups: Group[];
  kind: "question" | "statement" | "negation";
  active: boolean;
  innerActivePronoun?: string;
  tense: "future" | "present" | "past";
}) {
  const c = COLORS[kind];
  return (
    <div
      className={`relative ${c.cell} px-2 py-2 ${
        active ? "ring-4 ring-emerald-400 ring-inset" : ""
      }`}
    >
      {groups.map((g, i) => {
        const innerActive = isSubgroupActive(tense, g.pronouns, {
          tense,
          kind,
          pronoun: innerActivePronoun as Highlight["pronoun"],
        });
        return (
          <Fragment key={i}>
            {i > 0 && <hr className="my-1.5 border-slate-300/60" />}
            <GroupView g={g} accent={c.accent} active={innerActive} />
          </Fragment>
        );
      })}
      {active && (
        <span
          aria-hidden
          className="absolute right-1 top-1 rounded-full bg-emerald-500 px-1.5 text-[10px] font-bold text-white"
        >
          ✓
        </span>
      )}
    </div>
  );
}

export function PolyglotTable({
  verb,
  highlight,
  caption,
}: {
  verb: PolyglotVerb;
  highlight?: Highlight;
  caption?: string;
}) {
  const tenses: ("future" | "present" | "past")[] = [
    "future",
    "present",
    "past",
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border-2 border-slate-300 bg-white shadow-sm">
      {caption && (
        <div className="border-b-2 border-slate-300 bg-slate-50 px-4 py-2 text-center text-sm font-semibold text-slate-700">
          {caption}
        </div>
      )}
      <div
        className="grid min-w-[640px] divide-x divide-slate-200"
        style={{ gridTemplateColumns: "minmax(110px, auto) 1fr 1fr 1fr" }}
      >
        {/* Header row */}
        <div className="border-b-2 border-slate-300 bg-slate-50 px-3 py-2 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
          Waktu
        </div>
        <div className={`border-b-2 border-slate-300 px-3 py-2 text-center text-xs font-bold uppercase tracking-wider ${COLORS.question.head}`}>
          Pertanyaan
        </div>
        <div className={`border-b-2 border-slate-300 px-3 py-2 text-center text-xs font-bold uppercase tracking-wider ${COLORS.statement.head}`}>
          Pernyataan
        </div>
        <div className={`border-b-2 border-slate-300 px-3 py-2 text-center text-xs font-bold uppercase tracking-wider ${COLORS.negation.head}`}>
          Negasi
        </div>

        {/* Body rows */}
        {tenses.map((t) => {
          const row = buildRow(t, verb);
          const h = TENSE_HEAD[t];
          return (
            <Fragment key={t}>
              <div className="flex flex-col items-center justify-center border-b border-slate-200 bg-slate-50 px-3 py-3">
                <div className="text-sm font-bold text-slate-800">
                  {h.title}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400">
                  {h.subtitle}
                </div>
              </div>
              <div className="border-b border-slate-200">
                <CellView
                  tense={t}
                  kind="question"
                  groups={row.question}
                  active={highlight?.tense === t && highlight.kind === "question"}
                  innerActivePronoun={
                    highlight?.tense === t && highlight.kind === "question"
                      ? highlight.pronoun
                      : undefined
                  }
                />
              </div>
              <div className="border-b border-slate-200">
                <CellView
                  tense={t}
                  kind="statement"
                  groups={row.statement}
                  active={highlight?.tense === t && highlight.kind === "statement"}
                  innerActivePronoun={
                    highlight?.tense === t && highlight.kind === "statement"
                      ? highlight.pronoun
                      : undefined
                  }
                />
              </div>
              <div className="border-b border-slate-200">
                <CellView
                  tense={t}
                  kind="negation"
                  groups={row.negation}
                  active={highlight?.tense === t && highlight.kind === "negation"}
                  innerActivePronoun={
                    highlight?.tense === t && highlight.kind === "negation"
                      ? highlight.pronoun
                      : undefined
                  }
                />
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
