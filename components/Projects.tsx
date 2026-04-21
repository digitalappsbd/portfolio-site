"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionLabel } from "./About";

const projects = [
  {
    n: "01",
    name: "UnicornToolbox",
    url: "https://unicorntoolbox.com",
    tagline: "127+ focused tools for builders and creators.",
    body: "The flagship platform — a growing suite of fast, single-purpose tools under one roof. Designed the product, built the platform, shipped the brand.",
    tags: ["Next.js", "TypeScript", "AI"],
    year: "2022 —",
    span: "md:col-span-7",
  },
  {
    n: "02",
    name: "AgentPress",
    url: "https://agents.unicorntoolbox.com",
    tagline: "Agent-native platform for autonomous workflows.",
    body: "Teams spin up, orchestrate, and observe AI agents without gluing five tools together.",
    tags: ["Agents", "Python", "LLMs"],
    year: "2025",
    span: "md:col-span-5",
  },
  {
    n: "03",
    name: "Unicorn Agency",
    url: "https://agency.unicorntoolbox.com",
    tagline: "AI-first digital agency surface.",
    body: "Productized services and AI delivery, built on the same platform that powers UnicornToolbox.",
    tags: ["Next.js", "AI", "Marketing"],
    year: "2024",
    span: "md:col-span-5",
  },
  {
    n: "04",
    name: "Open-source & experiments",
    url: "https://github.com/digitalappsbd",
    tagline: "Tools, starters, and ideas pushed to GitHub.",
    body: "Flutter apps, Next.js starters, AI experiments, and a steady stream of side projects that outlive their weekends.",
    tags: ["Open Source", "Flutter", "Starters"],
    year: "Ongoing",
    span: "md:col-span-7",
    isGithub: true,
  },
];

const mobileApps = [
  { name: "LiveKanvas", body: "Live visual editing, pocket-sized.", year: "2024" },
  { name: "Payvill", body: "Modern payments for everyday users.", year: "2023" },
  { name: "Mo Browser", body: "Fast, privacy-minded mobile browser.", year: "2022" },
  { name: "HealthBox", body: "Personal health tracking, calmly done.", year: "2021" },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-28 md:py-40 border-t border-rule">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionLabel index="01 / 05" title="Selected Work" caption="Real users, real dates" />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10">
          <h2 className="md:col-span-8 text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium tracking-tightest leading-[0.98]">
            Four shortlisted
            <br />
            projects — each one
            <br />
            taught me something
            <br />
            I carry <span className="serif-italic text-ember">forward</span>.
          </h2>
          <p className="md:col-span-4 md:col-start-9 md:self-end max-w-measure text-[14px] text-ink/70 leading-relaxed">
            The long list lives on GitHub and in the footer. Below: the work
            that has moved the needle for users or taste.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative border border-rule rounded-2xl p-7 md:p-9 overflow-hidden bg-paper hover:border-ink transition-colors ${p.span}`}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-baseline gap-3">
                  <span className="num text-[11px] text-subtle">{p.n}</span>
                  <span className="eyebrow">{p.year}</span>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-rule text-ink group-hover:bg-ink group-hover:text-paper group-hover:border-ink transition-colors">
                  {p.isGithub ? (
                    <Github className="h-4 w-4" strokeWidth={1.5} />
                  ) : (
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={2}
                    />
                  )}
                </span>
              </div>

              <h3 className="mt-10 md:mt-16 text-2xl md:text-3xl font-medium tracking-tight">
                {p.name}
              </h3>
              <p className="mt-2 text-ink/80 text-[15px] leading-snug max-w-[44ch]">
                {p.tagline}
              </p>
              <p className="mt-4 text-[13px] text-ink/60 leading-relaxed max-w-[52ch]">
                {p.body}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 border-t border-rule">
                {p.tags.map((t) => (
                  <span key={t} className="eyebrow">
                    {t}
                  </span>
                ))}
                <span className="ml-auto num text-[12px] text-subtle hidden sm:inline">
                  {p.url.replace(/^https?:\/\//, "")}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile apps — data table style */}
        <div className="mt-24">
          <div className="flex items-end justify-between gap-6 mb-6">
            <div className="flex items-center gap-4">
              <span className="eyebrow">Archive</span>
              <span className="h-px w-12 bg-rule" />
              <span className="eyebrow text-ink">Mobile apps shipped</span>
            </div>
            <span className="num text-[12px] text-subtle">{mobileApps.length} entries</span>
          </div>

          <ul className="divide-y divide-rule border-t border-b border-rule">
            {mobileApps.map((a, i) => (
              <motion.li
                key={a.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="grid grid-cols-[auto_1fr_auto] gap-4 md:gap-8 items-baseline py-5 hover:bg-ink/[0.02] transition-colors -mx-3 px-3 md:-mx-4 md:px-4"
              >
                <span className="num text-[11px] text-subtle w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-5 min-w-0">
                  <span className="text-[15px] font-medium tracking-tight">
                    {a.name}
                  </span>
                  <span className="text-[13px] text-ink/60 truncate">
                    {a.body}
                  </span>
                </div>
                <span className="num text-[12px] text-subtle">{a.year}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
