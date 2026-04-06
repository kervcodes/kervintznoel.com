// src/app/page.tsx
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Blog from "@/components/sections/Blog";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Blog posts={posts} />
      {/* Future sections mount here */}
    </main>
  );
}