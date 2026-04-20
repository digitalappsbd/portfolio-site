"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { SectionLabel } from "./About";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel index="05" title="Contact" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 glass rounded-3xl p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-violet-600/40 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/30 blur-3xl" />

          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Got something ambitious? <br />
              <span className="gradient-text">Let&apos;s build it.</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted text-lg">
              Open to senior & staff roles, advisory, and thoughtful product
              collaborations. The fastest way to reach me is email.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:sufibd2010@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
              >
                <Mail className="h-4 w-4" />
                sufibd2010@gmail.com
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://github.com/digitalappsbd"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium hover:bg-white/5 transition"
              >
                <Github className="h-4 w-4" /> github.com/digitalappsbd
              </a>
              <a
                href="https://linkedin.com/in/hellosufi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium hover:bg-white/5 transition"
              >
                <Linkedin className="h-4 w-4" /> linkedin.com/in/hellosufi
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> Dhaka, Bangladesh — working globally
              </span>
              <span>·</span>
              <span>Typical reply &lt; 24h</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
