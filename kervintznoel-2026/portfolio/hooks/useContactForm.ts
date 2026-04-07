"use client";

import type { ContactPayload } from "@/lib/types";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function useContactForm() {
  const [status, setStatus]   = useState<Status>("idle");
  const [error, setError]     = useState<string | null>(null);

  async function submit(payload: ContactPayload) {
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  function reset() {
    setStatus("idle");
    setError(null);
  }

  return { status, error, submit, reset };
}