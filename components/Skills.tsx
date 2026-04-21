"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const groups = [
  {
    n: "01",
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Dart", "SQL", "Bash"],
  },
  {
    n: "02",
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind", "Framer Motion", "Zustand", "TanStack Query"],
  },
  {
    n: "03",
    title: "Backend",
    items: ["Node.js", "FastAPI", "Django", "PostgreSQL", "Redis", "tRPC"],
  },
  {
    n: "04",
    title: "Mobile",
    items: ["Flutter", "React Native", "Expo", "Firebase"],
  },
  {
    n: "05",
    title: "AI & Agents",
    items: ["OpenAI", "Anthropic", "xAI Grok", "LangGraph", "RAG", "Vector DBs"],
  },
  {
    n: "06",
    title: "Infra & Ops",
    items: ["Vercel", "Docker", "AWS", "Supabase", "Cloudflare", "GitHub Actions"],
  },
];

export default function Skills() {
  return (
    <section id="stack" className="relative py-28 md:py-40 border-t border-rule">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionLabel index="03 / 05" title="Stack" caption="The tools I reach for" />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10">
          <div className="md:col-span-5">
            <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-medium tracking-tightest leading-[1]">
              The stack
              <br />
              is a <span className="serif-italic text-ember">means</span>.
              <br />
              The team is the work.
            </h2>
            <p className="mt-6 max-w-measure text-[14px] text-ink/70 leading-relaxed">
              Tools rotate. Fundamentals don&apos;t. I pick what makes the team
              fastest without sacrificing the craft — and rewrite the choice when
              the context changes.
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-rule">
              {groups.map((g, i) => (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="border-r border-b border-rule p-6 hover:bg-ink/[0.02] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="eyebrow">{g.n}</span>
                    <h3 className="text-[13px] font-medium tracking-tight">
                      {g.title}
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-1.5">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="text-[14px] text-ink/80 flex items-center gap-2.5"
                      >
                        <span className="h-1 w-1 rounded-full bg-rule" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
