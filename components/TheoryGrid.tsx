import { Fragment } from "react";

/**
 * TheoryGrid — tabel sembilan bentuk LinguaID.
 *
 * Logika belajar dipertahankan:
 *   • baris: Akan datang → Sekarang → Lampau
 *   • kolom: Pertanyaan → Pernyataan → Negasi
 *   • tiap sel: kata bantu di kiri, daftar kata ganti tegak,
 *     bentuk kata kerja di kanan
 *   • Sekarang dipecah dua (I/you/we/they vs he/she/it)
 *
 * Tampilan baru:
 *   • palet violet / teal / burnt-orange
 *   • header bertipografi serif (Fraunces) — memberi karakter
 *     buku teks, cocok untuk konten tata bahasa
 *   • garis tipis, jarak udara, kartu radius besar
 *   • penyorotan menggunakan ring oranye merek
 */

export type TheoryVerb = {
  v1: string;
  v1s: string;
  v2: string;
};

export type TheoryHighlight = {
  tense: "future" | "present" | "past";
  kind: "question" | "statement" | "negation";
  pronoun?: "I" | "you" | "we" | "they" | "he" | "she" | "it";
};

type Group = {
  pronouns: string[];
  auxLeft?: string;
  auxInline?: string;
  verb: string;
  punct: "." | "?";
};

// ── token kolom ───────────────────────────────────────────────
const COL = {
  question: {
    head: "bg-ask-tint text-ask",
    cell: "bg-ask-soft/40",
    accent: "text-ask",
  },
  statement: {
    head: "bg-state-tint text-state",
    cell: "bg-state-soft/40",
    accent: "text-state",
  },
  negation: {
    head: "bg-deny-tint text-deny",
    cell: "bg-deny-soft/40",
    accent: "text-deny",
  },
} as const;

const TENSE_LABEL: Record<
  "future" | "present" | "past",
  { id: string; en: string; tone: string }
> = {
  future: { id: "Akan datang", en: "Future", tone: "text-future" },
  present: { id: "Sekarang", en: "Present", tone: "text-present" },
  past: { id: "Lampau", en: "Past", tone: "text-past" },
};

function buildRow(
  tense: "future" | "present" | "past",
  v: TheoryVerb
): Record<"question" | "statement" | "negation", Group[]> {
  const ALL = ["I", "you", "he / she / it", "we", "they"];
  const NON_THIRD = ["I", "you", "we", "they"];
  const THIRD = ["he", "she", "it"];

  if (tense === "future") {
    return {
      question: [{ pronouns: ALL, auxLeft: "Will", verb: v.v1, punct: "?" }],
      statement: [{ pronouns: ALL, auxInline: "will", verb: v.v1, punct: "." }],
      negation: [{ pronouns: ALL, auxInline: "won't", verb: v.v1, punct: "." }],
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
  return {
    question: [{ pronouns: ALL, auxLeft: "Did", verb: v.v1, punct: "?" }],
    statement: [{ pronouns: ALL, verb: v.v2, punct: "." }],
    negation: [{ pronouns: ALL, auxInline: "didn't", verb: v.v1, punct: "." }],
  };
}

function isSubgroupActive(
  tense: "future" | "present" | "past",
  pronouns: string[],
  highlight?: TheoryHighlight
): boolean {
  if (!highlight?.pronoun || tense !== "present") return false;
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
      className={`grid grid-cols-[auto_auto_1fr] items-center gap-x-2.5 rounded-md px-1.5 py-1 ${
        active ? "bg-orange-soft ring-2 ring-orange ring-offset-1" : ""
      }`}
    >
      <div className={`w-10 text-right text-base font-semibold ${accent}`}>
        {g.auxLeft ?? ""}
      </div>
      <div className="flex flex-col font-display text-[11px] leading-snug text-ink-muted">
        {g.pronouns.map((p) => (
          <span key={p}>{p}</span>
        ))}
      </div>
      <div className="text-base">
        {g.auxInline && (
          <span className={`font-semibold ${accent}`}>{g.auxInline} </span>
        )}
        <span className="font-medium text-ink">{g.verb}</span>
        <span className="text-ink-muted">{g.punct}</span>
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
  const c = COL[kind];
  return (
    <div
      className={`relative px-2.5 py-3 ${c.cell} ${
        active ? "ring-[3px] ring-orange ring-inset" : ""
      }`}
    >
      {groups.map((g, i) => {
        const innerActive = isSubgroupActive(tense, g.pronouns, {
          tense,
          kind,
          pronoun: innerActivePronoun as TheoryHighlight["pronoun"],
        });
        return (
          <Fragment key={i}>
            {i > 0 && (
              <hr className="my-2 border-dotted border-paper-line-strong" />
            )}
            <GroupView g={g} accent={c.accent} active={innerActive} />
          </Fragment>
        );
      })}
      {active && (
        <span
          aria-hidden
          className="absolute right-1.5 top-1.5 rounded-full bg-orange px-1.5 text-[10px] font-bold uppercase tracking-wider text-white"
        >
          ini
        </span>
      )}
    </div>
  );
}

export function TheoryGrid({
  verb,
  highlight,
  caption,
}: {
  verb: TheoryVerb;
  highlight?: TheoryHighlight;
  caption?: string;
}) {
  const tenses: ("future" | "present" | "past")[] = [
    "future",
    "present",
    "past",
  ];

  return (
    <div className="overflow-x-auto rounded-lg border border-paper-line-strong bg-paper-surface shadow-card">
      {caption && (
        <div className="border-b border-paper-line bg-paper-soft px-5 py-3 text-center">
          <div className="font-display text-base font-semibold text-ink">
            {caption}
          </div>
        </div>
      )}
      <div
        className="grid min-w-[640px]"
        style={{ gridTemplateColumns: "minmax(120px, auto) 1fr 1fr 1fr" }}
      >
        <div className="border-b border-r border-paper-line bg-paper-soft px-3 py-3 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted">
          Waktu
        </div>
        {(["question", "statement", "negation"] as const).map((k) => (
          <div
            key={k}
            className={`border-b border-r border-paper-line px-3 py-3 text-center font-display text-sm font-semibold last:border-r-0 ${COL[k].head}`}
          >
            {k === "question"
              ? "Pertanyaan"
              : k === "statement"
              ? "Pernyataan"
              : "Negasi"}
          </div>
        ))}

        {tenses.map((t) => {
          const row = buildRow(t, verb);
          const h = TENSE_LABEL[t];
          return (
            <Fragment key={t}>
              <div className="flex flex-col items-center justify-center border-b border-r border-paper-line bg-paper-soft px-3 py-4">
                <div
                  className={`font-display text-base font-semibold ${h.tone}`}
                >
                  {h.id}
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  {h.en}
                </div>
              </div>
              <div className="border-b border-r border-paper-line">
                <CellView
                  tense={t}
                  kind="question"
                  groups={row.question}
                  active={
                    highlight?.tense === t && highlight.kind === "question"
                  }
                  innerActivePronoun={
                    highlight?.tense === t && highlight.kind === "question"
                      ? highlight.pronoun
                      : undefined
                  }
                />
              </div>
              <div className="border-b border-r border-paper-line">
                <CellView
                  tense={t}
                  kind="statement"
                  groups={row.statement}
                  active={
                    highlight?.tense === t && highlight.kind === "statement"
                  }
                  innerActivePronoun={
                    highlight?.tense === t && highlight.kind === "statement"
                      ? highlight.pronoun
                      : undefined
                  }
                />
              </div>
              <div className="border-b border-paper-line">
                <CellView
                  tense={t}
                  kind="negation"
                  groups={row.negation}
                  active={
                    highlight?.tense === t && highlight.kind === "negation"
                  }
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
