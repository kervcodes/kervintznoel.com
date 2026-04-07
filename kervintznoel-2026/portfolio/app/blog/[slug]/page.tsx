import Navbar from "@/components/layout/Navbar";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/mdx";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return { title: post.title, description: post.excerpt };
  } catch {
    return { title: "Post not found" };
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Navbar />

      <article className="px-8 md:px-16 lg:px-24 pt-40 pb-32 max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-[11px] text-subtle hover:text-accent transition-colors mb-12"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          All posts
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[10px] text-accent tracking-[0.12em] uppercase">
              #{post.tag}
            </span>
          </div>

          <h1
            className="font-display leading-[1.08] tracking-tight text-[#F5F5F5] mb-6"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            {post.title}
          </h1>

          <p className="text-muted text-[16px] font-light leading-[1.75] mb-8 max-w-[600px]">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 pb-8 border-b border-[#111]">
            <span className="font-mono text-[11px] text-subtle">
              {formatDate(post.date)}
            </span>
            <span className="text-subtle/30">·</span>
            <span className="font-mono text-[11px] text-subtle">
              {post.readingTime}
            </span>
          </div>
        </div>

        {/* MDX content */}
        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:font-display prose-headings:tracking-tight prose-headings:text-[#F5F5F5]
          prose-p:text-muted prose-p:font-light prose-p:leading-[1.85]
          prose-strong:text-[#ccc] prose-strong:font-medium
          prose-a:text-accent prose-a:no-underline hover:prose-a:opacity-70
          prose-code:font-mono prose-code:text-accent prose-code:bg-accent/8
          prose-code:px-1 prose-code:py-[2px] prose-code:rounded prose-code:text-[13px]
          prose-pre:bg-[#0F0F0F] prose-pre:border prose-pre:border-[#1E1E1E] prose-pre:rounded-xl
          prose-hr:border-[#1E1E1E]
          prose-blockquote:border-l-accent prose-blockquote:text-muted"
        >
          <MDXRemote source={post.content} />
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-[#111]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-[12px] text-subtle border border-[#1A1A1A] px-5 py-3 rounded-lg hover:border-[#333] hover:text-[#888] transition-all"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to all posts
          </Link>
        </div>
      </article>
    </main>
  );
}