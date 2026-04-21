"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./About";
import { ArrowUpRight } from "lucide-react";

const roles = [
  {
    company: "xAI",
    role: "AI Training Specialist",
    period: "2026 — Present",
    body: "Training and evaluating frontier systems — high-signal tasks, graded outputs, and feedback loops that turn raw capability into reliable behavior.",
    tags: ["Evals", "RLHF", "Python"],
  },
  {
    company: "AgentPress",
    role: "AI Platform Engineer",
    period: "2025",
    body: "Shipped an agent-native publishing platform end-to-end. Designed the execution runtime, agent UX, and workflows that let operators deploy autonomous agents in minutes.",
    tags: ["Agents", "Next.js", "Python", "LLMs"],
    link: "https://agents.unicorntoolbox.com",
  },
  {
    company: "LiveKanvas",
    role: "Tech Lead",
    period: "2024",
    body: "Led engineering for a live visual editing platform — collaborative canvas, live previews, and realtime infra that stays snappy for actual teams.",
    tags: ["React", "Realtime", "Node", "Postgres"],
  },
  {
    company: "Lambro",
    role: "Senior Developer",
    period: "2023",
    body: "Delivered a production-grade platform end to end. Owned architecture, integrations, and developer experience across the stack.",
    tags: ["Next.js", "TypeScript", "Laravel"],
  },
  {
    company: "Topfnf",
    role: "Senior Developer",
    period: "2022",
    body: "Consumer-facing web and mobile experiences with a focus on performance, DX, and clean product surfaces.",
    tags: ["React", "Node", "Flutter"],
  },
  {
    company: "UnicornToolbox",
    role: "Founder · Product Engineer",
    period: "2022 — Present",
    body: "A suite of 127+ web tools plus an AI agent platform. Designed the product, built the platform, and shipped the agent-powered experiences that sit on top.",
    tags: ["Next.js", "AI", "DX"],
    link: "https://unicorntoolbox.com",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-40 border-t border-rule">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionLabel index="02 / 05" title="Experience" caption="Where I've shipped" />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-x-8">
          <h2 className="md:col-span-5 text-[clamp(2rem,4.5vw,3.25rem)] font-medium tracking-tightest leading-[1] md:sticky md:top-20 md:self-start">
            A decade of
            <br />
            <span className="serif-italic text-ember">ship-logs</span>,
            <br />
            compressed.
          </h2>

          <ul className="md:col-span-7 md:col-start-6 divide-y divide-rule border-t border-b border-rule">
            {roles.map((r, i) => (
              <motion.li
                key={r.company}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group py-8 grid grid-cols-[auto_1fr_auto] gap-4 md:gap-6 items-baseline"
              >
                <span className="num text-[12px] text-subtle tabular-nums shrink-0 w-10">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg md:text-xl font-medium tracking-tight">
                      {r.role}
                    </h3>
                    <span className="text-ink/60 text-[14px]">
                      at{" "}
                      {r.link ? (
                        <a
                          href={r.link}
                          target="_blank"
                          rel="noreferrer"
                          className="underline-ember text-ink inline-flex items-center gap-1"
                        >
                          {r.company}
                          <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
                        </a>
                      ) : (
                        <span className="text-ink">{r.company}</span>
                      )}
                    </span>
                  </div>
                  <p className="mt-2 text-[14px] text-ink/70 leading-relaxed max-w-measure">
                    {r.body}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {r.tags.map((t) => (
                      <span key={t} className="eyebrow">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="num text-[12px] text-subtle whitespace-nowrap self-start pt-1.5">
                  {r.period}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
