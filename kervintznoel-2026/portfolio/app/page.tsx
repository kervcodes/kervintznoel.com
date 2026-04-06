// src/app/page.tsx
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";


export default function Home() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* Future sections mount here */}
    </main>
  );
}