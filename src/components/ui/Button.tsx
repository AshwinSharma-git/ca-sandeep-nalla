import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "lime" | "ghost" | "outline-light";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2.5 font-semibold rounded-xl transition-[transform,box-shadow,background-color,color] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-indigo disabled:opacity-60 disabled:cursor-not-allowed will-change-transform";

const variants: Record<Variant, string> = {
  primary:
    "bg-indigo text-white shadow-[0_10px_30px_-12px_rgba(61,67,201,0.55)] hover:bg-indigo-deep hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(61,67,201,0.6)] active:translate-y-0",
  secondary:
    "bg-transparent border border-ink/15 text-ink hover:border-indigo hover:text-indigo hover:bg-indigo-soft",
  lime:
    "bg-lime text-ink shadow-[0_10px_28px_-12px_rgba(122,194,60,0.55)] hover:bg-lime-deep hover:text-white hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(122,194,60,0.55)]",
  ghost:
    "bg-transparent text-ink hover:text-indigo",
  "outline-light":
    "border border-ink/15 text-ink hover:bg-ink/5 hover:border-ink/30",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-4 text-[15px]",
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
  prefetch?: boolean;
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
  prefetch,
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
    <Link href={href} className={classes} prefetch={prefetch}>
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
