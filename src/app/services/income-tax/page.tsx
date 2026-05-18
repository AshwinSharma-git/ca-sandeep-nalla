import type { Metadata } from "next";
import {
  FileText,
  Calculator,
  TrendingUp,
  ShieldCheck,
  Banknote,
  ScrollText,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export const metadata: Metadata = {
  title: "Income Tax Filing",
  description:
    "Salaried, HNI, and corporate income tax return filing, TDS, advance tax planning, and CBDT-aligned compliance — managed end-to-end by senior CAs.",
  alternates: { canonical: "/services/income-tax" },
};

type Feature = { icon: LucideIcon; title: string; desc: string };

const features: Feature[] = [
  {
    icon: FileText,
    title: "ITR Filing — All Categories",
    desc: "ITR-1 through ITR-7 across salaried individuals, HUFs, partnerships, and corporates — accurate, on-time, and audit-ready.",
  },
  {
    icon: Calculator,
    title: "Advance Tax Planning",
    desc: "Quarterly advance tax computations that protect cash flow while staying ahead of Section 234 interest exposure.",
  },
  {
    icon: TrendingUp,
    title: "Capital Gains Optimization",
    desc: "Strategic structuring of equity, property, and crypto disposals to legally minimize LTCG and STCG impact.",
  },
  {
    icon: ShieldCheck,
    title: "Scrutiny & Assessment Defense",
    desc: "Senior-partner representation for Section 143(2) scrutiny, faceless assessments, and CIT(A) appeals.",
  },
  {
    icon: Banknote,
    title: "TDS / TCS Compliance",
    desc: "Monthly deduction, deposit, and quarterly return filing — Form 24Q, 26Q, 27Q and reconciliation against 26AS.",
  },
  {
    icon: ScrollText,
    title: "NRI & International Taxation",
    desc: "DTAA-aligned planning, foreign asset disclosure (Schedule FA), and repatriation strategy for global clients.",
  },
];

const checklist = [
  "PAN, Aadhaar, and Form 16 / 16A",
  "Bank statements and investment proofs",
  "Capital gains statements from brokers",
  "Rental income and property documents",
  "Foreign income and remittance records",
];

export default function IncomeTaxPage() {
  return (
    <>
      <PageHero
        eyebrow="CBDT Compliance"
        title={
          <>
            Income Tax{" "}
            <span className="text-gold italic font-medium">
              Filing & Planning
            </span>
          </>
        }
        description="From salaried professionals to multinational corporates — our partners handle every return with the precision your wealth deserves."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <GoldDivider align="center" />
            <h2 className="font-display text-4xl text-navy font-bold md:text-5xl">
              Comprehensive Tax Stewardship
            </h2>
          </div>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <article className="bg-white p-10 rounded-2xl border border-gold/10 shadow-lg h-full hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center text-gold-light mb-8 shadow-lg">
                    <f.icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl text-navy font-bold mb-4">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {f.desc}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-ivory rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-16 border border-gold/10">
            <div className="space-y-6">
              <GoldDivider />
              <h2 className="font-display text-3xl md:text-4xl text-navy font-bold leading-tight">
                Filing Checklist
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Keep these documents ready and our team will handle the rest —
                from computation to e-verification with the Income Tax
                Department.
              </p>
            </div>
            <ul className="space-y-5">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gold/10 shadow-sm"
                >
                  <ShieldCheck
                    className="w-5 h-5 text-gold shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-navy font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CTASection
        title={
          <>
            File Your Return with{" "}
            <span className="text-gold italic font-medium">Confidence</span>
          </>
        }
        description="Book a 30-minute consultation with a senior partner this week — no obligation."
        ctaLabel="Schedule Consultation"
      />
    </>
  );
}
