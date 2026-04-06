// src/components/sections/About.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import TerminalCard from "@/components/ui/TerminalCard";
import StackChips from "@/components/ui/StackChips";
import { bio, values } from "@/data/about";
import { cn } from "@/lib/utils";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative px-8 md:px-16 lg:px-24 py-32 border-t border-[#111]"
    >
      {/* Subtle side accent */}
      <div className="absolute left-0 top-32 w-px h-24 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {/* Label + heading */}
        <motion.div variants={item}>
          <SectionLabel>About me</SectionLabel>
        </motion.div>

        <motion.h2
          variants={item}
          className="font-display leading-[1.08] tracking-tight mb-16"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          The person behind
          <br />
          the <em className="text-accent not-italic font-display">commits.</em>
        </motion.h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT — bio + values */}
          <motion.div variants={container}>
            {bio.map((paragraph) => (
              <motion.p
                key={paragraph.id}
                variants={item}
                className="text-muted text-[16px] leading-[1.85] font-light mb-6"
              >
                {paragraph.text.map((segment, i) => {
                  if (segment.type === "strong")
                    return <strong key={i} className="text-[#ccc] font-medium">{segment.content}</strong>;
                  if (segment.type === "em")
                    return <em key={i} className="text-[#ccc] not-italic font-medium">{segment.content}</em>;
                  return <span key={i}>{segment.content}</span>;
                })}
              </motion.p>
            ))}

            {/* Values */}
            <motion.ul variants={container} className="mt-8 flex flex-col gap-4">
              {values.map((v) => (
                <motion.li
                  key={v.id}
                  variants={item}
                  className="flex items-start gap-3 text-[14px] text-muted leading-[1.7]"
                >
                  <span className="text-accent text-[10px] mt-[5px] flex-shrink-0">▸</span>
                  <span>
                    <strong className="text-[#ccc] font-medium">{v.title}</strong>{" "}
                    {v.body}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* RIGHT — terminal + stack */}
          <motion.div variants={container} className="flex flex-col gap-6">
            <motion.div variants={item}>
              <TerminalCard />
            </motion.div>
            <motion.div variants={item}>
              <StackChips />
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}