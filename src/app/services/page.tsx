import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { StatsRibbon } from "@/components/sections/StatsRibbon";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { services, categoryLabel } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end Chartered Accountancy services — company registration, GST, audit, ITR filing, MSME, Startup India, ROC compliance, and notice handling.",
  alternates: { canonical: "/services" },
};

const stats = [
  { label: "On-Time Filing Rate", val: "99.8%" },
  { label: "Clients Across India", val: "500+" },
  { label: "Service Categories", val: "30+" },
];

const categoryOrder: (keyof typeof categoryLabel)[] = [
  "start-business",
  "filing",
  "audit",
  "registration",
  "advisory",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Master"
        align="center"
        title={
          <>
            Comprehensive Financial{" "}
            <span className="text-gold italic font-medium">Expertise</span>
          </>
        }
        description="From your first incorporation to your hundredth ROC filing — every compliance, registration, and advisory need under one roof, owned by senior Chartered Accountants."
      />

      <div className="pb-24 md:pb-32">
        {categoryOrder.map((cat) => {
          const items = services.filter((s) => s.category === cat);
          if (!items.length) return null;
          return (
            <section key={cat} className="pt-16 md:pt-20">
              <Container>
                <FadeIn className="flex items-end justify-between gap-6 mb-10">
                  <div className="space-y-4">
                    <GoldDivider />
                    <h2 className="font-display text-3xl md:text-4xl text-navy font-bold">
                      {categoryLabel[cat]}
                    </h2>
                  </div>
                </FadeIn>
                <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((s) => (
                    <StaggerItem key={`${cat}-${s.title}`}>
                      <ServiceCard {...s} />
                    </StaggerItem>
                  ))}
                </Stagger>
              </Container>
            </section>
          );
        })}
      </div>

      <StatsRibbon
        stats={stats}
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
      />

      <CTASection
        title={
          <>
            Not Sure Where to{" "}
            <span className="text-gold italic font-medium">Start</span>?
          </>
        }
        description="Book a free 30-minute consultation with a senior partner — we'll map exactly what your business needs next."
        ctaLabel="Book Free Consultation"
        ctaHref="/contact"
      />
    </>
  );
}
