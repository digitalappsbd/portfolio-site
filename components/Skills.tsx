"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const groups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Dart", "SQL", "Bash"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Zustand", "TanStack Query"],
  },
  {
    title: "Backend",
    items: ["Node.js", "FastAPI", "Django", "PostgreSQL", "Redis", "tRPC"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "React Native", "Expo", "Firebase"],
  },
  {
    title: "AI & Agents",
    items: ["OpenAI", "Anthropic Claude", "xAI Grok", "LangGraph", "RAG", "Vector DBs"],
  },
  {
    title: "Infra & Tools",
    items: ["Vercel", "Docker", "AWS", "Supabase", "Cloudflare", "GitHub Actions"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel index="03" title="Skills" />

        <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            The stack I reach for.
          </h2>
          <p className="text-muted max-w-md">
            Tools change — fundamentals don&apos;t. I pick what makes the team
            fastest without sacrificing the craft.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold">{g.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] hover:border-violet-400/40 hover:text-white transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
