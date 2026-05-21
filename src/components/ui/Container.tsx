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
        //  default (≤1280px) → 80rem  ─ comfortable for laptops
        //  xl   (≥1280px)    → 88rem  ─ 14" – 15" laptops
        //  2xl  (≥1536px)    → 96rem  ─ 1080p and 1440p monitors
        //  3xl  (≥1920px)    → 112rem ─ ultra-wide displays
        "mx-auto w-full max-w-[80rem] xl:max-w-[88rem] 2xl:max-w-[96rem] 3xl:max-w-[112rem]",
        // Progressive horizontal padding
        "px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
