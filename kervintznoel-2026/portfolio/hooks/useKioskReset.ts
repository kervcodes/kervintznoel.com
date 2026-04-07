"use client";

import { useEffect } from "react";

const IDLE_MS = 3 * 60 * 1000; // 3 minutes

/**
 * On touch-capable tablet screens only (e.g. iPad), scroll back to the top
 * after IDLE_MS of no user interaction. Has no effect on desktops or phones.
 */
export function useKioskReset() {
  useEffect(() => {
    // Only activate on touch devices with a tablet-width screen (≥768 px).
    // This targets iPads and Android tablets but not phones or desktops.
    const isTablet =
      window.matchMedia("(pointer: coarse) and (min-width: 768px)").matches;

    if (!isTablet) return;

    let timer: ReturnType<typeof setTimeout>;

    const reset = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const restart = () => {
      clearTimeout(timer);
      timer = setTimeout(reset, IDLE_MS);
    };

    const events = ["touchstart", "touchmove", "touchend", "scroll"] as const;
    events.forEach((e) => window.addEventListener(e, restart, { passive: true }));

    // Start the timer immediately on mount
    restart();

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, restart));
    };
  }, []);
}
