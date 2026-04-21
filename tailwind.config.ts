import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f4f1eb",
        ink: "#0e0e10",
        subtle: "#8a8780",
        rule: "#d9d4c8",
        ember: "#b2323b",
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
