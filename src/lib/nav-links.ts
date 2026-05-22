export type NavSubItem = {
  name: string;
  href: string;
  desc?: string;
};

export type NavGroup = {
  heading: string;
  items: NavSubItem[];
};

export type NavLink = {
  name: string;
  href: string;
  /** Flat list — used on mobile */
  subItems?: NavSubItem[];
  /** Grouped layout — used in the desktop mega menu */
  groups?: NavGroup[];
};

const servicesGroups: NavGroup[] = [
  {
    heading: "Start a Business",
    items: [
      { name: "Private Limited Company", href: "/services/private-limited-company" },
      { name: "LLP Registration", href: "/services/llp-registration" },
      { name: "Partnership Firm", href: "/services/partnership-firm" },
      { name: "One Person Company", href: "/services/one-person-company" },
      { name: "Proprietorship", href: "/services/proprietorship" },
      { name: "Society", href: "/services/society" },
      { name: "Trust", href: "/services/trust" },
    ],
  },
  {
    heading: "Consultancy Services",
    items: [
      { name: "Virtual CFO Services", href: "/services/virtual-cfo" },
      { name: "International Taxation", href: "/services/international-taxation" },
      { name: "Assessment, CIT Appeal & ITAT", href: "/services/tax-assessment-appeals" },
    ],
  },
  {
    heading: "Return Filing",
    items: [
      { name: "Income Tax Returns", href: "/services/income-tax" },
      { name: "GST Returns", href: "/services/gst" },
      { name: "TDS Returns", href: "/services/tds-returns" },
      { name: "ROC Forms", href: "/services/roc-filing" },
      { name: "ESIC Returns", href: "/services/esic-returns" },
      { name: "EPF Returns", href: "/services/epf-returns" },
      { name: "PT Returns", href: "/services/pt-returns" },
    ],
  },
  {
    heading: "Registrations",
    items: [
      { name: "Startup India", href: "/services/startup-india" },
      { name: "Angel Tax Exemption", href: "/services/angel-tax-exemption" },
      { name: "GST Registration", href: "/services/gst" },
      { name: "MSME Registration", href: "/services/msme-registration" },
      { name: "ESI & EPF Registration", href: "/services/epf-returns" },
      { name: "Import and Export code", href: "/services/import-export-code" },
    ],
  },
  {
    heading: "Other Services",
    items: [
      { name: "GST Refunds", href: "/services/gst-refunds" },
      { name: "Project Reports", href: "/services/project-reports" },
      { name: "Income Tax Notices", href: "/services/income-tax-notices" },
      { name: "GST Notices", href: "/services/gst-notices" },
    ],
  },
];

const flatServicesSubItems: NavSubItem[] = servicesGroups.flatMap(
  (g) => g.items,
);

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    groups: servicesGroups,
    subItems: flatServicesSubItems,
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
