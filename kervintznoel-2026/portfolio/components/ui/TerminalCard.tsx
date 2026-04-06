// src/components/ui/TerminalCard.tsx
import { terminalData } from "@/data/about";

export default function TerminalCard() {
  const d = terminalData;

  return (
    <div className="rounded-xl border border-[#1E1E1E] overflow-hidden bg-[#0F0F0F]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-[#1A1A1A]">
        <span className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
        <span className="font-mono text-[11px] text-subtle ml-2 tracking-wide">
          kervintz.json
        </span>
      </div>

      {/* Body */}
      <div className="p-6 font-mono text-[12.5px] leading-[1.9]">
        <p className="text-subtle mb-1">{"// $ cat kervintz.json"}</p>
        <p className="text-[#F5F5F5]">{"{"}</p>

        <div className="pl-5">
          <Line k="name"       v={`"${d.name}"`}        vc="str" />
          <Line k="role"       v={`"${d.role}"`}        vc="str" />
          <Line k="location"   v={`"${d.location}"`}    vc="str" />
          <Line k="experience" v={`${d.experience}`}    vc="num" />

          {/* products array */}
          <p>
            <span className="text-[#93C5FD]">"products"</span>
            <span className="text-[#F5F5F5]">{": ["}</span>
          </p>
          <div className="pl-5">
            {d.products.map((p, i) => (
              <p key={p}>
                <span className="text-[#86EFAC]">"{p}"</span>
                {i < d.products.length - 1 && (
                  <span className="text-[#F5F5F5]">,</span>
                )}
              </p>
            ))}
          </div>
          <p className="text-[#F5F5F5]">],</p>

          {/* learning array */}
          <p>
            <span className="text-[#93C5FD]">"learning"</span>
            <span className="text-[#F5F5F5]">{": ["}</span>
            {d.learning.map((l, i) => (
              <span key={l}>
                <span className="text-[#86EFAC]">"{l}"</span>
                {i < d.learning.length - 1 && (
                  <span className="text-[#F5F5F5]">, </span>
                )}
              </span>
            ))}
            <span className="text-[#F5F5F5]">],</span>
          </p>

          <Line
            k="available"
            v={String(d.available)}
            vc="bool"
            last
          />
        </div>

        <p className="text-[#F5F5F5]">{"}"}</p>
      </div>
    </div>
  );
}

// Sub-component for a single key-value line
function Line({
  k,
  v,
  vc,
  last = false,
}: {
  k: string;
  v: string;
  vc: "str" | "num" | "bool";
  last?: boolean;
}) {
  const valColor =
    vc === "str"  ? "text-[#86EFAC]" :
    vc === "num"  ? "text-[#FDA4AF]" :
                    "text-[#C4B5FD]";

  return (
    <p>
      <span className="text-[#93C5FD]">"{k}"</span>
      <span className="text-[#F5F5F5]">: </span>
      <span className={valColor}>{v}</span>
      {!last && <span className="text-[#F5F5F5]">,</span>}
    </p>
  );
}