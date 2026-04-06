// src/components/sections/Blog.tsx
"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import type { PostMeta } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

function FeaturedPostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div
        whileHover={{ borderColor: "rgba(110,231,183,0.2)" }}
        className="grid grid-cols-1 lg:grid-cols-2 border border-[#1E1E1E] rounded-2xl overflow-hidden bg-[#0F0F0F] mb-5 transition-colors duration-300 cursor-pointer"
      >
        {/* Visual panel */}
        <div className="hidden lg:flex items-center justify-center relative bg-[#111] border-r border-[#1A1A1A] min-h-[260px]">
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
          <span className="relative z-10 font-mono text-[11px] text-accent bg-accent/6 border border-accent/15 px-4 py-2 rounded-lg tracking-widest">
            Featured post
          </span>
        </div>

        {/* Content */}
        <div className="p-10 flex flex-col justify-between">
          <div>
            <p className="font-mono text-[10px] text-accent tracking-[0.12em] uppercase mb-4 flex items-center gap-2">
              <span className="opacity-50">#</span>
              {post.tag}
            </p>
            <h3 className="font-display text-[24px] leading-[1.2] tracking-tight mb-4 text-[#F5F5F5]">
              {post.title}
            </h3>
            <p className="text-muted text-[14px] leading-[1.75] font-light mb-8">
              {post.excerpt}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-subtle">
              {formatDate(post.date)}
            </span>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] text-subtle">
                {post.readingTime}
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[11px] text-accent">
                Read post <ArrowIcon />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

function SmallPostCard({ post, index }: { post: PostMeta; index: number }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div
        whileHover={{ y: -2, borderColor: "rgba(110,231,183,0.12)" }}
        transition={{ duration: 0.2 }}
        className="border border-[#1A1A1A] rounded-2xl bg-[#0F0F0F] p-7 flex flex-col justify-between min-h-[220px] cursor-pointer transition-colors duration-200"
      >
        <div>
          <p className="font-mono text-[10px] text-subtle tracking-[0.1em] mb-3">
            0{index + 2}
          </p>
          <p className="font-mono text-[10px] text-accent/70 tracking-[0.1em] uppercase mb-2">
            {post.tag}
          </p>
          <h4 className="font-display text-[18px] leading-[1.25] tracking-tight mb-3 text-[#ccc]">
            {post.title}
          </h4>
          <p className="text-[12px] text-subtle leading-[1.7] font-light">
            {post.excerpt}
          </p>
        </div>
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#111]">
          <span className="font-mono text-[10px] text-[#2A2A2A]">
            {formatDate(post.date)}
          </span>
          <span className="text-accent/60 text-[14px]">→</span>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Blog({ posts }: { posts: PostMeta[] }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured).slice(0, 3);

  return (
    <section
      id="blog"
      ref={ref}
      className="relative px-8 md:px-16 lg:px-24 py-32 border-t border-[#111]"
    >
      <div className="absolute left-0 top-32 w-px h-24 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <motion.div variants={item}>
          <SectionLabel>Writing</SectionLabel>
        </motion.div>

        <motion.h2
          variants={item}
          className="font-display leading-[1.08] tracking-tight mb-4"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Thoughts on{" "}
          <em className="text-accent not-italic font-display">building.</em>
        </motion.h2>

        <motion.p
          variants={item}
          className="text-muted text-[15px] font-light leading-[1.7] mb-14 max-w-[480px]"
        >
          Engineering deep-dives, product lessons, and the occasional honest post-mortem.
        </motion.p>

        {/* Featured */}
        {featured && (
          <motion.div variants={item}>
            <FeaturedPostCard post={featured} />
          </motion.div>
        )}

        {/* Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {rest.map((post, i) => (
            <motion.div key={post.slug} variants={item}>
              <SmallPostCard post={post} index={i} />
            </motion.div>
          ))}
        </motion.div>

        {/* View all */}
        <motion.div variants={item} className="flex justify-center">
          <Link
            href="/blog"
            className="font-mono text-[12px] text-subtle border border-[#1A1A1A] px-6 py-3 rounded-lg tracking-wide hover:border-[#333] hover:text-[#888] transition-all duration-200 inline-flex items-center gap-2"
          >
            View all posts <ArrowIcon />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}