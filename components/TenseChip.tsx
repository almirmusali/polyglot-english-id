import type { Tense } from "@/data/lesson1Bank";

const STYLE: Record<Tense, { bg: string; text: string; dot: string; label: string; sub: string }> = {
  present: {
    bg: "bg-present-soft",
    text: "text-present",
    dot: "bg-present",
    label: "Sekarang",
    sub: "Present",
  },
  past: {
    bg: "bg-past-soft",
    text: "text-past",
    dot: "bg-past",
    label: "Lampau",
    sub: "Past",
  },
  future: {
    bg: "bg-future-soft",
    text: "text-future",
    dot: "bg-future",
    label: "Akan datang",
    sub: "Future",
  },
};

/**
 * Chip waktu LinguaID — bentuk pil dengan titik berwarna sebagai
 * indikator. Warna mengikuti palet semantik tense (teal/amber/indigo).
 */
export function TenseChip({
  tense,
  size = "md",
}: {
  tense: Tense;
  size?: "sm" | "md";
}) {
  const s = STYLE[tense];
  const sz = size === "sm" ? "px-2 py-0.5 text-xs gap-1.5" : "px-3 py-1.5 text-sm gap-2";
  return (
    <span
      className={`inline-flex items-center rounded-full font-display font-semibold ${sz} ${s.bg} ${s.text}`}
    >
      <span
        className={`h-2 w-2 rounded-full ${s.dot}`}
        aria-hidden
      />
      {s.label}
      <span className="text-[10px] font-normal uppercase tracking-[0.18em] opacity-60">
        {s.sub}
      </span>
    </span>
  );
}
