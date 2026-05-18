import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { FadeIn } from "@/components/ui/FadeIn";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { LinkButton } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/site-config";
import type { ServicePage } from "@/lib/service-pages";

type Props = { data: ServicePage };

export function ServiceDetailTemplate({ data }: Props) {
  return (
    <>
      <section className="relative pt-32 md:pt-36 pb-20 bg-off-white overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-gold/10 rounded-full blur-[120px]"
        />
        <Container className="relative">
          <FadeIn className="max-w-4xl space-y-6">
            <div className="inline-block px-4 py-1 border-l-2 border-gold bg-gold/5">
              <Eyebrow>{data.eyebrow}</Eyebrow>
            </div>
            <GoldDivider />
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-navy font-bold leading-[1.05] text-balance">
              {data.hero.titleLead}{" "}
              <span className="text-gold italic font-medium">
                {data.hero.titleAccent}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              {data.hero.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <LinkButton href="/contact" size="lg" className="group">
                {data.cta.label}
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </LinkButton>
              <a
                href={`tel:${siteConfig.contact.phoneE164}`}
                className="inline-flex items-center gap-3 px-6 py-4 rounded-lg border border-navy/15 text-navy font-semibold hover:bg-navy/5 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container className="max-w-4xl space-y-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-bold leading-tight">
              {data.intro.heading}
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {data.intro.body}
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-ivory">
        <Container>
          <FadeIn className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <Eyebrow>Key Advantages</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-bold">
              Why this structure works
            </h2>
            <GoldDivider align="center" />
          </FadeIn>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.advantages.map((a) => (
              <StaggerItem key={a.title}>
                <article className="h-full bg-white p-8 rounded-2xl border border-gold/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy mb-6">
                    <a.icon className="w-6 h-6 text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl text-navy font-bold mb-3">
                    {a.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {a.desc}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-navy text-white relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-gold/10 rounded-full blur-[160px] -translate-y-1/2"
        />
        <Container className="relative z-10">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <Eyebrow>The Process</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold">
              How we deliver
            </h2>
          </FadeIn>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {data.process.map((step) => (
              <StaggerItem key={step.step}>
                <article className="h-full p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <p className="font-display text-4xl text-gold-light font-bold leading-none mb-5">
                    {step.step}
                  </p>
                  <h3 className="font-display text-lg text-white font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {data.bundle && (
        <section className="py-20 md:py-24 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-ivory rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-16 border border-gold/10">
              <div className="lg:col-span-5 space-y-6">
                <GoldDivider />
                <Eyebrow>Bundled Together</Eyebrow>
                <h2 className="font-display text-3xl md:text-4xl text-navy font-bold leading-tight">
                  {data.bundle.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Everything you need to start operations — handled in one
                  engagement, one timeline, one fee.
                </p>
              </div>
              <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.bundle.items.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gold/10 shadow-sm"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-gold shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-navy font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title={data.cta.headline}
        description={data.cta.sub}
        ctaLabel={data.cta.label}
        ctaHref="/contact"
      />
    </>
  );
}
