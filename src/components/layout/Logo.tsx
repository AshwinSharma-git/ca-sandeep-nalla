import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "dark" | "light";
  showWordmark?: boolean;
};

export function LogoMark({
  className,
  size = 36,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="AXIAFIN"
      className={cn("shrink-0", className)}
    >
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="14"
        fill="url(#axiafin-bg)"
      />
      {/* Open 'A' triangle */}
      <path
        d="M32 16 L48 44 L41 44 L32 27 L23 44 L16 44 Z"
        fill="#FFFFFF"
      />
      {/* Lime base bar */}
      <rect x="14" y="48" width="36" height="6" rx="3" fill="#7AC23C" />
      <defs>
        <linearGradient id="axiafin-bg" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor="#3D43C9" />
          <stop offset="100%" stopColor="#2A2F9E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logo({
  className,
  variant = "dark",
  showWordmark = true,
}: Props) {
  const wordmarkColor = variant === "dark" ? "text-ink" : "text-white";

  return (
    <Link
      href="/"
      aria-label="AXIAFIN — Home"
      className={cn("inline-flex items-center gap-2.5 group", className)}
    >
      <LogoMark
        size={36}
        className="transition-transform duration-500 ease-out group-hover:rotate-[-6deg]"
      />
      {showWordmark && (
        <span
          className={cn(
            "font-display text-[22px] font-bold tracking-[-0.01em] leading-none inline-flex items-baseline",
            wordmarkColor,
          )}
        >
          A<span className="text-lime">X</span>IAFIN
        </span>
      )}
    </Link>
  );
}
