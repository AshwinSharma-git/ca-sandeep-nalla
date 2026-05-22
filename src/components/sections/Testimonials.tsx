import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HoverLift } from "@/components/ui/HoverLift";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { testimonials } from "@/lib/services-data";

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 md:mb-20">
          <div className="max-w-xl space-y-4">
            <Eyebrow>Client Feedback</Eyebrow>
            <h2 className="font-display text-4xl text-ink font-bold md:text-5xl">
              Our Clients Feedback
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mt-2">
              We&apos;re here to help! Whether you have questions, feedback, or inquiries, don&apos;t hesitate to reach out.
            </p>
            <p className="text-gray-400 text-xs leading-relaxed mt-1">
              For more reviews check the Google reviews.
            </p>
          </div>
          <div
            className="flex items-center gap-4 px-6 py-3 border border-lime/20 rounded-full bg-lime/5"
            aria-label="Google rating 4.9 out of 5"
          >
            <div className="flex text-lime" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-xl">
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm font-bold text-ink">
              4.9/5 Google Rating
            </span>
          </div>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <HoverLift>
                <figure className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-pearl shadow-lg border-b-4 border-lime/30 hover:border-lime transition-all h-full flex flex-col">
                  <blockquote className="text-ink italic text-lg leading-relaxed mb-10 flex-1">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full bg-ink text-lime-soft flex items-center justify-center font-bold text-sm shadow-md"
                      aria-hidden="true"
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-ink">{t.name}</p>
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
