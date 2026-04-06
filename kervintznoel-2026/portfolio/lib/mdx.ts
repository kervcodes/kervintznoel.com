import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  featured: boolean;
  readingTime: string;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      const rt = readingTime(content);

      return {
        slug,
        title: data.title as string,
        excerpt: data.excerpt as string,
        date: data.date as string,
        tag: data.tag as string,
        featured: (data.featured as boolean) ?? false,
        readingTime: rt.text,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post {
  const file = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    slug,
    title: data.title as string,
    excerpt: data.excerpt as string,
    date: data.date as string,
    tag: data.tag as string,
    featured: (data.featured as boolean) ?? false,
    readingTime: rt.text,
    content,
  };
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}