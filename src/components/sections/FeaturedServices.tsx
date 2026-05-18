import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { services } from "@/lib/services-data";
import { LinkButton } from "@/components/ui/Button";

const featuredTitles = new Set([
  "Private Limited Company",
  "GST Registration",
  "Audit & Assurance",
  "Income Tax Filing",
  "ROC Filings",
  "MSME / Udyam",
]);

export function FeaturedServices() {
  const featured = services.filter((s) => featuredTitles.has(s.title));

  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <FadeIn className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16">
          <SectionHeading
            eyebrow="Featured Services"
            title="From Incorporation to Audit — All Under One Roof"
            description="The most-requested services from our Hyderabad practice — each delivered by a senior CA."
          />
          <LinkButton href="/services" variant="outline-light">
            View All Services
          </LinkButton>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((s) => (
            <StaggerItem key={s.title}>
              <ServiceCard {...s} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
