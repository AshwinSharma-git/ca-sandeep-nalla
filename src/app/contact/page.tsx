import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BrandDivider } from "@/components/ui/BrandDivider";
import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/sections/ContactForm";
import { offices, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach AXIAFIN — offices in Kothapet and HITEC City, Hyderabad. Call 089776 08216 or book an appointment online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 md:pt-36 pb-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-lime/10 rounded-full blur-[120px]"
        />
        <Container className="relative max-w-3xl">
          <div className="inline-block px-4 py-1 mb-6 border-l-2 border-lime bg-lime/5">
            <Eyebrow>Let&apos;s Talk</Eyebrow>
          </div>
          <BrandDivider className="mb-6" />
          <h1 className="font-display text-5xl md:text-6xl text-ink font-bold mb-6 text-balance">
            Connect with Our <br />
            <span className="text-lime italic font-medium">
              Financial Experts
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you&apos;re starting a new business, filing taxes, or
            scaling operations — share a few details and a senior partner will
            respond the same business day.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            <a
              href={`tel:${siteConfig.contact.phoneE164}`}
              className="group p-5 bg-white rounded-xl border border-lime/10 shadow-sm flex items-center gap-4 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="w-11 h-11 bg-lime/10 rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-lime" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                  Call
                </p>
                <p className="text-sm font-bold text-ink group-hover:text-lime transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </p>
              </div>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="group p-5 bg-white rounded-xl border border-lime/10 shadow-sm flex items-center gap-4 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="w-11 h-11 bg-lime/10 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-lime" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                  Email
                </p>
                <p className="text-sm font-bold text-ink group-hover:text-lime transition-colors break-all">
                  {siteConfig.contact.email}
                </p>
              </div>
            </a>
            <div className="p-5 bg-white rounded-xl border border-lime/10 shadow-sm flex items-center gap-4">
              <div className="w-11 h-11 bg-lime/10 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-lime" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                  Hours
                </p>
                <p className="text-sm font-bold text-ink">
                  Mon – Fri · 9–6
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <FadeIn
            direction="right"
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl luxury-shadow border border-lime/10"
          >
            <h2 className="font-display text-3xl text-ink font-bold mb-10">
              Service Inquiry
            </h2>
            <ContactForm />
          </FadeIn>

          <FadeIn
            direction="left"
            delay={0.1}
            className="lg:col-span-5 space-y-6"
          >
            {offices.map((loc) => (
              <article
                key={loc.city}
                className="group relative bg-white p-8 md:p-10 rounded-2xl border border-lime/10 shadow-sm overflow-hidden transition-all hover:shadow-xl"
              >
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-1 h-full bg-lime/30 group-hover:bg-lime transition-all"
                />
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-lime mb-2">
                  {loc.label}
                </p>
                <h3 className="font-display text-2xl text-ink font-bold mb-6">
                  {loc.city}
                </h3>
                <address className="space-y-5 not-italic">
                  <div className="flex items-start gap-4">
                    <MapPin
                      className="w-5 h-5 text-lime shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {loc.addr}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone
                      className="w-5 h-5 text-lime shrink-0"
                      aria-hidden="true"
                    />
                    <a
                      href={`tel:${loc.phone.replace(/\s/g, "")}`}
                      className="text-sm text-gray-500 hover:text-ink transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail
                      className="w-5 h-5 text-lime shrink-0"
                      aria-hidden="true"
                    />
                    <a
                      href={`mailto:${loc.email}`}
                      className="text-sm text-gray-500 hover:text-ink transition-colors"
                    >
                      {loc.email}
                    </a>
                  </div>
                </address>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-ink hover:text-lime transition-colors"
                >
                  Open in Google Maps
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </article>
            ))}

            <div className="bg-ink p-8 md:p-10 rounded-2xl shadow-2xl space-y-6 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute -top-20 -right-20 w-56 h-56 bg-lime/15 rounded-full blur-3xl"
              />
              <h3 className="relative font-display text-2xl text-lime-soft font-bold">
                Priority Support
              </h3>
              <p className="relative text-sm text-gray-400">
                Current clients can access the digital portal 24/7 or reach
                their assigned associate via the secure WhatsApp line.
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full py-4 bg-lime text-ink rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-lime-soft transition-colors"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                WhatsApp Support
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
