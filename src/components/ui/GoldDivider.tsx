import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  width?: "sm" | "md" | "lg";
  align?: "left" | "center";
};

const widths = {
  sm: "w-12",
  md: "w-16",
  lg: "w-24",
};

export function GoldDivider({
  className,
  width = "md",
  align = "left",
}: Props) {
  return (
    <div
      className={cn(
        "h-1 bg-gold",
        widths[width],
        align === "center" && "mx-auto",
        className,
      )}
      aria-hidden="true"
    />
  );
}
