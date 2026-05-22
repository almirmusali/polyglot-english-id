import { TENSE_COLOR, TENSE_LABEL, type Tense } from "@/data/lesson1Bank";

const ICON: Record<Tense, string> = {
  present: "⏺",
  past: "⏮",
  future: "⏭",
};

export function TenseChip({
  tense,
  size = "md",
}: {
  tense: Tense;
  size?: "sm" | "md";
}) {
  const c = TENSE_COLOR[tense];
  const sz = size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold ring-2 ${sz} ${c.bg} ${c.text} ${c.ring}`}
    >
      <span aria-hidden>{ICON[tense]}</span>
      {TENSE_LABEL[tense]}
    </span>
  );
}
