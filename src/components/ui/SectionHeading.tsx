import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as = "h2",
}: Props) {
  const Tag = as;
  return (
    <div
      className={cn(
        "max-w-2xl space-y-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag className="font-display text-4xl text-ink font-bold leading-tight md:text-5xl">
        {title}
      </Tag>
      {description && (
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
