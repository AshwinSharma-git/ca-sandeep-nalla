import type { Metadata } from "next";
import Image from "next/image";
import {
  Shield,
  BookOpen,
  Target,
  Heart,
  Building2,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BrandDivider } from "@/components/ui/BrandDivider";
import { FadeIn } from "@/components/ui/FadeIn";
import { LinkButton } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "AXIAFIN — a Hyderabad Chartered Accountancy firm built on integrity, expertise, and stewardship. Empowering your financial compliance since inception.",
  alternates: { canonical: "/about" },
};

type Pillar = { icon: LucideIcon; title: string; desc: string };

const pillars: Pillar[] = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "Upholding the highest moral and professional standards in every engagement we accept.",
  },
  {
    icon: BookOpen,
    title: "Expertise",
    desc: "Continuous pursuit of knowledge — we stay ahead of every CBDT, CBIC, and MCA notification.",
  },
  {
    icon: Target,
    title: "Precision",
    desc: "Scientific accuracy in modelling, filings, and regulatory compliance. Double-verified, always.",
  },
  {
    icon: Heart,
    title: "Dedication",
    desc: "Long-term stewardship — we stay with our clients across funding rounds, audits, and exits.",
  },
];

const principles = [
  "Numbers Don't Lie",
  "Committed to Security",
  "We Help Businesses Create Big Ideas",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 md:pt-36 pb-20 bg-mist overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-lime/10 rounded-full blur-[120px]"
        />
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="space-y-8" direction="right">
              <div className="inline-block px-4 py-1 border-l-2 border-lime bg-lime/5">
                <Eyebrow>About the Firm</Eyebrow>
              </div>
              <BrandDivider />
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink font-bold leading-[1.05] text-balance">
                Empowering Your{" "}
                <span className="text-lime italic font-medium">
                  Financial Compliance
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                At AXIAFIN, we are dedicated to providing
                unparalleled financial services tailored to meet the diverse
                needs of our clients. From first-time founders to established
                enterprises, our team delivers precision, speed, and complete
                financial stewardship.
              </p>
              <div className="flex flex-wrap gap-4">
                <LinkButton href="/services" size="lg">
                  Explore Services
                </LinkButton>
                <LinkButton href="/contact" variant="outline-light" size="lg">
                  Talk to a Partner
                </LinkButton>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.1} className="relative">
              <div className="aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1740"
                  alt="The firm's senior partners in a strategy meeting"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  className="object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-10 -left-4 sm:-left-10 bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-lime/10 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-lime/10 rounded-xl">
                    <Building2
                      className="w-8 h-8 text-lime"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-ink">
                      2 Offices · Hyderabad
                    </p>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                      Kothapet · HITEC City
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn className="space-y-6">
              <Eyebrow>Our Mission</Eyebrow>
              <h2 className="font-display text-3xl md:text-5xl text-ink font-bold leading-tight text-balance">
                Providing the best value to your time and money.
              </h2>
              <BrandDivider />
              <p className="text-lg text-gray-600 leading-relaxed">
                Every engagement we accept is grounded in three commitments:
                maximum lawful tax savings, unparalleled processing speed, and
                accurate compliance — verified at every step.
              </p>
              <ul className="space-y-4 pt-2">
                {principles.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 text-ink font-semibold"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-lime shrink-0"
                      aria-hidden="true"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1} direction="left" className="space-y-6">
              <div className="bg-pearl p-10 rounded-3xl border border-lime/10 space-y-4">
                <Eyebrow>Personalised Service</Eyebrow>
                <p className="text-gray-700 leading-relaxed">
                  Direct access to senior CAs. A dedicated associate on every
                  account. Quarterly strategy reviews — not just transactional
                  filings. We&apos;re built for clients who want a long-term
                  financial partner, not a vendor.
                </p>
              </div>
              <div className="bg-ink text-white p-10 rounded-3xl relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute -top-20 -right-20 w-56 h-56 bg-lime/15 rounded-full blur-3xl"
                />
                <Eyebrow tone="lime">Reach Us</Eyebrow>
                <p className="relative mt-3 text-gray-300 leading-relaxed">
                  Call us at{" "}
                  <a
                    href={`tel:${siteConfig.contact.phoneE164}`}
                    className="text-lime-soft font-bold hover:text-lime"
                  >
                    {siteConfig.contact.phone}
                  </a>{" "}
                  or write to{" "}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-lime-soft font-bold hover:text-lime"
                  >
                    {siteConfig.contact.email}
                  </a>
                  .{" "}
                  <span className="block mt-2 text-sm">
                    {siteConfig.contact.workingHours}
                  </span>
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-pearl">
        <Container>
          <FadeIn className="text-center mb-16 md:mb-20 space-y-4">
            <Eyebrow>Our Values</Eyebrow>
            <h2 className="font-display text-4xl text-ink font-bold md:text-5xl">
              The Pillars of Our Stewardship
            </h2>
            <BrandDivider width="lg" align="center" />
          </FadeIn>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <article className="bg-white p-10 rounded-2xl border border-lime/10 text-center space-y-6 h-full hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-ink rounded-full flex items-center justify-center mx-auto text-lime-soft shadow-xl">
                    <p.icon className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl text-ink font-bold">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-ink py-24 md:py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2069"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <Container className="relative z-10 max-w-4xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight text-balance">
            Led by Partners with{" "}
            <span className="text-lime italic font-medium">
              Decades of Wisdom
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Our leadership team comprises senior Chartered Accountants and
            financial consultants who have navigated some of the most complex
            corporate restructurings in the region.
          </p>
          <LinkButton href="/contact" variant="lime" size="lg" className="uppercase tracking-[0.2em] text-xs">
            Book Appointment
          </LinkButton>
        </Container>
      </section>
    </>
  );
}
