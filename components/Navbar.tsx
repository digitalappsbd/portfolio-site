"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-bg/70 border-b border-white/5" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 text-sm font-bold">
            S
            <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 opacity-50 blur-md group-hover:opacity-80 transition" />
          </span>
          <span className="font-semibold tracking-tight">Sufi</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 rounded-md text-muted hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:sufibd2010@gmail.com"
          className="hidden sm:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition"
        >
          Let&apos;s talk
        </a>
      </nav>
    </motion.header>
  );
}
