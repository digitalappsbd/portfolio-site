"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./About";
import { ExternalLink } from "lucide-react";

const roles = [
  {
    company: "xAI",
    role: "AI Training Specialist",
    period: "2026 — Present",
    body: "Training and evaluating frontier AI systems — crafting high-signal tasks, grading model output, and shaping the feedback loops that turn raw capability into reliable behavior.",
    tags: ["AI", "Evals", "RLHF", "Python"],
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    company: "AgentPress",
    role: "AI Platform Engineer",
    period: "2025",
    body: "Built the agent-native publishing platform end-to-end. Designed the execution runtime, agent UX, and workflows that let operators deploy autonomous agents in minutes.",
    tags: ["Agents", "Next.js", "Python", "LLMs"],
    accent: "from-cyan-500 to-blue-500",
    link: "https://agents.unicorntoolbox.com",
  },
  {
    company: "LiveKanvas",
    role: "Tech Lead",
    period: "2024",
    body: "Led engineering for the live visual editing platform — collaborative canvas, live previews, and the realtime infra that keeps it snappy for real teams.",
    tags: ["React", "Realtime", "Node", "Postgres"],
    accent: "from-emerald-500 to-teal-500",
  },
  {
    company: "Lambro",
    role: "Senior Developer",
    period: "2023",
    body: "Delivered a production-grade platform for the team, owning architecture, integrations, and the developer experience across the stack.",
    tags: ["Next.js", "TypeScript", "Laravel"],
    accent: "from-pink-500 to-rose-500",
  },
  {
    company: "Topfnf",
    role: "Senior Developer",
    period: "2022",
    body: "Shipped consumer-facing web and mobile experiences with a focus on performance, DX, and clean product surfaces.",
    tags: ["React", "Node", "Flutter"],
    accent: "from-amber-500 to-orange-500",
  },
  {
    company: "UnicornToolbox",
    role: "Founder · Product Engineer",
    period: "2022 — Present",
    body: "A suite of 127+ web tools plus an AI agent platform. Designed the product, built the platform, and shipped the agent-powered experiences that sit on top.",
    tags: ["Next.js", "AI", "DX"],
    accent: "from-indigo-500 to-purple-500",
    link: "https://unicorntoolbox.com",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel index="02" title="Experience" />

        <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
          Where I&apos;ve shipped.
        </h2>

        <div className="mt-12 relative">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-white/10 to-transparent" />

          <ul className="space-y-10">
            {roles.map((r, i) => (
              <motion.li
                key={r.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="relative md:grid md:grid-cols-2 md:gap-10"
              >
                <span className="absolute left-3 md:left-1/2 -translate-x-1/2 top-5 h-3 w-3 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 ring-4 ring-[#05060a]" />

                <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"}`}>
                  <div className="glass card rounded-2xl p-6">
                    <div className="flex items-center justify-between gap-4 text-xs text-muted font-mono">
                      <span className="inline-flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${r.accent}`} />
                        {r.company}
                      </span>
                      <span>{r.period}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold">{r.role}</h3>
                    <p className="mt-2 text-muted leading-relaxed">{r.body}</p>
                    <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {r.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono uppercase tracking-wider px-2 py-1 rounded-md border border-white/10 text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {r.link && (
                      <a
                        href={r.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`mt-4 inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition ${
                          i % 2 === 0 ? "md:justify-end md:flex" : ""
                        }`}
                      >
                        {r.link.replace(/^https?:\/\//, "")}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
