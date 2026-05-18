import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  tone?: "gold" | "muted";
};

export function Eyebrow({ children, className, tone = "gold" }: Props) {
  return (
    <span
      className={cn(
        "text-xs font-bold uppercase tracking-[0.3em]",
        tone === "gold" ? "text-gold" : "text-gray-400",
        className,
      )}
    >
      {children}
    </span>
  );
}
