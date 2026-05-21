import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "className">;

export function Container<T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      className={cn(
        // Responsive max-width tier:
        //  default (≤1280px) → 80rem  ─ 1280px (laptops)
        //  xl   (≥1280px)    → 90rem  ─ 1440px (15" laptops + 1366 displays)
        //  2xl  (≥1536px)    → 104rem ─ 1664px (1600px monitors)
        //  3xl  (≥1700px)    → 116rem ─ 1856px (1700-1919px wide displays)
        //  4xl  (≥2200px)    → 132rem ─ 2112px (ultra-wide 2k+ displays)
        "mx-auto w-full max-w-[80rem] xl:max-w-[90rem] 2xl:max-w-[104rem] 3xl:max-w-[116rem] 4xl:max-w-[132rem]",
        // Progressive horizontal padding — keeps content from touching the edge
        // but doesn't waste space on huge screens
        "px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 3xl:px-14",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
