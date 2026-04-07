// src/components/layout/Footer.tsx
"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-8 md:px-16 lg:px-24 py-12 border-t border-[#111]">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-subtle tracking-widest">
          KN
        </span>
        <span className="font-mono text-[11px] text-[#2A2A2A]">
          © {year} Kervintz Noel. Built with Next.js + Tailwind.
        </span>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-mono text-[11px] text-subtle hover:text-accent transition-colors tracking-wide"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}