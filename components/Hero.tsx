"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

const marquee = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Flutter",
  "LangGraph",
  "PostgreSQL",
  "FastAPI",
  "Vercel",
  "Supabase",
  "Tailwind",
  "Framer Motion",
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] flex flex-col">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-10 flex-1 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12 pt-16 md:pt-24 pb-10">
        <div className="md:col-span-12 flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-[12px]">
            <span className="status-dot text-ember relative inline-flex h-1.5 w-1.5 rounded-full bg-ember" />
            <span className="eyebrow">Open · Senior / Staff roles · 2026</span>
          </div>
          <span className="eyebrow hidden md:inline">No. 047 — Portfolio edition</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-8"
        >
          <h1 className="text-[clamp(2.75rem,8vw,6.75rem)] font-medium leading-[0.92] tracking-tightest">
            I ship AI-native
            <br />
            products the way
            <br />
            they <span className="serif-italic text-ember">should</span> feel —
            <br />
            calm, fast, inevitable.
          </h1>

          <div className="mt-10 flex items-center gap-4 md:hidden">
            <span className="h-px flex-1 bg-rule" />
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 md:pt-6 flex flex-col gap-6"
        >
          <p className="text-[15px] text-ink/75 leading-relaxed max-w-measure">
            Md Abu Sufian is a full-stack engineer building agent platforms,
            developer tools, and consumer apps. A decade of production work,
            currently shipping with{" "}
            <a href="#experience" className="underline-ember text-ink">xAI</a>,{" "}
            <a href="#work" className="underline-ember text-ink">AgentPress</a>, and{" "}
            <a href="#work" className="underline-ember text-ink">LiveKanvas</a>.
          </p>

          <div className="flex flex-col gap-2 text-[13px]">
            <a
              href="#work"
              className="group inline-flex items-center justify-between gap-2 border border-ink rounded-full px-4 py-2.5 font-medium bg-ink text-paper transition-transform active:translate-y-[1px]"
            >
              See selected work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
            </a>
            <a
              href="mailto:sufibd2010@gmail.com"
              className="group inline-flex items-center justify-between gap-2 border border-rule rounded-full px-4 py-2.5 font-medium hover:border-ink transition-colors"
            >
              <span className="num">sufibd2010@gmail.com</span>
              <ArrowUpRight className="h-4 w-4 text-subtle group-hover:text-ink transition-colors" strokeWidth={2} />
            </a>
          </div>

          <div className="flex items-center gap-3 text-[12px] text-subtle">
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span>Dhaka · Working globally</span>
            <span className="h-1 w-1 rounded-full bg-rule" />
            <span className="num">GMT+6</span>
          </div>
        </motion.aside>
      </div>

      {/* Stats row — editorial divide style, no cards */}
      <div className="border-t border-rule">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-rule">
          {[
            { k: "11", u: "yrs", v: "building production software" },
            { k: "47", u: "ships", v: "projects & products shipped" },
            { k: "3", u: "live", v: "AI platforms in production" },
            { k: "127", u: "tools", v: "UnicornToolbox suite, growing" },
          ].map((s, i) => (
            <div key={s.v} className={`py-7 px-5 ${i === 0 ? "pl-0" : ""} ${i === 3 ? "pr-0" : ""}`}>
              <div className="flex items-baseline gap-2">
                <span className="num text-3xl md:text-4xl font-medium tracking-tight text-ink">
                  {s.k}
                </span>
                <span className="eyebrow">{s.u}</span>
              </div>
              <p className="mt-2 text-[12px] text-subtle leading-snug">{s.v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stack marquee */}
      <div className="border-t border-rule overflow-hidden">
        <div className="py-5 flex">
          <div className="marquee-track flex whitespace-nowrap shrink-0">
            {[...marquee, ...marquee].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="eyebrow px-6 flex items-center gap-6 shrink-0"
              >
                <span>{t}</span>
                <span className="h-1 w-1 rounded-full bg-rule" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
