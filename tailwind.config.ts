import type { Config } from "tailwindcss";

/**
 * LinguaID — design system
 * Token sumber: app/globals.css (CSS variables).
 * Di sini kita expose token tersebut sebagai utility Tailwind agar
 * komponen tetap deklaratif (className) tetapi nilainya datang dari
 * satu sumber tema.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // brand
        ink: {
          DEFAULT: "var(--c-ink)",
          soft: "var(--c-ink-soft)",
          muted: "var(--c-ink-muted)",
        },
        paper: {
          DEFAULT: "var(--c-bg)",
          tint: "var(--c-bg-tint)",
          surface: "var(--c-surface)",
          soft: "var(--c-surface-soft)",
          line: "var(--c-line)",
          "line-strong": "var(--c-line-strong)",
        },
        indigo: {
          DEFAULT: "var(--c-primary)",
          soft: "var(--c-primary-soft)",
          medium: "var(--c-primary-medium)",
          dark: "var(--c-primary-dark)",
        },
        orange: {
          DEFAULT: "var(--c-accent)",
          soft: "var(--c-accent-soft)",
          medium: "var(--c-accent-medium)",
          dark: "var(--c-accent-dark)",
        },
        // semantic
        ask: {
          DEFAULT: "var(--c-ask)",
          soft: "var(--c-ask-soft)",
          tint: "var(--c-ask-tint)",
        },
        state: {
          DEFAULT: "var(--c-state)",
          soft: "var(--c-state-soft)",
          tint: "var(--c-state-tint)",
        },
        deny: {
          DEFAULT: "var(--c-deny)",
          soft: "var(--c-deny-soft)",
          tint: "var(--c-deny-tint)",
        },
        correct: {
          DEFAULT: "var(--c-correct)",
          soft: "var(--c-correct-soft)",
        },
        wrong: {
          DEFAULT: "var(--c-wrong)",
          soft: "var(--c-wrong-soft)",
        },
        future: {
          DEFAULT: "var(--c-future)",
          soft: "var(--c-future-soft)",
        },
        present: {
          DEFAULT: "var(--c-present)",
          soft: "var(--c-present-soft)",
        },
        past: {
          DEFAULT: "var(--c-past)",
          soft: "var(--c-past-soft)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        sans: ["var(--font-body)"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        soft: "var(--shadow-sm)",
        card: "var(--shadow-md)",
        pop: "var(--shadow-lg)",
      },
    },
  },
  plugins: [],
};

export default config;
