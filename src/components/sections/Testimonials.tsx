import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HoverLift } from "@/components/ui/HoverLift";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { testimonials } from "@/lib/services-data";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 md:mb-20">
          <div className="max-w-xl space-y-4">
            <Eyebrow>Client Feedback</Eyebrow>
            <h2 className="font-display text-4xl text-navy font-bold md:text-5xl">
              Voices of Confidence
            </h2>
          </div>
          <div
            className="flex items-center gap-4 px-6 py-3 border border-gold/20 rounded-full bg-gold/5"
            aria-label="Google rating 4.9 out of 5"
          >
            <div className="flex text-gold" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-xl">
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm font-bold text-navy">
              4.9/5 Google Rating
            </span>
          </div>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <HoverLift>
                <figure className="p-10 rounded-2xl bg-ivory shadow-lg border-b-4 border-gold/30 hover:border-gold transition-all h-full flex flex-col">
                  <blockquote className="text-navy italic text-lg leading-relaxed mb-10 flex-1">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full bg-navy text-gold-light flex items-center justify-center font-bold text-sm shadow-md"
                      aria-hidden="true"
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy">{t.name}</p>
                      <p className="text-xs text-gray-500 font-medium">
                        {t.role}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
