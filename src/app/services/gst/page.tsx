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
import { BrandDivider } from "@/components/ui/BrandDivider";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export const metadata: Metadata = {
  title: "GST Registration & Returns",
  description:
    "Goods and Services Tax (GST) revolutionized India's taxation system upon its introduction in July 2017. GST registration, returns, and compliance services in Hyderabad.",
  alternates: { canonical: "/services/gst" },
};

type GstService = { icon: LucideIcon; title: string; desc: string };

const gstServices: GstService[] = [
  {
    icon: Receipt,
    title: "Regular GST Registration",
    desc: "Mandatory for businesses with taxable supplies exceeding ₹40 lakhs (₹20 lakhs in special category states).",
  },
  {
    icon: FileText,
    title: "Casual Registration",
    desc: "For businesses operating periodically or seasonally, subject to a total annual income not exceeding ₹2 million.",
  },
  {
    icon: AlertTriangle,
    title: "Non-Resident Registration",
    desc: "Designed for Non-Resident Indians engaging in seasonal supply of goods or services, with an annual revenue below ₹20 lakhs.",
  },
  {
    icon: ShieldCheck,
    title: "Composite Registration for Goods",
    desc: "Applicable to businesses with annual revenue up to ₹1.5 crore, streamlining tax compliance under the Composition Scheme.",
  },
  {
    icon: CheckCircle2,
    title: "Composition Scheme for Service Providers",
    desc: "Offers a nominal tax rate option for service providers with an aggregate annual turnover up to ₹50 lakh.",
  },
  {
    icon: Receipt,
    title: "GSTR-3B, GSTR-1, CMP-08",
    desc: "Monthly/quarterly GST returns including summary returns, outward supplies, and Composition Scheme filings.",
  },
];

const gstReturnsTable = [
  { form: "GSTR-1", filer: "Registered Person", desc: "Monthly statement of Outward Supplies", due: "11th of following month" },
  { form: "GSTR-3B", filer: "Registered Person", desc: "Monthly summary return to declare GST liability and pay off such liability", due: "20th of following month" },
  { form: "GSTR-4", filer: "Composition Scheme", desc: "Yearly return for taxpayers under composition scheme", due: "30th April of next FY" },
  { form: "GSTR-5", filer: "Non-Resident Taxable Person", desc: "Return for NRTP not availing ITC on local purchases", due: "20th of following month or 7 days after expiry" },
  { form: "GSTR-6", filer: "Input Service Distributor", desc: "Monthly return for ISD for distribution of credit", due: "13th of following month" },
  { form: "GSTR-7", filer: "TDS Deductor", desc: "Monthly TDS return u/s 51 of CGST Act 2017", due: "10th of next month" },
  { form: "GSTR-8", filer: "E-Commerce Operator", desc: "Monthly return with details of supplies and TCS collected", due: "10th of following month" },
  { form: "GSTR-9", filer: "Registered Taxpayer", desc: "Annual return - purchases, sales, ITC or refund claimed", due: "31st December of subsequent FY" },
  { form: "GSTR-9C", filer: "Regular Taxpayer (>₹2 cr turnover)", desc: "Additional annual return submitted along with GSTR-9", due: "31st December of subsequent year" },
  { form: "GSTR-10", filer: "Cancelled/Surrendered Reg.", desc: "Final Return after registration cancellation", due: "3 months from cancellation" },
  { form: "GSTR-11", filer: "UIN Holder", desc: "Details of inward supply for UIN holders claiming refund", due: "28th of following month" },
];

export default function GSTPage() {
  return (
    <>
      <section className="pt-32 md:pt-36 pb-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 border-l-2 border-lime bg-lime/5">
                <Eyebrow>Your Gateway to Tax Compliance</Eyebrow>
              </div>
              <BrandDivider />
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink font-bold leading-[1.05] text-balance">
                GST Registration <br />
                <span className="text-lime italic font-medium">
                  & Returns
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Simplifying Tax Compliance. Goods and Services Tax (GST)
                revolutionized India&apos;s taxation system upon its introduction
                in July 2017. This unified tax regime aimed to streamline tax
                collection processes and enhance efficiency across businesses
                nationwide.
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
            <div className="aspect-video bg-ink rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden">
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
                  className="w-24 h-24 text-lime/40"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-pearl">
        <Container className="max-w-5xl">
          <div className="text-center mb-12 space-y-4">
            <BrandDivider align="center" />
            <h2 className="font-display text-3xl md:text-4xl text-ink font-bold">
              Types of GST Registration
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Penalty for not obtaining GST registration: An offender not paying tax or making short payments (genuine errors) has to pay a penalty of 10% of the tax amount due subject to a minimum of Rs.10,000. The penalty will be 100% of the tax amount due when the offender has deliberately evaded paying taxes.
            </p>
          </div>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gstServices.map((s) => (
              <StaggerItem key={s.title}>
                <article className="group bg-white p-10 rounded-2xl border border-lime/10 hover:shadow-2xl transition-all h-full flex flex-col">
                  <div className="w-14 h-14 bg-pearl rounded-xl flex items-center justify-center text-ink mb-8 group-hover:bg-ink group-hover:text-lime transition-all">
                    <s.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl text-ink font-bold mb-4">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {s.desc}
                  </p>
                  <button className="flex items-center gap-2 text-lime font-bold text-xs uppercase tracking-widest self-start">
                    Learn More
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container className="max-w-6xl">
          <div className="text-center mb-12 space-y-4">
            <BrandDivider align="center" />
            <h2 className="font-display text-3xl md:text-4xl text-ink font-bold">
              GST Returns and Due Dates
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Under the GST Act, every registered person is mandated to file returns within the specified due dates, whether on a monthly or quarterly basis. Failure to file returns within the prescribed timelines attracts late fees and interest as per the provisions of the Act.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-lime/10 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-ink text-lime-soft">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">Form</th>
                  <th className="px-4 py-3 text-left font-bold">Who Files</th>
                  <th className="px-4 py-3 text-left font-bold">Particulars</th>
                  <th className="px-4 py-3 text-left font-bold">Due Date</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {gstReturnsTable.map((row, i) => (
                  <tr
                    key={row.form}
                    className={i % 2 === 0 ? "bg-pearl/40" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-ink">{row.form}</td>
                    <td className="px-4 py-3 text-gray-600">{row.filer}</td>
                    <td className="px-4 py-3 text-gray-600">{row.desc}</td>
                    <td className="px-4 py-3 text-gray-600">{row.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 p-8 bg-pearl rounded-2xl border border-lime/10">
            <h3 className="font-display text-2xl text-ink font-bold mb-4">
              Documents Required for GST Registration
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-lime mt-0.5 shrink-0" />PAN of the Applicant</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-lime mt-0.5 shrink-0" />Aadhaar card, in case of individual</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-lime mt-0.5 shrink-0" />Proof of business registration or Incorporation certificate</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-lime mt-0.5 shrink-0" />Identity and Address proof of Promoters/Partners/Director with Photographs</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-lime mt-0.5 shrink-0" />Address proof of the place of business</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-lime mt-0.5 shrink-0" />Bank Account statement/Cancelled cheque</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-lime mt-0.5 shrink-0" />Digital Signature</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-lime mt-0.5 shrink-0" />Letter of Authorization/Board Resolution for Authorized Signatory</li>
            </ul>
          </div>
        </Container>
      </section>

      <CTASection
        title={
          <>
            Embracing the GST{" "}
            <span className="text-lime italic font-medium">Registration</span>
          </>
        }
        description="Take the First Step Toward Growth and Stability with AXIAFIN."
        ctaLabel="Contact Now"
      />
    </>
  );
}
