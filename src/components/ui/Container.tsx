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
      className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
