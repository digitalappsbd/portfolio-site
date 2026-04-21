"use client";

import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-paper/80 backdrop-blur-md border-b border-rule">
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 grid grid-cols-[auto_1fr_auto] items-center gap-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="h-6 w-6 rounded-sm bg-ink flex items-center justify-center text-paper text-[11px] font-semibold tracking-tight">
            S
          </span>
          <span className="text-sm font-medium tracking-tight">
            Md Abu Sufian
            <span className="hidden sm:inline text-subtle font-normal"> — portfolio</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center justify-center gap-7 text-[13px]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-ink/70 hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5 justify-end">
          <span className="eyebrow hidden lg:inline mr-1">MMXXVI</span>
          <ThemeToggle />
          <a
            href="mailto:sufibd2010@gmail.com"
            className="inline-flex items-center gap-2 text-[13px] px-3.5 py-1.5 rounded-full bg-ink text-paper font-medium transition-transform active:translate-y-[1px]"
          >
            Hire me
            <span className="h-1.5 w-1.5 rounded-full bg-paper/70" />
          </a>
        </div>
      </nav>
    </header>
  );
}
