// src/components/ui/StackChips.tsx
"use client";

import { stack } from "@/data/about";
import { cn } from "@/lib/utils";

export default function StackChips() {
  return (
    <div>
      <p className="font-mono text-[11px] text-subtle tracking-[0.12em] uppercase mb-4">
        Current stack
      </p>
      <div className="flex flex-wrap gap-2">
        {stack.map((chip) => (
          <span
            key={chip.label}
            className={cn(
              "font-mono text-[11px] px-3 py-[5px] rounded-md border tracking-wide transition-all duration-200 cursor-default",
              chip.accent
                ? "border-accent/20 text-accent bg-accent/6"
                : "border-[#222] text-muted bg-[#111] hover:border-accent/30 hover:text-accent hover:bg-accent/5"
            )}
          >
            {chip.label}
          </span>
        ))}
      </div>
    </div>
  );
}