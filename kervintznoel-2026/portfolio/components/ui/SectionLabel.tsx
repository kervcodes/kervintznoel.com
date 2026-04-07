// src/components/ui/SectionLabel.tsx
import { cn } from "@/lib/utils";

export default function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] text-accent tracking-[0.18em] uppercase mb-4",
        className
      )}
    >
      <span className="block w-6 h-px bg-accent" />
      {children}
    </div>
  );
}