import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "dark" | "light";
};

export function Logo({ className, variant = "dark" }: Props) {
  const base =
    variant === "dark" ? "text-navy" : "text-gold-light";
  const ampersand = variant === "dark" ? "text-gold" : "text-white";

  return (
    <Link
      href="/"
      aria-label="CA Sandeep Nalla & Co. — Home"
      className={cn(
        "font-display text-2xl font-bold tracking-tight inline-flex items-center",
        base,
        className,
      )}
    >
      CA Sandeep Nalla <span className={cn("mx-1", ampersand)}>&</span> Co.
    </Link>
  );
}
