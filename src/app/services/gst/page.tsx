import type { Metadata } from "next";
import Image from "next/image";
import {
  Receipt,
  FileText,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { Button, LinkButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export const metadata: Metadata = {
  title: "GST Registration & Compliance",
  description:
    "GST registration, periodic filing, ITC optimization, notice response, and export refund services for businesses across India.",
  alternates: { canonical: "/services/gst" },
};

type GstService = { icon: LucideIcon; title: string; desc: string };

const gstServices: GstService[] = [
  {
    icon: Receipt,
    title: "GST Registration",
    desc: "Complete setup for regular, composition, and SEZ entities within 48 hours.",
  },
  {
    icon: FileText,
    title: "Periodic Filing",
    desc: "Automated GSTR-1, 3B, and annual GSTR-9 filings with zero error margins.",
  },
  {
    icon: AlertTriangle,
    title: "Notice Response",
    desc: "Expert legal representation for ASMT-10 notices and departmental audits.",
  },
  {
    icon: ShieldCheck,
    title: "Tax Optimization",
    desc: "Strategic advisory on Input Tax Credit (ITC) maximization and claim recovery.",
  },
  {
    icon: CheckCircle2,
    title: "GST Reconciliation",
    desc: "Comprehensive matching of books with GSTR-2A/2B to prevent ITC loss.",
  },
  {
    icon: Receipt,
    title: "Export Refunds",
    desc: "Fast-track processing of GST refunds on exports under LUT or with payment.",
  },
];

export default function GSTPage() {
  return (
    <>
      <section className="pt-32 md:pt-36 pb-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 border-l-2 border-gold bg-gold/5">
                <Eyebrow>Taxation Excellence</Eyebrow>
              </div>
              <GoldDivider />
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-navy font-bold leading-[1.05] text-balance">
                GST Governance <br />
                <span className="text-gold italic font-medium">
                  & Compliance
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Navigating the complexities of the Goods and Services Tax regime
                with institutional-grade precision and strategic planning.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <LinkButton
                  href="/contact"
                  size="lg"
                  className="uppercase tracking-widest text-xs"
                >
                  Apply for GST
                </LinkButton>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="uppercase tracking-widest text-xs"
                >
                  GST Refund Help
                </Button>
              </div>
            </div>
            <div className="aspect-video bg-navy rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=2626"
                alt=""
                aria-hidden="true"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-40 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Receipt
                  className="w-24 h-24 text-gold/40"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gstServices.map((s) => (
              <StaggerItem key={s.title}>
                <article className="group bg-white p-10 rounded-2xl border border-gold/10 hover:shadow-2xl transition-all h-full flex flex-col">
                  <div className="w-14 h-14 bg-ivory rounded-xl flex items-center justify-center text-navy mb-8 group-hover:bg-navy group-hover:text-gold transition-all">
                    <s.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl text-navy font-bold mb-4">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {s.desc}
                  </p>
                  <button className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest self-start">
                    Learn More
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection
        title="Facing a GST Issue?"
        description="Our experts specialize in resolving complex GST litigations and pending refund claims."
        ctaLabel="Get Priority Legal Help"
      />
    </>
  );
}
