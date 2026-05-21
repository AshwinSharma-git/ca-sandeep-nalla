import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { siteConfig, offices } from "@/lib/site-config";

const startBusinessLinks = [
  { name: "Private Limited Company", href: "/services/private-limited-company" },
  { name: "LLP Registration", href: "/services/llp-registration" },
  { name: "Partnership Firm", href: "/services/partnership-firm" },
  { name: "One Person Company", href: "/services/one-person-company" },
  { name: "Proprietorship", href: "/services/proprietorship" },
];

const complianceLinks = [
  { name: "GST Registration & Returns", href: "/services/gst" },
  { name: "Income Tax Filing", href: "/services/income-tax" },
  { name: "Audit & Assurance", href: "/services/audit" },
  { name: "ROC Filings", href: "/services/roc-filing" },
  { name: "MSME / Udyam", href: "/services/msme-registration" },
  { name: "Startup India / DPIIT", href: "/services/startup-india" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "All Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Sitemap", href: "/sitemap.xml" },
];

const socials = [
  { Icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { Icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
  { Icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { Icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pt-20 pb-10 text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="light" />
            <p className="text-xs uppercase tracking-[0.3em] text-lime-soft/80 font-bold">
              {siteConfig.tagline}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {siteConfig.tagline}. A Chartered Accountancy firm built around
              precision, speed, and complete financial stewardship — for
              startups, SMEs, professionals, and individuals.
            </p>
            <ul className="flex gap-3" aria-label="Social media">
              {socials.map(({ Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime/20 transition-all text-lime-soft"
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Start a Business" className="lg:col-span-2">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-lime-soft mb-6">
              Start a Business
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {startBusinessLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="hover:text-lime transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Compliance & Filing" className="lg:col-span-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-lime-soft mb-6">
              Compliance & Filing
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {complianceLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="hover:text-lime transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-lime-soft">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneE164}`}
                  className="flex items-center gap-3 hover:text-lime transition-colors"
                >
                  <Phone
                    className="w-4 h-4 text-lime shrink-0"
                    aria-hidden="true"
                  />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 hover:text-lime transition-colors"
                >
                  <Mail
                    className="w-4 h-4 text-lime shrink-0"
                    aria-hidden="true"
                  />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock
                  className="w-4 h-4 text-lime shrink-0"
                  aria-hidden="true"
                />
                {siteConfig.contact.workingHours}
              </li>
            </ul>

            <ul className="space-y-4">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-xs uppercase tracking-widest font-bold text-gray-300 hover:text-lime transition-colors"
                  >
                    {l.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-white/10">
          {offices.map((o) => (
            <address
              key={o.city}
              className="not-italic text-sm text-gray-400 leading-relaxed"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-lime-soft mb-2">
                {o.label} · {o.city}
              </p>
              <p className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 text-lime shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <a
                  href={o.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime transition-colors"
                >
                  {o.addr}
                </a>
              </p>
            </address>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-wider">
          <p>
            © {year} {siteConfig.name} — All Rights Reserved.
          </p>
          <ul className="flex flex-wrap gap-6 md:gap-8 justify-center">
            {legalLinks.map((l) => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  className="hover:text-lime transition-colors"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
