"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#about", label: "about" },
  { href: "/#work", label: "work" },
  { href: "/#experience", label: "experience" },
  { href: "/#blog", label: "blog" },
  { href: "/#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
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
          KN
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex items-center gap-8">
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

        {/* Hamburger button (mobile only) */}
        <button
          className="sm:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={cn(
              "block h-px w-5 bg-muted transition-all duration-200",
              menuOpen && "translate-y-[6px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-muted transition-all duration-200",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-muted transition-all duration-200",
              menuOpen && "-translate-y-[6px] -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "sm:hidden fixed inset-0 z-40 flex flex-col justify-center items-center gap-8 bg-[#0A0A0A]/95 backdrop-blur-md transition-all duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <ul className="flex flex-col items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-[15px] text-muted tracking-wider hover:text-accent transition-colors duration-200"
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
              onClick={() => setMenuOpen(false)}
              className="font-mono text-[13px] text-[#0A0A0A] bg-accent px-4 py-2 rounded-lg tracking-wider hover:bg-accent/80 transition-all duration-200"
            >
              résumé ↗
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}