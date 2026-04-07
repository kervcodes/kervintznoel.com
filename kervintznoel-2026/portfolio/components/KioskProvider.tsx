"use client";

import { useKioskReset } from "@/hooks/useKioskReset";

/**
 * Invisible client component that activates kiosk behavior (inactivity reset)
 * on tablet-sized touch screens only. Renders nothing.
 */
export default function KioskProvider() {
  useKioskReset();
  return null;
}
