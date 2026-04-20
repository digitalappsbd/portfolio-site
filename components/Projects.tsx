"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { SectionLabel } from "./About";

const projects = [
  {
    name: "UnicornToolbox",
    url: "https://unicorntoolbox.com",
    tagline: "127+ AI-powered tools for builders and creators.",
    body: "The flagship platform — a growing suite of focused, fast, delightful tools under a single roof.",
    tags: ["Next.js", "TypeScript", "AI"],
    accent: "from-violet-500/40 to-fuchsia-500/40",
  },
  {
    name: "AgentPress",
    url: "https://agents.unicorntoolbox.com",
    tagline: "Agent-native platform for deploying autonomous workflows.",
    body: "Lets teams spin up, orchestrate, and observe AI agents without duct-taping five tools together.",
    tags: ["Agents", "Python", "Next.js", "LLMs"],
    accent: "from-cyan-500/40 to-blue-500/40",
  },
  {
    name: "Unicorn Agency",
    url: "https://agency.unicorntoolbox.com",
    tagline: "AI-first digital agency surface.",
    body: "Productized services and AI delivery — built on the same platform that powers UnicornToolbox.",
    tags: ["Next.js", "AI", "Marketing"],
    accent: "from-emerald-500/40 to-teal-500/40",
  },
  {
    name: "Open source & experiments",
    url: "https://github.com/digitalappsbd",
    tagline: "Tools, starters, and ideas I push to GitHub.",
    body: "Flutter apps, Next.js starters, AI experiments, and a steady stream of side projects.",
    tags: ["Open Source", "Flutter", "Next.js"],
    accent: "from-pink-500/40 to-rose-500/40",
    isGithub: true,
  },
];

const mobileApps = [
  {
    name: "LiveKanvas",
    body: "Live visual editing, in your pocket.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Payvill",
    body: "Modern payments experience for everyday users.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Mo Browser",
    body: "A fast, privacy-minded mobile browser.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "HealthBox",
    body: "Personal health tracking — simple and calm.",
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel index="04" title="Projects" />

        <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Selected work.
          </h2>
          <p className="text-muted max-w-md">
            The short list. Each one shipped to real users, each one taught me
            something I carry into the next build.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative glass card rounded-3xl p-7 overflow-hidden"
            >
              <div
                className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition duration-500 -z-10`}
              />
              {/* decorative */}
              <div className="absolute right-6 top-6 opacity-40 group-hover:opacity-100 transition">
                {p.isGithub ? <Github className="h-5 w-5" /> : <ExternalLink className="h-5 w-5" />}
              </div>

              <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-2 text-muted font-medium">{p.tagline}</p>
              <p className="mt-4 text-sm text-muted leading-relaxed">{p.body}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono uppercase tracking-wider px-2 py-1 rounded-md border border-white/10 text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 text-sm text-cyan-400 flex items-center gap-1 opacity-80 group-hover:opacity-100">
                {p.url.replace(/^https?:\/\//, "")}
                <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-3">
            <Smartphone className="h-4 w-4 text-muted" />
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
              Mobile apps I&apos;ve shipped
            </h3>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mobileApps.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass card rounded-2xl p-5 relative overflow-hidden"
              >
                <div
                  className={`absolute -top-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-br ${a.gradient} opacity-30 blur-2xl`}
                />
                <h4 className="font-semibold tracking-tight">{a.name}</h4>
                <p className="mt-1 text-sm text-muted">{a.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
