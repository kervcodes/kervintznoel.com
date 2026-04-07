// src/hooks/useTypewriter.ts
"use client";

import { useState, useEffect } from "react";

export function useTypewriter(words: string[], speed = 70, deleteSpeed = 40, pause = 2200) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    if (waiting) return;

    const current = words[wordIndex];
    let pauseTimeout: ReturnType<typeof setTimeout> | undefined;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, charIndex + 1);
        setDisplayed(next);
        setCharIndex((c) => c + 1);

        if (charIndex + 1 === current.length) {
          setWaiting(true);
          pauseTimeout = setTimeout(() => {
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

    return () => {
      clearTimeout(timeout);
      if (pauseTimeout !== undefined) clearTimeout(pauseTimeout);
    };
  }, [charIndex, deleting, wordIndex, words, speed, deleteSpeed, pause, waiting]);

  return displayed;
}