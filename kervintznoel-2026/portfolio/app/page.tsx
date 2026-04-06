// src/app/page.tsx
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <Hero />
      {/* Future sections mount here */}
    </main>
  );
}