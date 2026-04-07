"use client";

import FeaturedProjectCard from "@/components/ui/FeaturedProjectCard";
import SectionLabel from "@/components/ui/SectionLabel";
import SmallProjectCard from "@/components/ui/SmallProjectCard";
import { projects } from "@/data/projects";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
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
          <SectionLabel>Selected work</SectionLabel>
        </motion.div>

        <motion.h2
          variants={item}
          className="font-display leading-[1.08] tracking-tight mb-4"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Products I've{" "}
          <em className="text-accent not-italic font-display">shipped.</em>
        </motion.h2>

        <motion.p
          variants={item}
          className="text-muted text-[15px] font-light leading-[1.7] mb-16 max-w-[480px]"
        >
          Side projects built from scratch — real users, real problems, real stacks.
        </motion.p>

        {/* Featured card */}
        {featured && (
          <motion.div variants={item} className="mb-5">
            <FeaturedProjectCard project={featured} />
          </motion.div>
        )}

        {/* Small cards row */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {rest.map((project) => (
            <motion.div key={project.id} variants={item}>
              <SmallProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}