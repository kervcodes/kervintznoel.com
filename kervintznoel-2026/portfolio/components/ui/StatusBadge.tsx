import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/data/projects";

const statusStyles: Record<ProjectStatus, string> = {
  active:   "bg-accent/8 border-accent/20 text-accent",
  beta:     "bg-yellow-400/8 border-yellow-400/20 text-yellow-300",
  building: "bg-blue-300/8 border-blue-300/20 text-blue-300",
  shipped:  "bg-purple-400/8 border-purple-400/20 text-purple-300",
};

export default function StatusBadge({
  status,
  label,
}: {
  status: ProjectStatus;
  label: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[6px] font-mono text-[10px] tracking-[0.1em] uppercase px-3 py-[5px] rounded-full border w-fit",
        statusStyles[status]
      )}
    >
      <span
        className="w-[6px] h-[6px] rounded-full bg-current"
        style={{ animation: "statusPulse 2s ease-in-out infinite" }}
      />
      {label}
    </span>
  );
}