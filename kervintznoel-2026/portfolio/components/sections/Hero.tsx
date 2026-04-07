// src/components/sections/Hero.tsx
"use client";

import { useTypewriter } from "@/hooks/useTypewriter";
import { motion } from "framer-motion";

const ROLES = [
  "Open to new roles",       
  "ex-SRE @ Liberty Mutual",
  "Building Tidywaro",
  "Haitian music analytics",
  "AWS Solutions Architect",
];

const STATS = [
  { num: "7+", label: "years in tech" },
  { num: "3", label: "products in flight" },
  { num: "∞", label: "commits to ship" },
];

// Stagger config reused across children
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(110,231,183,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(110,231,183,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          animation: "gridDrift 20s linear infinite",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-120px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(110,231,183,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col justify-center flex-1 px-8 md:px-16 lg:px-24 pt-32 pb-16 max-w-5xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Status badge */}
        <motion.div variants={item} className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 w-fit">
            <span
              className="w-2 h-2 rounded-full bg-accent"
              style={{ animation: "statusPulse 2s ease-in-out infinite" }}
            />
            <span className="font-mono text-[11px] text-accent tracking-widest uppercase">
              available for new opportunities
            </span>
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          variants={item}
          className="font-mono text-[11px] text-subtle tracking-[0.18em] uppercase mb-4"
        >
          Software Engineer · SRE · Builder
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display leading-none tracking-tight mb-3"
          style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
        >
          Kervintz
          <br />
          <em className="text-accent not-italic font-display">Noel.</em>
        </motion.h1>

        {/* Role row */}
        <motion.div variants={item} className="flex items-center gap-3 mb-8 h-6">
          <span className="font-mono text-[13px] text-accent">{role}</span>
          <span className="w-0.5 h-4 bg-accent animate-pulse" />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-muted text-[16px] leading-[1.8] font-light max-w-[520px] mb-12"
        >
          I build{" "}
          <strong className="text-[#ccc] font-medium">reliable systems</strong>{" "}
          by day and{" "}
          <strong className="text-[#ccc] font-medium">products people use</strong>{" "}
          by night. From incident response pipelines to iOS wardrobe apps —
          I ship things that work.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex items-center gap-4 mb-20">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-accent text-[#0A0A0A] font-mono text-[13px] font-medium px-6 py-3 rounded-lg tracking-wide transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(110,231,183,0.25)] hover:bg-accent/90"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
            </svg>
            View my work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted font-mono text-[13px] px-6 py-3 rounded-lg border border-[#222] tracking-wide transition-all duration-200 hover:-translate-y-px hover:border-[#444] hover:text-[#F5F5F5]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download résumé
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          variants={item}
          className="flex items-center gap-12 pt-8 border-t border-[#1A1A1A]"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-display text-[32px] leading-none tracking-tight text-[#F5F5F5]">
                {stat.num.replace(/\+|∞/, "")}
                <span className="text-accent">
                  {stat.num.includes("+") ? "+" : stat.num === "∞" ? "∞" : ""}
                </span>
              </span>
              <span className="font-mono text-[11px] text-subtle tracking-widest uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 right-12 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-subtle tracking-[0.18em] uppercase">
          scroll
        </span>
        <div
          className="w-px h-10 bg-gradient-to-b from-[#333] to-transparent"
          style={{ animation: "scrollPulse 2s ease-in-out infinite" }}
        />
      </motion.div>
    </section>
  );
}