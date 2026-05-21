import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  width?: "sm" | "md" | "lg";
  align?: "left" | "center";
  variant?: "brand" | "lime" | "indigo" | "light";
};

const widths = {
  sm: "w-12",
  md: "w-16",
  lg: "w-24",
};

const variants = {
  brand: "brand-gradient",
  lime: "bg-lime",
  indigo: "bg-indigo",
  light: "bg-white/20",
};

export function BrandDivider({
  className,
  width = "md",
  align = "left",
  variant = "brand",
}: Props) {
  return (
    <div
      className={cn(
        "h-[3px] rounded-full",
        widths[width],
        variants[variant],
        align === "center" && "mx-auto",
        className,
      )}
      aria-hidden="true"
    />
  );
}
