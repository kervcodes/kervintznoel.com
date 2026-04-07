import { certs } from "@/data/skills";
import { cn } from "@/lib/utils";
import type { Cert } from "@/data/skills";

const iconStyles: Record<Cert["iconVariant"], string> = {
  emerald: "bg-accent/10 text-accent border-accent/15",
  amber:   "bg-yellow-400/10 text-yellow-300 border-yellow-400/15",
  blue:    "bg-blue-300/10 text-blue-300 border-blue-300/15",
};

const statusStyles: Record<Cert["status"], string> = {
  earned:   "bg-accent/8 text-accent border-accent/15",
  progress: "bg-yellow-400/8 text-yellow-300 border-yellow-400/15",
};

const statusLabel: Record<Cert["status"], string> = {
  earned:   "Earned",
  progress: "In progress",
};

export default function CertCards() {
  return (
    <div className="mt-8">
      <p className="font-mono text-[11px] text-subtle tracking-[0.14em] uppercase mb-4">
        Certifications
      </p>

      <div className="flex flex-col gap-3">
        {certs.map((cert) => (
          <div
            key={cert.id}
            className="flex items-center gap-4 bg-[#0F0F0F] border border-[#1A1A1A] rounded-xl px-4 py-4 hover:border-[#222] transition-colors duration-200"
          >
            {/* Icon */}
            <div
              className={cn(
                "w-9 h-9 rounded-lg border flex items-center justify-center font-mono text-[10px] font-medium flex-shrink-0",
                iconStyles[cert.iconVariant]
              )}
            >
              {cert.iconLabel}
            </div>

            {/* Body */}
            <div className="flex-1 min-w-0">
              <p className="text-[13px] text-[#ccc] font-medium leading-tight mb-[2px]">
                {cert.title}
              </p>
              <p className="font-mono text-[10px] text-subtle">
                {cert.issuer}
              </p>
            </div>

            {/* Status */}
            <span
              className={cn(
                "font-mono text-[10px] tracking-[0.08em] px-2 py-1 rounded border flex-shrink-0",
                statusStyles[cert.status]
              )}
            >
              {statusLabel[cert.status]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}