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
  ctaLabel = "Book Your Complimentary Audit",
  ctaHref = "/contact",
}: Props) {
  return (
    <section className="py-24">
      <Container>
        <div className="relative bg-navy rounded-[2rem] md:rounded-[3rem] p-12 md:p-20 lg:p-24 overflow-hidden text-center shadow-2xl">
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px] -mr-48 -mt-48"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -ml-48 -mb-48"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight text-balance">
              {title}
            </h2>
            {description && (
              <p className="text-lg md:text-xl text-gray-400">{description}</p>
            )}
            <div className="flex justify-center">
              <LinkButton href={ctaHref} variant="gold" size="lg">
                {ctaLabel}
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
