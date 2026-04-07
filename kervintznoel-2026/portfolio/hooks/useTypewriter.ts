// src/hooks/useTypewriter.ts
"use client";

import { useEffect, useRef, useState } from "react";

export function useTypewriter(words: string[], speed = 70, deleteSpeed = 40, pause = 2200) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (words.length === 0 || waiting) return;

    const current = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, charIndex + 1);
        setDisplayed(next);
        setCharIndex((c) => c + 1);

        if (charIndex + 1 === current.length) {
          setWaiting(true);
          pauseTimeoutRef.current = setTimeout(() => {
            pauseTimeoutRef.current = null;
            setDeleting(true);
            setWaiting(false);
          }, pause);
        }
      } else {
        const next = current.slice(0, charIndex - 1);
        setDisplayed(next);
        setCharIndex((c) => c - 1);

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((w) => (w + 1) % words.length);
        }
      }
    }, deleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, deleteSpeed, pause, waiting]);

  // Clear pause timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  return displayed;
}