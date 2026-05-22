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
    | "consultancy"
    | "filing"
    | "registration"
    | "other";
};

export const services: Service[] = [
  // Start a Business
  {
    title: "Private Limited Company",
    desc: "A private Company is a company which is owned by non-governmental organisations or a relatively small number of shareholders or members of a company.",
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
    title: "Society",
    desc: "Empowering Communities. A society is an association of individuals combined using a mutual accord to deliberate, govern and act cooperatively for some communal purpose.",
    icon: Landmark,
    href: "/services/society",
    category: "start-business",
  },
  {
    title: "Trust",
    desc: "Nurturing Social Responsibility Through Trust Formation. Private, public, and charitable trust registration under the Indian Trust Act, 1882.",
    icon: ShieldCheck,
    href: "/services/trust",
    category: "start-business",
  },

  // Consultancy Services
  {
    title: "Virtual CFO Services",
    desc: "Strategic financial leadership on-demand — MIS, budgeting, cash-flow management, fundraising support, and board advisory without the full-time CFO cost.",
    icon: Briefcase,
    href: "/services/virtual-cfo",
    category: "consultancy",
  },
  {
    title: "International Taxation",
    desc: "DTAA advisory and PT (Permanent Establishment) audit. Cross-border tax optimisation, transfer pricing, NRI taxation, and foreign-asset reporting.",
    icon: Globe,
    href: "/services/international-taxation",
    category: "consultancy",
  },
  {
    title: "Assessment, CIT Appeal & ITAT Representation",
    desc: "End-to-end representation in income-tax assessments, faceless scrutiny, CIT(Appeals), and Income Tax Appellate Tribunal — senior CA-led at every hearing.",
    icon: Scale,
    href: "/services/tax-assessment-appeals",
    category: "consultancy",
  },

  // Return Filing
  {
    title: "Income Tax Filing",
    desc: "According to the Income Tax Act, everyone in India, whether resident or nonresident, has to file income tax returns. Currently, tax is payable if the income exceeds Rs 2.5 lakh in a financial year.",
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
    title: "ESIC Returns",
    desc: "Understanding ESIC Returns. ESI scheme is mandated for factories and establishments with 10+ employees earning monthly wage below Rs 21,000. Employer 3.25% + Employee 0.75%.",
    icon: ShieldCheck,
    href: "/services/esic-returns",
    category: "filing",
  },
  {
    title: "EPF Returns",
    desc: "The Employees' Provident Fund (EPF) is a social security scheme managed by the EPFO of India. Monthly contributions and ECR filings handled end-to-end.",
    icon: HandCoins,
    href: "/services/epf-returns",
    category: "filing",
  },
  {
    title: "PT Returns",
    desc: "Professional Tax is a state-level tax imposed on individuals earning income from professions, trades, or employment. Multi-state PT compliance.",
    icon: Landmark,
    href: "/services/pt-returns",
    category: "filing",
  },

  // Registrations
  {
    title: "GST Registration",
    desc: "Goods and Services Tax (GST) revolutionized India's taxation system upon its introduction in July 2017.",
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
    desc: "DPIIT recognition under the Startup India program — 3-year tax holiday under Section 80IAC, IPR fast-track, and easy exit norms.",
    icon: Rocket,
    href: "/services/startup-india",
    category: "registration",
  },
  {
    title: "Angel Tax Exemption",
    desc: "Facilitating Startup Investments. Tax Exemption under Section 56 of the Income Tax Act for DPIIT-recognized startups — shields excess share-valuation taxation.",
    icon: Wallet,
    href: "/services/angel-tax-exemption",
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
    category: "other",
  },
  {
    title: "GST Notices",
    desc: "GST notices are crucial communications from tax authorities to ensure compliance with GST regulations. ASMT-10, scrutiny, and audit notice handling.",
    icon: FileWarning,
    href: "/services/gst-notices",
    category: "other",
  },
  {
    title: "GST Refunds",
    desc: "GST refunds play a crucial role in ensuring fair taxation. Zero-rated supplies, deemed exports, inverted duty structure, SEZ supplies — RFD-01 end-to-end.",
    icon: Receipt,
    href: "/services/gst-refunds",
    category: "other",
  },
  {
    title: "Project Reports",
    desc: "Bankable project reports, CMA data, and financial projections for loans and grants.",
    icon: ClipboardList,
    href: "/services/project-reports",
    category: "other",
  },
];

export const categoryLabel: Record<Service["category"], string> = {
  "start-business": "Start a Business",
  consultancy: "Consultancy Services",
  filing: "Return Filing",
  registration: "Registrations",
  other: "Other Services",
};

export type Testimonial = {
  text: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    text: "AXIAFIN set up our Private Limited Company in days — DSC, DIN, MOA, GST, and even our current account. Genuinely the fastest CA experience I've had.",
    name: "Rajesh Varma",
    role: "Founder",
    initials: "RV",
  },
  {
    text: "We switched our GST compliance to AXIAFIN last year. Zero notices, perfectly reconciled ITC, and they actually respond when you call.",
    name: "Ananya Kapoor",
    role: "Director",
    initials: "AK",
  },
  {
    text: "Their DTAA advisory was a game-changer for our cross-border operations. They mapped our India–Singapore treaty benefits precisely and handled the Permanent Establishment (PE) audit flawlessly — significant savings on our overseas tax exposure.",
    name: "Vikram Iyer",
    role: "International Tax Consultant",
    initials: "VI",
  },
  {
    text: "They understand the startup ecosystem deeply — DPIIT recognition, angel-tax exemption, ESOP structuring. Worth every rupee.",
    name: "Siddharth Mehta",
    role: "Founder",
    initials: "SM",
  },
];
