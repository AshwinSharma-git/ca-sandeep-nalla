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
import { BrandDivider } from "@/components/ui/BrandDivider";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export const metadata: Metadata = {
  title: "Income Tax Returns",
  description:
    "Navigating Income Tax Returns: Your Comprehensive Guide. According to the Income Tax Act, everyone in India, whether resident or nonresident, has to file income tax returns.",
  alternates: { canonical: "/services/income-tax" },
};

type Feature = { icon: LucideIcon; title: string; desc: string };

const taxpayerCategories: Feature[] = [
  {
    icon: FileText,
    title: "ITR-1",
    desc: "Individuals (residents) having income from salary, one house property, other sources, agricultural income less than Rs 5,000 and with a total income of up to Rs 50 lakh.",
  },
  {
    icon: Calculator,
    title: "ITR-2",
    desc: "Individuals/HUFs not having any business or profession under any proprietorship, more than one house property.",
  },
  {
    icon: TrendingUp,
    title: "ITR-3",
    desc: "Individuals/HUFs having income from a proprietary business or profession, income of a person as a partner in a firm.",
  },
  {
    icon: ShieldCheck,
    title: "ITR-4",
    desc: "Individuals/HUFs having presumptive income from business or profession, one house property.",
  },
  {
    icon: Banknote,
    title: "ITR-5",
    desc: "Partnership firms or LLPs.",
  },
  {
    icon: ScrollText,
    title: "ITR-6 & ITR-7",
    desc: "ITR-6 is for Companies. ITR-7 is for Trusts and similar entities.",
  },
];

const categories = [
  "Individuals",
  "Hindu Undivided Family (HUF)",
  "Firms",
  "Companies",
  "Association of Persons (AOP)",
  "Body of Individuals (BOI)",
  "Local Authority",
  "Artificial Judicial Person",
];

export default function IncomeTaxPage() {
  return (
    <>
      <PageHero
        eyebrow="Return Filing"
        title={
          <>
            Income Tax{" "}
            <span className="text-lime italic font-medium">Returns</span>
          </>
        }
        description="Navigating Income Tax Returns: Your Comprehensive Guide. According to the Income Tax Act, everyone in India, whether resident or nonresident, has to file income tax returns. Currently, tax is payable if the income exceeds Rs 2.5 lakh in a financial year."
      />

      <section className="py-20 md:py-24 bg-white">
        <Container className="max-w-5xl">
          <BrandDivider />
          <h2 className="font-display text-3xl md:text-4xl text-ink font-bold leading-tight mt-6">
            Taxpayer Categories
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            The Income Tax Act has classified taxpayers into various categories. Different tax rules apply to different types of taxpayers. Each of these taxpayers is taxed differently under the Indian income tax laws. While firms and Indian companies have a fixed rate of tax calculated on taxable income, the individual, HUF, AOP and BOI taxpayers are taxed based on the income slab they fall under.
          </p>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {categories.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 p-4 bg-pearl rounded-xl border border-lime/10"
              >
                <ShieldCheck
                  className="w-5 h-5 text-lime shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm text-ink font-medium">{c}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-pearl">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <BrandDivider align="center" />
            <h2 className="font-display text-4xl text-ink font-bold md:text-5xl">
              Income Tax Return Forms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A new tax regime was introduced with lower tax rates and limited deductions/exemptions for Individuals and HUFs. Choose the right form for your situation.
            </p>
          </div>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {taxpayerCategories.map((f) => (
              <StaggerItem key={f.title}>
                <article className="bg-white p-10 rounded-2xl border border-lime/10 shadow-lg h-full hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-ink flex items-center justify-center text-lime-soft mb-8 shadow-lg">
                    <f.icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl text-ink font-bold mb-4">
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

      <CTASection
        title={
          <>
            Embracing the Income{" "}
            <span className="text-lime italic font-medium">Tax Returns</span>
          </>
        }
        description="Take the First Step Toward Growth and Stability with AXIAFIN."
        ctaLabel="Contact Now"
      />
    </>
  );
}
