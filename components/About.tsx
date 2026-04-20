"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Users } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "Full Stack at depth",
    body: "Next.js, React, TypeScript on the front. Python, Node, and Postgres on the back. Comfortable across the stack and all the way to the cloud.",
  },
  {
    icon: Sparkles,
    title: "AI-native builder",
    body: "I design with LLMs as first-class primitives — agents, retrieval, evals — and turn hard research into calm, polished product surfaces.",
  },
  {
    icon: Users,
    title: "Team multiplier",
    body: "I mentor, document, and automate. Great engineering is a team sport; my job is to make the next person faster than I was.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel index="01" title="About" />

        <div className="mt-10 grid md:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              I build software that feels{" "}
              <span className="gradient-text">alive</span>.
            </h2>
            <div className="mt-6 space-y-4 text-muted text-lg leading-relaxed">
              <p>
                For more than a decade I&apos;ve been shipping products across
                the full stack — web, mobile, infra — with a bias toward
                craft, speed, and taste. Lately, most of my time goes into
                AI-first surfaces: agent platforms, developer tools, and
                consumer apps that wrap models into something humans actually
                love to use.
              </p>
              <p>
                I care deeply about the details: typography that breathes,
                animations that inform, APIs that feel obvious in hindsight.
                Whether I&apos;m co-founding a company or embedded in a team,
                I bring a product-engineer&apos;s mindset — own the outcome,
                ship the thing, iterate.
              </p>
            </div>
          </motion.div>

          <div className="md:col-span-2 grid gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="glass card rounded-2xl p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/25 to-cyan-500/25 border border-white/10">
                    <p.icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-semibold">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-muted">{index}</span>
      <span className="h-px flex-1 max-w-16 bg-gradient-to-r from-white/20 to-transparent" />
      <span className="uppercase tracking-[0.3em] text-xs text-muted">{title}</span>
    </div>
  );
}
