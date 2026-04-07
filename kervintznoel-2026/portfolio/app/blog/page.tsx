// src/app/blog/page.tsx
import Navbar from "@/components/layout/Navbar";
import SectionLabel from "@/components/ui/SectionLabel";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Engineering deep-dives, product lessons, and honest post-mortems by Kervintz Noel.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <div className="px-8 md:px-16 lg:px-24 pt-40 pb-32 max-w-4xl mx-auto">
        <SectionLabel>Writing</SectionLabel>
        <h1
          className="font-display leading-[1.08] tracking-tight mb-4"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          All{" "}
          <em className="text-accent not-italic font-display">posts.</em>
        </h1>
        <p className="text-muted text-[15px] font-light leading-[1.7] mb-16 max-w-[480px]">
          Engineering deep-dives, product lessons, and the occasional honest post-mortem.
        </p>

        <div className="flex flex-col divide-y divide-[#111]">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group py-8 flex items-start justify-between gap-8 hover:opacity-80 transition-opacity"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[10px] text-accent/70 tracking-[0.1em] uppercase">
                    {post.tag}
                  </span>
                  {post.featured && (
                    <span className="font-mono text-[10px] text-accent bg-accent/8 border border-accent/15 px-2 py-[2px] rounded">
                      Featured
                    </span>
                  )}
                </div>
                <h2 className="font-display text-[20px] leading-[1.2] tracking-tight text-[#ccc] group-hover:text-[#F5F5F5] transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-muted text-[13px] font-light leading-[1.7] line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex-shrink-0 text-right pt-1">
                <p className="font-mono text-[11px] text-subtle mb-1">
                  {formatDate(post.date)}
                </p>
                <p className="font-mono text-[10px] text-[#2A2A2A]">
                  {post.readingTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}