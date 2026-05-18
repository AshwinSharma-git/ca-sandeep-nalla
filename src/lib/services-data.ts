import {
  Building2,
  Receipt,
  ShieldCheck,
  Factory,
  FileText,
  Scale,
  UserCheck,
  Briefcase,
  Landmark,
  Rocket,
  ScrollText,
  Mail,
  FileWarning,
  HandCoins,
  ClipboardList,
  Globe,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  desc: string;
  icon: LucideIcon;
  href: string;
  category:
    | "start-business"
    | "audit"
    | "filing"
    | "registration"
    | "advisory";
};

export const services: Service[] = [
  // Start a Business
  {
    title: "Private Limited Company",
    desc: "Limited liability, separate legal identity, and the most fundable structure for ambitious founders.",
    icon: Building2,
    href: "/services/private-limited-company",
    category: "start-business",
  },
  {
    title: "LLP Registration",
    desc: "Blend of partnership flexibility and corporate liability protection — ideal for professional firms.",
    icon: Scale,
    href: "/services/llp-registration",
    category: "start-business",
  },
  {
    title: "Partnership Firm",
    desc: "Quick to set up and operate, with deed drafting and PAN/TAN handled end-to-end.",
    icon: Briefcase,
    href: "/services/partnership-firm",
    category: "start-business",
  },
  {
    title: "One Person Company",
    desc: "Corporate identity for solo founders with single-director structure and nominee appointment.",
    icon: UserCheck,
    href: "/services/one-person-company",
    category: "start-business",
  },
  {
    title: "Proprietorship",
    desc: "Fastest legal start for solo entrepreneurs — GST, MSME, and current account ready in days.",
    icon: HandCoins,
    href: "/services/proprietorship",
    category: "start-business",
  },
  {
    title: "Society & Trust",
    desc: "Charitable and non-profit registration with 12A / 80G compliance support.",
    icon: Landmark,
    href: "/services/society-trust",
    category: "start-business",
  },

  // Audit & Assurance
  {
    title: "Audit & Assurance",
    desc: "Statutory, tax, GST, internal, revenue, and stock audits delivered with double-verification.",
    icon: ShieldCheck,
    href: "/services/audit",
    category: "audit",
  },

  // Return Filing
  {
    title: "Income Tax Filing",
    desc: "ITR for salaried, HNI, and corporate filers — accurate, on time, and CBDT-aligned.",
    icon: FileText,
    href: "/services/income-tax",
    category: "filing",
  },
  {
    title: "GST Returns",
    desc: "GSTR-1, 3B, 9, reconciliations and ITC optimization — zero-error periodic filings.",
    icon: Receipt,
    href: "/services/gst",
    category: "filing",
  },
  {
    title: "TDS Returns",
    desc: "Monthly TDS deduction, deposit, and quarterly 24Q / 26Q / 27Q filings with 26AS reconciliation.",
    icon: Wallet,
    href: "/services/tds-returns",
    category: "filing",
  },
  {
    title: "ROC Filings",
    desc: "Annual returns, MGT-7, AOC-4, DIR-3 KYC, and board resolutions — full secretarial compliance.",
    icon: ScrollText,
    href: "/services/roc-filing",
    category: "filing",
  },
  {
    title: "Payroll Compliance",
    desc: "ESIC, EPF, and Professional Tax registration plus monthly returns for growing teams.",
    icon: ClipboardList,
    href: "/services/payroll-compliance",
    category: "filing",
  },

  // Registrations
  {
    title: "GST Registration",
    desc: "Regular, composition, and SEZ GST registrations within 48 hours.",
    icon: Receipt,
    href: "/services/gst",
    category: "registration",
  },
  {
    title: "MSME / Udyam",
    desc: "Udyam registration unlocking priority lending, subsidies, and statutory protections.",
    icon: Factory,
    href: "/services/msme-registration",
    category: "registration",
  },
  {
    title: "Startup India / DPIIT",
    desc: "DPIIT recognition with angel-tax exemption, tax holiday, and easy exit norms.",
    icon: Rocket,
    href: "/services/startup-india",
    category: "registration",
  },
  {
    title: "Import Export Code",
    desc: "IEC issuance and customs onboarding for businesses going cross-border.",
    icon: Globe,
    href: "/services/import-export-code",
    category: "registration",
  },

  // Advisory & Notices
  {
    title: "Income Tax Notices",
    desc: "Drafting, representation, and resolution for Section 143, 148, and 245 notices.",
    icon: Mail,
    href: "/services/income-tax-notices",
    category: "advisory",
  },
  {
    title: "GST Notices & Refunds",
    desc: "ASMT-10 response, departmental audits, and fast-track export refund processing.",
    icon: FileWarning,
    href: "/services/gst-notices-refunds",
    category: "advisory",
  },
  {
    title: "Project Reports",
    desc: "Bankable project reports, CMA data, and financial projections for loans and grants.",
    icon: ClipboardList,
    href: "/services/project-reports",
    category: "advisory",
  },
];

export const categoryLabel: Record<Service["category"], string> = {
  "start-business": "Start a Business",
  audit: "Audit & Assurance",
  filing: "Return Filing",
  registration: "Registrations",
  advisory: "Notices & Advisory",
};

export type Testimonial = {
  text: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    text: "Sandeep and his team set up our Private Limited Company in days — DSC, DIN, MOA, GST, and even our current account. Genuinely the fastest CA experience I've had.",
    name: "Rajesh Varma",
    role: "Founder, TechFlow Systems",
    initials: "RV",
  },
  {
    text: "We switched our GST compliance to CA Sandeep Nalla & Co. last year. Zero notices, perfectly reconciled ITC, and they actually respond when you call.",
    name: "Ananya Kapoor",
    role: "Director, Radiant Exports",
    initials: "AK",
  },
  {
    text: "They understand the startup ecosystem deeply — DPIIT recognition, angel-tax exemption, ESOP structuring. Worth every rupee.",
    name: "Siddharth Mehta",
    role: "Founder, Nexus AI",
    initials: "SM",
  },
];
