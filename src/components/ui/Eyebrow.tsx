import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  tone?: "indigo" | "lime" | "muted";
};

const tones = {
  indigo: "text-indigo",
  lime: "text-lime-deep",
  muted: "text-gray-400",
};

export function Eyebrow({ children, className, tone = "indigo" }: Props) {
  return (
    <span
      className={cn(
        "text-[11px] font-bold uppercase tracking-[0.32em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
