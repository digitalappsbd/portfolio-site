"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    n: "01",
    title: "Full stack, at depth",
    body: "Next.js, React, TypeScript on the surface. Python, Node, and Postgres underneath. Comfortable from the pixel to the pod.",
  },
  {
    n: "02",
    title: "AI as a first-class primitive",
    body: "I design with LLMs as material — agents, retrieval, evals — and turn hard research into calm product surfaces that feel obvious.",
  },
  {
    n: "03",
    title: "Team multiplier",
    body: "Mentor, document, automate. Great engineering is a team sport. My job is to make the next person ship faster than I did.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 border-t border-rule">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionLabel index="04 / 05" title="About" caption="A short, honest bio" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 md:col-start-1"
          >
            <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-medium tracking-tightest leading-[0.98]">
              I build software that
              <br />
              feels <span className="serif-italic text-ember">alive</span> — and
              <br />
              documentation that
              <br />
              feels inevitable.
            </h2>
          </motion.div>

          <div className="md:col-span-5 md:col-start-8 space-y-6 text-[15px] leading-relaxed text-ink/75 max-w-measure">
            <p>
              For eleven years I&apos;ve shipped products across web, mobile, and
              infra with a bias toward craft, speed, and taste. Most of my time
              now goes to AI-first surfaces: agent platforms, developer tools,
              and consumer apps that wrap models into something humans actually
              love to use.
            </p>
            <p>
              The details matter — typography that breathes, animations that
              inform, APIs that read obvious in hindsight. Whether I&apos;m
              co-founding or embedded, I bring a product-engineer mindset: own
              the outcome, ship the thing, iterate in public.
            </p>
            <p className="text-subtle text-[13px] pt-4 border-t border-rule">
              Currently reading: <span className="italic text-ink">The Staff Engineer&apos;s Path</span>.
              Currently listening to: Nils Frahm, Floating Points.
            </p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-rule border-t border-b border-rule">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="py-10 px-6 md:px-10 first:md:pl-0 last:md:pr-0"
            >
              <div className="flex items-center justify-between">
                <span className="num text-[11px] text-subtle">{p.n}</span>
                <span className="h-px w-8 bg-rule" />
              </div>
              <h3 className="mt-6 text-lg font-medium tracking-tight">{p.title}</h3>
              <p className="mt-3 text-[14px] text-ink/70 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({
  index,
  title,
  caption,
}: {
  index: string;
  title: string;
  caption?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <span className="num text-[11px] text-subtle">{index}</span>
        <span className="h-px w-12 bg-rule" />
        <span className="eyebrow text-ink">{title}</span>
      </div>
      {caption && (
        <span className="serif-italic text-[13px] text-subtle hidden sm:inline">
          — {caption}
        </span>
      )}
    </div>
  );
}
