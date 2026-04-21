import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        subtle: "rgb(var(--subtle) / <alpha-value>)",
        rule: "rgb(var(--rule) / <alpha-value>)",
        ember: "rgb(var(--ember) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Geist", "var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "var(--font-mono)", "ui-monospace", "monospace"],
        serif: ["Instrument Serif", "ui-serif", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        measure: "62ch",
      },
    },
  },
  plugins: [],
} satisfies Config;
