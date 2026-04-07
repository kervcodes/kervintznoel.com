// src/components/ui/SkillBars.tsx
"use client";

import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const barColor: Record<string, string> = {
  emerald: "bg-accent",
  blue:    "bg-blue-300",
  subtle:  "bg-[#444]",
};

export default function SkillBars() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      <p className="font-mono text-[11px] text-subtle tracking-[0.14em] uppercase mb-6">
        Skills
      </p>

      <div className="flex flex-col gap-7">
        {skillCategories.map((cat) => (
          <div key={cat.id}>
            <p className="font-mono text-[10px] text-subtle/60 tracking-[0.14em] uppercase mb-3">
              {cat.label}
            </p>
            <div className="flex flex-col gap-[10px]">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <span className="font-light text-[13px] text-muted w-[130px] flex-shrink-0">
                    {skill.name}
                  </span>
                  <div className="flex-1 h-[3px] bg-[#111] rounded-full overflow-hidden">
                    <motion.div
                      className={cn("h-full rounded-full", barColor[cat.color])}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{
                        duration: 1,
                        ease: [0.25, 0.1, 0.25, 1] as const,
                        delay: 0.1,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}