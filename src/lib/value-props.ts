import {
  TrendingUp,
  Zap,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type ValueProp = {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
};

export const valueProps: ValueProp[] = [
  {
    icon: TrendingUp,
    title: "Maximum Tax Savings",
    desc: "Smart, lawful tax planning that protects every rupee — deductions, credits, structuring, and timing handled by senior CAs.",
    bullets: [
      "Strategic deductions & exemptions",
      "Capital gains structuring",
      "Quarterly advance-tax planning",
    ],
  },
  {
    icon: Zap,
    title: "Unparalleled Speed",
    desc: "Tech-driven workflows, dedicated associates, and clear timelines so your filings, registrations, and approvals close fast.",
    bullets: [
      "48-hour GST registration",
      "Same-day document turnaround",
      "Always-on client portal",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Accurate Compliance",
    desc: "Strict adherence to the Income Tax Act, GST law, Companies Act, and ROC requirements — double-verified before every submission.",
    bullets: [
      "CBDT / CBIC aligned filings",
      "Double-verification model",
      "Audit-trail for every action",
    ],
  },
];
