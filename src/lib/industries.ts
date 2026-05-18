import {
  Rocket,
  Building2,
  Briefcase,
  User,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
};

export const industries: Industry[] = [
  {
    icon: Rocket,
    title: "For Startups",
    desc: "From incorporation to your first audit — we set the financial foundation that investors trust.",
    points: [
      "Company incorporation & founder agreements",
      "DPIIT recognition & angel-tax exemption",
      "Cap-table, ESOP & funding readiness",
    ],
  },
  {
    icon: Building2,
    title: "For SMEs",
    desc: "Cost-effective accounting, tax, and compliance designed around how growing Indian businesses actually operate.",
    points: [
      "Monthly bookkeeping & MIS",
      "GST, TDS & ROC compliance calendar",
      "Working-capital project reports",
    ],
  },
  {
    icon: Briefcase,
    title: "For Professionals",
    desc: "Doctors, architects, consultants and creators — financial structuring and audit handled discreetly.",
    points: [
      "Presumptive taxation (44ADA) advisory",
      "GST & TDS on professional income",
      "Income & expense optimisation",
    ],
  },
  {
    icon: User,
    title: "For Individuals",
    desc: "Personal tax planning, ITR filing, capital gains, and NRI services — all with a direct line to a CA.",
    points: [
      "Salaried, HNI & NRI ITR filing",
      "Capital gains on equity, property, crypto",
      "Tax-saving investment planning",
    ],
  },
];
