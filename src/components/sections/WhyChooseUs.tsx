import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { valueProps } from "@/lib/value-props";

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <Container>
        <FadeIn className="mb-16">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Three Promises We Stand Behind"
            description="Every engagement is measured against these three commitments — no exceptions, no excuses."
            align="center"
          />
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {valueProps.map((vp, idx) => (
            <StaggerItem key={vp.title}>
              <article
                className={
                  idx === 1
                    ? "relative bg-navy text-white p-10 rounded-3xl h-full shadow-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                    : "relative bg-white p-10 rounded-3xl h-full shadow-lg border border-gold/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                }
              >
                {idx === 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute -top-20 -right-20 w-56 h-56 bg-gold/20 rounded-full blur-3xl"
                  />
                )}
                <div
                  className={
                    idx === 1
                      ? "relative w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-8"
                      : "relative w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-8"
                  }
                >
                  <vp.icon
                    className={
                      idx === 1
                        ? "w-7 h-7 text-gold-light"
                        : "w-7 h-7 text-gold"
                    }
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className={
                    idx === 1
                      ? "relative font-display text-2xl font-bold mb-4 text-gold-light"
                      : "relative font-display text-2xl font-bold mb-4 text-navy"
                  }
                >
                  {vp.title}
                </h3>
                <p
                  className={
                    idx === 1
                      ? "relative text-gray-300 mb-8 leading-relaxed"
                      : "relative text-gray-600 mb-8 leading-relaxed"
                  }
                >
                  {vp.desc}
                </p>
                <ul className="relative space-y-3">
                  {vp.bullets.map((b) => (
                    <li
                      key={b}
                      className={
                        idx === 1
                          ? "flex items-start gap-3 text-sm text-white/90"
                          : "flex items-start gap-3 text-sm text-navy"
                      }
                    >
                      <Check
                        className={
                          idx === 1
                            ? "w-4 h-4 text-gold-light shrink-0 mt-0.5"
                            : "w-4 h-4 text-gold shrink-0 mt-0.5"
                        }
                        aria-hidden="true"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
