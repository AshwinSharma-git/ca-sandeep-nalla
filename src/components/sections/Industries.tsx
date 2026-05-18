import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { industries } from "@/lib/industries";

export function Industries() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <FadeIn className="mb-16">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Specialised Practices for Every Client Type"
            description="Tailored engagement models for startups, SMEs, professionals, and individuals — same partner-led quality."
            align="center"
          />
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <StaggerItem key={ind.title}>
              <article className="group h-full bg-off-white p-8 rounded-2xl border border-gold/10 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center text-gold-light mb-6 shadow-lg group-hover:scale-105 transition-transform">
                  <ind.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl text-navy font-bold mb-3">
                  {ind.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                  {ind.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {ind.points.map((p) => (
                    <li
                      key={p}
                      className="text-xs text-navy/80 flex items-start gap-2"
                    >
                      <span
                        aria-hidden="true"
                        className="text-gold mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-navy group-hover:text-gold transition-colors">
                  Talk to a CA
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
