const FONT = "'Cormorant Garamond', serif";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const scales = {
    sm: { monogram: "text-[28px]", line: "my-[5px]", text: "text-[8px]",   gap: "tracking-[0.22em]" },
    md: { monogram: "text-[38px]", line: "my-[7px]", text: "text-[9.5px]", gap: "tracking-[0.26em]" },
    lg: { monogram: "text-[54px]", line: "my-[10px]", text: "text-[12px]", gap: "tracking-[0.28em]" },
  };

  const s = scales[size];

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <span
        className={`${s.monogram} font-[600] leading-none text-white`}
        style={{ fontFamily: FONT, letterSpacing: "0.04em" }}
      >
        LSM
      </span>

      <div className={`w-full h-px bg-white/80 ${s.line}`} />

      <span
        className={`${s.text} ${s.gap} uppercase text-white font-[400] leading-none`}
        style={{ fontFamily: FONT }}
      >
        Legal<span className="text-[#C9A96E]">&</span>Sign
      </span>

      <span
        className={`${s.text} ${s.gap} uppercase text-white/70 font-[400] leading-none mt-[3px]`}
        style={{ fontFamily: FONT }}
      >
        Montevideo
      </span>
    </div>
  );
}
