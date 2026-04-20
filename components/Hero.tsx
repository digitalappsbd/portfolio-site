"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-28 overflow-hidden">
      {/* aurora blobs */}
      <div className="aurora bg-violet-600 w-[520px] h-[520px] -top-40 -left-32" />
      <div className="aurora bg-cyan-500 w-[420px] h-[420px] top-20 right-[-120px]" />
      <div className="aurora bg-fuchsia-500 w-[360px] h-[360px] bottom-[-120px] left-1/3 opacity-40" />
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for select senior & staff roles
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="block">Md Abu Sufian</span>
            <span className="block gradient-text">Senior Full Stack Developer</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            I build AI-native products end-to-end — from agent platforms and
            developer tools to consumer mobile apps. Currently shipping with{" "}
            <span className="text-white">xAI</span>,{" "}
            <span className="text-white">AgentPress</span>, and{" "}
            <span className="text-white">LiveKanvas</span>.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white glow-ring"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:sufibd2010@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium hover:bg-white/5 transition"
            >
              <Mail className="h-4 w-4" /> sufibd2010@gmail.com
            </a>
            <a
              href="https://github.com/digitalappsbd"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium hover:bg-white/5 transition"
            >
              <Github className="h-4 w-4" /> digitalappsbd
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Remote · Global
            </span>
            <span>·</span>
            <span>10+ years shipping production software</span>
          </div>
        </motion.div>

        {/* Floating stat cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "10+", v: "Years building" },
            { k: "50+", v: "Products shipped" },
            { k: "3", v: "AI platforms live" },
            { k: "∞", v: "Curiosity" },
          ].map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="glass card rounded-2xl p-5"
            >
              <div className="text-3xl font-bold gradient-text">{s.k}</div>
              <div className="mt-1 text-sm text-muted">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
