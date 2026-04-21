"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { SectionLabel } from "./About";

const channels = [
  {
    icon: Mail,
    label: "Email — fastest",
    value: "sufibd2010@gmail.com",
    href: "mailto:sufibd2010@gmail.com",
    primary: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/digitalappsbd",
    href: "https://github.com/digitalappsbd",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/hellosufi",
    href: "https://linkedin.com/in/hellosufi",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 border-t border-rule">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionLabel index="05 / 05" title="Contact" caption="The shortest line wins" />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-medium tracking-tightest leading-[0.94]">
              Got something
              <br />
              <span className="serif-italic text-ember">ambitious?</span>
              <br />
              Let&apos;s build it.
            </h2>
            <p className="mt-8 max-w-measure text-[15px] text-ink/75 leading-relaxed">
              Open to senior and staff roles, advisory, and thoughtful product
              collaborations. Email moves fastest — I typically reply within a
              working day.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-subtle">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                Dhaka, Bangladesh
              </span>
              <span className="h-1 w-1 rounded-full bg-rule" />
              <span className="num">GMT+6 · Working globally</span>
              <span className="h-1 w-1 rounded-full bg-rule" />
              <span className="num">Reply &lt; 24h</span>
            </div>
          </motion.div>

          <div className="md:col-span-5 md:col-start-8">
            <ul className="border-t border-rule">
              {channels.map((c, i) => (
                <motion.li
                  key={c.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="border-b border-rule"
                >
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                    className={`group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 px-2 -mx-2 rounded-sm transition-colors ${
                      c.primary ? "bg-ink/[0.03] hover:bg-ink/[0.06]" : "hover:bg-ink/[0.03]"
                    }`}
                  >
                    <c.icon className="h-4 w-4 text-ink/70" strokeWidth={1.5} />
                    <div className="min-w-0">
                      <div className="eyebrow">{c.label}</div>
                      <div className="num text-[14px] text-ink mt-1 truncate">
                        {c.value}
                      </div>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 text-subtle group-hover:text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={2}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>

            <a
              href="mailto:sufibd2010@gmail.com"
              className="mt-6 group inline-flex items-center justify-between gap-3 w-full rounded-full bg-ink text-paper px-5 py-3.5 text-[14px] font-medium transition-transform active:translate-y-[1px]"
            >
              <span>Start the conversation</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
