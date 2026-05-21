import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { BusinessVsCompliance } from "@/components/sections/BusinessVsCompliance";
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
      <TrustStrip />
      <WhyChooseUs />
      <BusinessVsCompliance />
      <AboutSummary />
      <FeaturedServices />
      <Industries />
      <Process />
      <Testimonials />
      <FAQ items={homeFaqs} />
      <CTASection
        title={
          <>
            We Help Businesses to Create{" "}
            <span className="text-gradient-brand italic font-medium">
              Big Ideas
            </span>
          </>
        }
        description="We're here to help! Whether you have questions, feedback, or inquiries, don't hesitate to reach out."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </div>
  );
}
