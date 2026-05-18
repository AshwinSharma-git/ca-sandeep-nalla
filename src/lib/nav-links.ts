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
      { name: "Society / Trust", href: "/services/society-trust" },
    ],
  },
  {
    heading: "Audit & Assurance",
    items: [
      { name: "Statutory Audit", href: "/services/audit" },
      { name: "Income Tax Audit", href: "/services/audit#income-tax-audit" },
      { name: "GST Audit", href: "/services/audit#gst-audit" },
      { name: "Internal & Stock Audit", href: "/services/audit#internal-audit" },
    ],
  },
  {
    heading: "Return Filing",
    items: [
      { name: "Income Tax Returns", href: "/services/income-tax" },
      { name: "GST Returns", href: "/services/gst" },
      { name: "TDS Returns", href: "/services/tds-returns" },
      { name: "ROC Filings", href: "/services/roc-filing" },
      { name: "ESIC / EPF / PT", href: "/services/payroll-compliance" },
    ],
  },
  {
    heading: "Registrations",
    items: [
      { name: "GST Registration", href: "/services/gst" },
      { name: "MSME / Udyam", href: "/services/msme-registration" },
      { name: "Startup India / DPIIT", href: "/services/startup-india" },
      { name: "Import Export Code", href: "/services/import-export-code" },
      { name: "ESI & EPF Registration", href: "/services/payroll-compliance" },
    ],
  },
  {
    heading: "Notices & Advisory",
    items: [
      { name: "Income Tax Notices", href: "/services/income-tax-notices" },
      { name: "GST Notices & Refunds", href: "/services/gst-notices-refunds" },
      { name: "Project Reports", href: "/services/project-reports" },
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
