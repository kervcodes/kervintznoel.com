"use client";

import StatusBadge from "@/components/ui/StatusBadge";
import type { Project } from "@/data/projects";
import { motion } from "framer-motion";

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
);

export default function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ borderColor: "rgba(110,231,183,0.2)" }}
      className="relative border border-[#1E1E1E] rounded-2xl overflow-hidden bg-[#0F0F0F] grid grid-cols-1 lg:grid-cols-2 min-h-[320px] transition-colors duration-300"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      {/* Content */}
      <div className="p-10 flex flex-col justify-between">
        <div>
          <div className="mb-5">
            <StatusBadge status={project.status} label={project.statusLabel} />
          </div>

          <p className="font-mono text-[11px] text-subtle tracking-[0.1em] mb-2">
            {project.num}
          </p>

          <h3 className="font-display text-[28px] leading-tight tracking-tight mb-4">
            {project.title}
          </h3>

          <p className="text-muted text-[14px] leading-[1.75] font-light mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] text-subtle border border-[#1E1E1E] px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5">
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[12px] text-accent hover:opacity-70 transition-opacity"
            >
              <ExternalIcon />
              Live site
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 font-mono text-[12px] text-subtle">
              <ExternalIcon />
              App Store (soon)
            </span>
          )}

          {project.links.github !== undefined ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[12px] text-subtle hover:text-[#ccc] transition-colors"
            >
              <GithubIcon />
              {project.links.githubLabel ?? "GitHub"}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 font-mono text-[12px] text-subtle/50">
              <GithubIcon />
              {project.links.githubLabel ?? "GitHub"}
            </span>
          )}
        </div>
      </div>

      {/* Visual panel */}
      <div className="hidden lg:flex items-center justify-center relative bg-[#111] border-l border-[#1A1A1A] min-h-[240px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(110,231,183,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(110,231,183,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />
        <span
          className="relative z-10 font-display text-[80px] text-accent/10 tracking-tighter select-none"
        >
          {project.visualLabel}
        </span>
      </div>
    </motion.div>
  );
}