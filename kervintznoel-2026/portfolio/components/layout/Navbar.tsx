"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#work", label: "work" },
  { href: "#about", label: "about" },
  { href: "#blog", label: "blog" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-7 transition-all duration-500",
        scrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5 py-5"
          : "bg-transparent"
      )}
    >
      <Link
        href="/"
        className="font-mono text-[13px] text-accent tracking-widest hover:opacity-70 transition-opacity"
      >
        KN.dev
      </Link>

      <ul className="flex items-center gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-mono text-[13px] text-muted tracking-wider hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}

        <li>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] text-[#0A0A0A] bg-accent px-4 py-2 rounded-lg tracking-wider hover:bg-accent/80 transition-all duration-200 hover:-translate-y-px"
          >
            résumé ↗
          </a>
        </li>
      </ul>
    </nav>
  );
}