type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const text = variant === "light" ? "text-white" : "text-navy";
  const accent = variant === "light" ? "text-teal" : "text-teal-deep";
  const mark = variant === "light" ? "text-white" : "text-navy";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        className={`h-10 w-10 shrink-0 ${mark}`}
        aria-hidden
      >
        <circle cx="32" cy="14" r="5.5" fill="currentColor" />
        <path
          d="M18 28c6.5-7 21.5-7 28 0-4.5 8.5-9.5 16.5-14 26-4.5-9.5-9.5-17.5-14-26Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 34c4.5 5.5 9.5 12 10 18 0.5-6 5.5-12.5 10-18"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="leading-none">
        <span className={`block text-[0.68rem] tracking-[0.28em] uppercase ${text} opacity-90`}>Clínica</span>
        <span className={`font-display text-[1.55rem] tracking-tight ${accent}`}>Mattos Leite</span>
      </span>
    </span>
  );
}
