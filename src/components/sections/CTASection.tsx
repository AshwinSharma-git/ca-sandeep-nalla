import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CTASection({
  title,
  description,
  ctaLabel = "Book Consultation",
  ctaHref = "/contact",
}: Props) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="relative ink-gradient rounded-[2rem] md:rounded-[3rem] p-12 md:p-20 lg:p-24 overflow-hidden text-center shadow-[0_40px_120px_-30px_rgba(14,16,36,0.5)]">
          <div className="absolute inset-0 grid-texture opacity-40" aria-hidden="true" />
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-indigo/40 rounded-full blur-[120px] -mr-40 -mt-40"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-lime/20 rounded-full blur-[140px] -ml-40 -mb-40"
          />
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[1.05] text-balance">
              {title}
            </h2>
            {description && (
              <p className="text-lg md:text-xl text-white/65">{description}</p>
            )}
            <div className="flex justify-center">
              <LinkButton href={ctaHref} variant="lime" size="lg">
                {ctaLabel}
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
