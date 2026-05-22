import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { valueProps } from "@/lib/value-props";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-20 bg-mist overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-indigo/[0.04] rounded-full blur-3xl"
      />
      <Container className="relative">
        <FadeIn className="mb-16">
          <SectionHeading
            eyebrow="Why AXIAFIN"
            title={
              <>
                Numbers Don&apos;t{" "}
                <span className="text-gradient-brand italic font-medium">
                  Lie
                </span>
              </>
            }
            description="Through data-driven analysis and comprehensive reporting, we showcase the tangible results and measurable impact of our services."
            align="center"
          />
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          {valueProps.map((vp, idx) => {
            const isFeature = idx === 1;
            return (
              <StaggerItem key={vp.title}>
                <article
                  className={cn(
                    "group relative h-full rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-500 overflow-hidden",
                    isFeature
                      ? "ink-gradient text-white shadow-[0_30px_80px_-30px_rgba(14,16,36,0.5)] hover:-translate-y-2"
                      : "bg-white border border-ink/5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo/20",
                  )}
                >
                  {/* Decorative accent */}
                  <div
                    aria-hidden="true"
                    className={cn(
                      "absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl transition-opacity duration-500",
                      isFeature
                        ? "bg-lime/25 opacity-100"
                        : "bg-indigo/10 opacity-0 group-hover:opacity-100",
                    )}
                  />
                  <div
                    className={cn(
                      "relative w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110",
                      isFeature
                        ? "bg-white/10 border border-white/15 backdrop-blur"
                        : "bg-indigo-soft",
                    )}
                  >
                    <vp.icon
                      className={cn(
                        "w-7 h-7",
                        isFeature ? "text-lime" : "text-indigo",
                      )}
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    className={cn(
                      "relative font-display text-2xl font-bold mb-4",
                      isFeature ? "text-white" : "text-ink",
                    )}
                  >
                    {vp.title}
                  </h3>
                  <p
                    className={cn(
                      "relative mb-8 leading-relaxed",
                      isFeature ? "text-white/70" : "text-slate",
                    )}
                  >
                    {vp.desc}
                  </p>
                  <ul className="relative space-y-3">
                    {vp.bullets.map((b) => (
                      <li
                        key={b}
                        className={cn(
                          "flex items-start gap-3 text-sm",
                          isFeature ? "text-white/90" : "text-ink",
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                            isFeature ? "bg-lime/15" : "bg-lime/15",
                          )}
                        >
                          <Check
                            className={cn(
                              "w-3 h-3",
                              isFeature ? "text-lime" : "text-lime-deep",
                            )}
                          />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
