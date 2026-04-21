"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted && isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-rule text-ink/80 hover:text-ink hover:border-ink transition-colors active:translate-y-[1px]"
    >
      <Sun className="theme-toggle-sun absolute h-3.5 w-3.5" strokeWidth={1.75} />
      <Moon className="theme-toggle-moon absolute h-3.5 w-3.5" strokeWidth={1.75} />
    </button>
  );
}
