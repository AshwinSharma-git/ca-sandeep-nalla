import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { BrandDivider } from "@/components/ui/BrandDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

type Variant = "light" | "dark";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  variant?: Variant;
  align?: "left" | "center";
  bgImage?: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  variant = "light",
  align = "left",
  bgImage,
  children,
}: Props) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-32 md:pt-36 pb-20",
        isDark ? "bg-ink text-white" : "bg-mist",
      )}
    >
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className={cn(
              "object-cover",
              isDark ? "opacity-10" : "opacity-10 grayscale",
            )}
          />
          {!isDark && (
            <div className="absolute inset-0 bg-gradient-to-tr from-mist via-mist/80 to-transparent" />
          )}
        </div>
      )}
      <Container className="relative z-10">
        <FadeIn
          className={cn(
            "max-w-4xl space-y-6",
            align === "center" && "mx-auto text-center",
          )}
        >
          {eyebrow && (
            <div
              className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full",
                isDark
                  ? "border border-lime/30 bg-lime/10"
                  : "border-l-2 border-lime bg-lime/5 rounded-none px-4 py-1",
              )}
            >
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
          )}
          {align === "left" && !isDark && <BrandDivider />}
          <h1
            className={cn(
              "font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance",
              isDark ? "text-white" : "text-ink",
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "text-lg md:text-xl leading-relaxed max-w-3xl",
                align === "center" && "mx-auto",
                isDark ? "text-gray-400" : "text-gray-600",
              )}
            >
              {description}
            </p>
          )}
          {children}
        </FadeIn>
      </Container>
    </section>
  );
}
