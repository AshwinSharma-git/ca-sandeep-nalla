import type { Metadata } from "next";
import { FileCheck, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Audit & Assurance",
  description:
    "Statutory, tax, internal, and forensic audit services delivering absolute transparency for stakeholders. Trusted by leading enterprises across India.",
  alternates: { canonical: "/services/audit" },
};

const auditTypes = [
  {
    title: "Statutory Audits",
    desc: "Ensuring your corporate filings meet every regulatory standard with scientific precision.",
  },
  {
    title: "Tax Audits",
    desc: "Rigorous assessment of tax liabilities to ensure 100% compliance with Section 44AB.",
  },
  {
    title: "Forensic Audits",
    desc: "Specialized investigations to detect and prevent financial irregularities or fraud.",
  },
];

const industries = ["Manufacturing", "Services", "Technology", "Finance"];

export default function AuditPage() {
  return (
    <>
      <PageHero
        variant="dark"
        align="center"
        eyebrow="Stewardship Excellence"
        title={
          <>
            Audit &{" "}
            <span className="text-gold italic font-medium">Assurance</span>
          </>
        }
        description="Delivering absolute transparency and clarity to stakeholders through meticulous statutory, internal, and forensic auditing processes."
        bgImage="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=2070"
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <FadeIn className="glass-card p-8 md:p-10 rounded-3xl border border-gold/10 shadow-xl">
                <h2 className="font-display text-3xl text-navy font-bold mb-8">
                  Tailored Audit Strategies
                </h2>
                <ul className="space-y-8">
                  {auditTypes.map((item) => (
                    <li key={item.title} className="flex gap-6">
                      <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center shrink-0 shadow-lg">
                        <CheckCircle2
                          className="w-6 h-6 text-gold"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-navy font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn className="p-8 md:p-10 bg-ivory rounded-3xl border border-gold/20 space-y-6">
                <h3 className="font-display text-2xl text-navy font-bold">
                  Why Leading Firms Trust Us
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our approach to assurance is built on a &ldquo;Double-Verification&rdquo;
                  model, ensuring that every financial statement we sign off on
                  is a beacon of accuracy. We utilize advanced AI tools to parse
                  large data sets, identifying anomalies that traditional
                  methods might miss.
                </p>
              </FadeIn>
            </div>

            <div className="space-y-8 lg:sticky lg:top-32">
              <FadeIn
                direction="left"
                className="bg-navy p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16 blur-3xl"
                />
                <h3 className="font-display text-3xl text-gold-light font-bold mb-10">
                  Start Your Audit
                </h3>
                <form className="space-y-6" aria-label="Audit request">
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block"
                    >
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-gold transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="industry"
                      className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block"
                    >
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-gold transition-all"
                    >
                      {industries.map((i) => (
                        <option key={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-5 bg-gold text-navy font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-gold-light transition-all"
                  >
                    Request Service Proposal
                  </button>
                </form>
              </FadeIn>

              <FadeIn
                direction="left"
                delay={0.1}
                className="p-8 md:p-10 border-2 border-gold/10 rounded-3xl flex items-center gap-6 group hover:border-gold transition-all cursor-pointer"
              >
                <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center group-hover:bg-navy transition-all">
                  <FileCheck
                    className="w-8 h-8 text-navy group-hover:text-gold"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="font-display text-xl text-navy font-bold">
                    Download Whitepaper
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                    Audit Standards 2024
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
