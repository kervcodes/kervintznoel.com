// src/components/ui/Timeline.tsx
import { cn } from "@/lib/utils";
import type { TimelineItem } from "@/data/experience";

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <p className="font-mono text-[11px] text-subtle tracking-[0.14em] uppercase mb-7">
        Experience
      </p>

      <div className="flex flex-col">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="relative pl-6 pb-9 last:pb-0"
          >
            {/* Vertical line */}
            {index < items.length - 1 && (
              <div className="absolute left-0 top-[7px] bottom-0 w-px bg-gradient-to-b from-[#222] to-[#111]" />
            )}

            {/* Dot */}
            <div
              className={cn(
                "absolute left-[-3px] top-[6px] w-[7px] h-[7px] rounded-full border bg-[#0A0A0A]",
                item.status === "education"
                  ? "border-[#333]"
                  : "border-[#444]"
              )}
            />

            {/* Date */}
            <p className="font-mono text-[10px] text-subtle tracking-[0.1em] mb-[6px]">
              {item.date}
            </p>

            {/* Role */}
            <p className="text-[15px] font-medium text-[#ccc] mb-[2px]">
              {item.role}
            </p>

            {/* Company */}
            <p className="font-mono text-[11px] text-accent mb-2">
              {item.company}
            </p>

            {/* Description */}
            <p className="text-[13px] text-muted font-light leading-[1.7] mb-3">
              {item.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-[5px]">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] text-subtle border border-[#1E1E1E] px-[7px] py-[2px] rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}