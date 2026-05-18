import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AboutSummary } from "@/components/sections/AboutSummary";
import { Industries } from "@/components/sections/Industries";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { homeFaqs } from "@/lib/faqs";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <WhyChooseUs />
      <AboutSummary />
      <FeaturedServices />
      <Industries />
      <Process />
      <Testimonials />
      <FAQ items={homeFaqs} />
      <CTASection
        title={
          <>
            Let&apos;s Build Your Business with{" "}
            <span className="text-gold italic font-medium">
              Complete Financial Confidence
            </span>
          </>
        }
        description="Whether you're starting a new business, filing taxes, handling compliance, or scaling operations — our expert team is here to guide you every step of the way."
        ctaLabel="Book Free Consultation"
        ctaHref="/contact"
      />
    </div>
  );
}
