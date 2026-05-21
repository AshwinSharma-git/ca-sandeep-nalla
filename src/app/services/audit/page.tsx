import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Receipt,
  ClipboardList,
  TrendingUp,
  Factory,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { BrandDivider } from "@/components/ui/BrandDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Audit & Assurance",
  description:
    "Statutory Audit, Income Tax Audit, GST Audit, Internal Audit, Revenue Audit, and Stock Audit services in Hyderabad by AXIAFIN — each delivered as a dedicated engagement.",
  alternates: { canonical: "/services/audit" },
};

type AuditCard = {
  href: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  desc: string;
  image: string;
};

const auditCards: AuditCard[] = [
  {
    href: "/services/statutory-audit",
    icon: ShieldCheck,
    eyebrow: "Companies Act 2013",
    title: "Statutory Audit",
    desc: "A legally mandated review of a company's financial statements under the Companies Act, 2013 — Sections 139 to 147. Ensures a true and fair view of your financial position.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1600",
  },
  {
    href: "/services/income-tax-audit",
    icon: FileText,
    eyebrow: "Section 44AB",
    title: "Income Tax Audit",
    desc: "Detailed examination of books, records, and financial statements under the Income Tax Act, 1961. Mandatory if turnover exceeds ₹1 crore (₹10 crore with ≤5% cash) or professional receipts exceed ₹50 lakh.",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&q=80&w=1600",
  },
  {
    href: "/services/gst-audit",
    icon: Receipt,
    eyebrow: "GSTR-9 & GSTR-9C",
    title: "GST Audit",
    desc: "Comprehensive examination of financial records to verify GST return accuracy. GSTR-9C reconciliation applies to all registered persons with aggregate turnover exceeding ₹5 crore.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600",
  },
  {
    href: "/services/internal-audit",
    icon: ClipboardList,
    eyebrow: "Governance & Controls",
    title: "Internal Audit",
    desc: "Independent and objective evaluation of internal controls, compliance systems, and operational processes. Strengthens internal systems, mitigates risks, and promotes accountability.",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=1600",
  },
  {
    href: "/services/revenue-audit",
    icon: TrendingUp,
    eyebrow: "Revenue Recognition",
    title: "Revenue Audit",
    desc: "Critical process to ensure accuracy, validity, and reliability of financial statements — particularly in revenue recognition. Tests occurrence, completeness, accuracy, and cut-off assertions.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1600",
  },
  {
    href: "/services/stock-audit",
    icon: Factory,
    eyebrow: "Inventory Verification",
    title: "Stock Audit",
    desc: "Inventory audit ensuring accuracy of physical goods against stock register. Vital for transparency, compliance, and efficient inventory management — across retailers, manufacturers, and warehouses.",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=1600",
  },
];

export default function AuditOverviewPage() {
  return (
    <>
      <PageHero
        variant="dark"
        align="center"
        eyebrow="Stewardship Excellence"
        title={
          <>
            Audit &{" "}
            <span className="text-lime italic font-medium">Assurance</span>
          </>
        }
        description="Statutory, Income Tax, GST, Internal, Revenue, and Stock Audit services. Nurturing Financial Integrity Through Expert Audits by AXIAFIN — six dedicated practice areas, each led by senior Chartered Accountants."
        bgImage="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=2070"
      />

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <FadeIn className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <Eyebrow>Our Audit & Assurance Practice</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl text-ink font-bold">
              Six Specialised Audit Services
            </h2>
            <BrandDivider align="center" />
            <p className="text-gray-600 leading-relaxed">
              There are many types of audits conducted under various laws. At
              AXIAFIN, we deliver absolute transparency and clarity to
              stakeholders through meticulous statutory, internal, and
              forensic auditing processes — combining accuracy, integrity, and
              transparency.
            </p>
          </FadeIn>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditCards.map((card) => (
              <StaggerItem key={card.title}>
                <Link
                  href={card.href}
                  className="group block h-full bg-pearl rounded-3xl border border-lime/10 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent"
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur">
                      <card.icon
                        className="w-4 h-4 text-lime"
                        aria-hidden="true"
                      />
                      <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-ink">
                        {card.eyebrow}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl text-ink font-bold mb-3 group-hover:text-lime transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">
                      {card.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-ink group-hover:text-lime transition-colors">
                      Learn More
                      <ArrowRight
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-mist">
        <Container className="max-w-4xl">
          <FadeIn className="text-center space-y-4">
            <Eyebrow>Our Audit Philosophy</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl text-ink font-bold">
              Why Leading Firms Trust AXIAFIN
            </h2>
            <BrandDivider align="center" />
            <p className="text-gray-600 leading-relaxed">
              Our approach to assurance is built on a
              &ldquo;Double-Verification&rdquo; model, ensuring that every
              financial statement we sign off on is a beacon of accuracy. We
              utilize advanced AI tools to parse large data sets, identifying
              anomalies that traditional methods might miss. Our team of
              chartered accountants in Hyderabad ensures that your business
              fully complies with all statutory audit provisions and reporting
              standards.
            </p>
          </FadeIn>
        </Container>
      </section>

      <CTASection
        title={
          <>
            Ensure Transparency with{" "}
            <span className="text-lime italic font-medium">Expert Audits</span>
          </>
        }
        description="Take the first step toward financial accuracy and legal compliance with AXIAFIN, your trusted partner for audit services in Hyderabad."
        ctaLabel="Contact Now"
      />
    </>
  );
}
