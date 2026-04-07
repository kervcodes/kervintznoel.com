// src/components/sections/Experience.tsx
"use client";

import CertCards from "@/components/ui/CertCards";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillBars from "@/components/ui/SkillBars";
import Timeline from "@/components/ui/Timeline";
import { timeline } from "@/data/experience";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative px-8 md:px-16 lg:px-24 py-32 border-t border-[#111]"
    >
      {/* Side accent */}
      <div className="absolute left-0 top-32 w-px h-24 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={item}>
          <SectionLabel>Background</SectionLabel>
        </motion.div>

        <motion.h2
          variants={item}
          className="font-display leading-[1.08] tracking-tight mb-16"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Where I've been,
          <br />
          what I've{" "}
          <em className="text-accent not-italic font-display">mastered.</em>
        </motion.h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT — Timeline */}
          <motion.div variants={item}>
            <Timeline items={timeline} />
          </motion.div>

          {/* RIGHT — Skills + Certs */}
          <motion.div variants={container} className="flex flex-col">
            <motion.div variants={item}>
              <SkillBars />
            </motion.div>
            <motion.div variants={item}>
              <CertCards />
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}