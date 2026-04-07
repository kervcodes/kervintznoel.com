// src/components/sections/Contact.tsx
"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { useContactForm } from "@/hooks/useContactForm";
import { cn } from "@/lib/utils";

const SUBJECTS = [
  "Job opportunity",
  "Collaboration",
  "Consulting",
  "Just saying hi",
];

const SOCIAL_LINKS = [
  {
    id:    "email",
    label: "Email",
    value: "hello@kervintznoel.com",
    href:  "mailto:hello@kervintznoel.com",
    color: "emerald",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6EE7B7" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    id:    "github",
    label: "GitHub",
    value: "@kervcodes",
    href:  "https://github.com/kervcodes",
    color: "gray",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
  },
  {
    id:    "linkedin",
    label: "LinkedIn",
    value: "Kervintz Noel",
    href:  "https://linkedin.com/in/kervintznoel",
    color: "blue",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" strokeWidth="1.5">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

const iconBg: Record<string, string> = {
  emerald: "bg-accent/8 border-accent/12",
  gray:    "bg-white/4 border-white/6",
  blue:    "bg-blue-300/8 border-blue-300/12",
};

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const SendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Contact() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { status, error, submit, reset } = useContactForm();

  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await submit({ name, email, subject, message });
  }

  function handleReset() {
    setName("");
    setEmail("");
    setSubject(SUBJECTS[0]);
    setMessage("");
    reset();
  }

  const inputClass = cn(
    "w-full bg-[#111] border border-[#1E1E1E] rounded-lg px-4 py-3",
    "font-light text-[14px] text-[#F5F5F5] placeholder:text-subtle",
    "outline-none transition-colors duration-200",
    "focus:border-accent/30"
  );

  return (
    <section
      id="contact"
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
          <SectionLabel>Contact</SectionLabel>
        </motion.div>

        <motion.h2
          variants={item}
          className="font-display leading-[1.08] tracking-tight mb-16"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Let's build
          <br />
          something{" "}
          <em className="text-accent not-italic font-display">together.</em>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">

          {/* LEFT */}
          <motion.div variants={container}>
            <motion.p
              variants={item}
              className="text-muted text-[15px] font-light leading-[1.8] mb-10"
            >
              Whether it's a{" "}
              <span className="text-[#888]">new role</span>, a{" "}
              <span className="text-[#888]">collaboration</span>, or just a
              conversation about systems and products — I read every message
              and reply within 48 hours.
            </motion.p>

            {/* Social links */}
            <motion.div variants={container} className="flex flex-col gap-3 mb-10">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.id}
                  variants={item}
                  href={link.href}
                  target={link.id !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-4 bg-[#0F0F0F] border border-[#1A1A1A] rounded-xl hover:border-accent/20 hover:text-accent transition-all duration-200 group"
                >
                  <div className={cn("w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0", iconBg[link.color])}>
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[10px] text-subtle tracking-[0.06em] mb-[2px]">
                      {link.label}
                    </p>
                    <p className="font-mono text-[12px] text-muted group-hover:text-accent transition-colors truncate">
                      {link.value}
                    </p>
                  </div>
                  <span className="text-subtle group-hover:text-accent transition-colors">
                    <ArrowIcon />
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={item}
              className="flex items-center gap-3 px-5 py-4 rounded-xl bg-accent/4 border border-accent/10"
            >
              <span
                className="w-2 h-2 rounded-full bg-accent flex-shrink-0"
                style={{ animation: "statusPulse 2s ease-in-out infinite" }}
              />
              <span className="font-mono text-[11px] text-accent tracking-wide">
                Available for full-time roles &amp; select contracts
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT — form card */}
          <motion.div variants={item}>
            <div className="relative bg-[#0F0F0F] border border-[#1E1E1E] rounded-2xl p-10 overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* Success state */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6EE7B7" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <h3 className="font-display text-[24px] tracking-tight text-[#F5F5F5] mb-3">
                      Message sent.
                    </h3>
                    <p className="text-muted text-[14px] font-light leading-[1.7] mb-8 max-w-[300px]">
                      Thanks for reaching out. I'll reply within 48 hours.
                    </p>
                    <button
                      onClick={handleReset}
                      className="font-mono text-[12px] text-subtle border border-[#1A1A1A] px-5 py-3 rounded-lg hover:border-[#333] hover:text-[#888] transition-all"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  /* Form state */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] text-subtle tracking-[0.1em] uppercase">
                          Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jane Smith"
                          required
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] text-subtle tracking-[0.1em] uppercase">
                          Email
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jane@company.com"
                          required
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Subject chips */}
                    <div className="flex flex-col gap-2">
                      <p className="font-mono text-[10px] text-subtle tracking-[0.1em] uppercase">
                        What's this about?
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {SUBJECTS.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setSubject(s)}
                            className={cn(
                              "font-mono text-[10px] px-3 py-[6px] rounded-md border tracking-wide transition-all duration-150",
                              subject === s
                                ? "border-accent/25 text-accent bg-accent/6"
                                : "border-[#1E1E1E] text-subtle bg-[#111] hover:border-accent/20 hover:text-accent/70"
                            )}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-subtle tracking-[0.1em] uppercase">
                        Message
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me what you're working on..."
                        required
                        rows={5}
                        className={cn(inputClass, "resize-none leading-[1.6]")}
                      />
                    </div>

                    {/* Error */}
                    {error && (
                      <p className="font-mono text-[11px] text-red-400 bg-red-400/8 border border-red-400/15 px-4 py-3 rounded-lg">
                        {error}
                      </p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className={cn(
                        "w-full flex items-center justify-center gap-2",
                        "bg-accent text-[#0A0A0A] font-mono text-[13px] font-medium",
                        "px-6 py-4 rounded-lg tracking-wide transition-all duration-200",
                        "hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(110,231,183,0.2)] hover:bg-accent/90",
                        "disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
                      )}
                    >
                      {status === "loading" ? (
                        <>
                          <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeOpacity="0.3"/>
                            <path d="M12 3a9 9 0 019 9"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <SendIcon />
                          Send message
                        </>
                      )}
                    </button>

                    <p className="font-mono text-[10px] text-[#2A2A2A] text-center tracking-wide">
                      Powered by Resend · I reply within 48 hours
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}