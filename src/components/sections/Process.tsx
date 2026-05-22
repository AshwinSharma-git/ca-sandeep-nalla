import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { processSteps } from "@/lib/process-steps";

export function Process() {
  return (
    <section className="relative ink-gradient text-white py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-60" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-indigo/40 rounded-full blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] bg-lime/15 rounded-full blur-[180px]"
      />

      <Container className="relative z-10">
        <FadeIn className="mb-16">
          <SectionHeading
            eyebrow="How We Work"
            title={
              <span className="text-white">
                Let&apos;s Get Started with{" "}
                <span className="text-gradient-brand italic font-medium">
                  New Project
                </span>
              </span>
            }
            description={
              <span className="text-white/60">
                Four predictable steps from first call to long-term
                stewardship — you always know where things stand.
              </span>
            }
            align="center"
          />
        </FadeIn>

        <Stagger className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Connector line on lg */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[3.25rem] left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
          {processSteps.map((step, i) => (
            <StaggerItem key={step.step}>
              <article className="group relative h-full p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] hover:border-lime/40 transition-all duration-500">
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display text-5xl text-gradient-brand font-bold leading-none">
                    {step.step}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"
                  />
                </div>
                <h3 className="font-display text-xl text-white font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {step.desc}
                </p>
                {i < processSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden lg:block absolute top-12 -right-3 w-6 h-6 rounded-full bg-ink border-2 border-lime/40 group-hover:border-lime transition-colors"
                  />
                )}
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
