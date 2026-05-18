import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { processSteps } from "@/lib/process-steps";

export function Process() {
  return (
    <section className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gold/10 rounded-full blur-[160px] -mr-64 -mt-64"
      />
      <Container className="relative z-10">
        <FadeIn className="mb-16">
          <SectionHeading
            eyebrow="How We Work"
            title={
              <span className="text-white">
                A Process Built for{" "}
                <span className="text-gold italic font-medium">
                  Clarity & Trust
                </span>
              </span>
            }
            description={
              <span className="text-gray-400">
                Four predictable steps from first call to long-term
                stewardship — you always know where things stand.
              </span>
            }
            align="center"
          />
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.map((step) => (
            <StaggerItem key={step.step}>
              <article className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-gold/30 transition-all duration-300">
                <p className="font-display text-5xl text-gold-light font-bold leading-none mb-6">
                  {step.step}
                </p>
                <h3 className="font-display text-xl text-white font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
