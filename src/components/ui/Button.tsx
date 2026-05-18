import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "gold" | "outline-light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-3 font-semibold rounded-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-light shadow-xl hover:shadow-2xl",
  secondary:
    "bg-transparent border-2 border-navy text-navy hover:bg-navy/5",
  gold: "bg-gold text-navy font-bold hover:bg-gold-light shadow-2xl",
  "outline-light":
    "border border-navy/20 text-navy hover:bg-navy/5",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type SharedProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = SharedProps & {
  href: string;
  external?: boolean;
};

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function LinkButton({
  href,
  external,
  variant = "primary",
  size = "md",
  className,
  children,
}: LinkButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...props
}: NativeButtonProps) {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
