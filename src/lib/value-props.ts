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
    title: "Maximum tax savings",
    desc: "Get the most out of your tax savings! By smartly planning your taxes, you can keep more money in your pocket. Explore deductions, tax credits, retirement accounts, and other strategies to minimize what you owe.",
    bullets: [
      "Strategic deductions & exemptions",
      "Capital gains structuring",
      "Quarterly advance-tax planning",
    ],
  },
  {
    icon: Zap,
    title: "Unparalleled speed",
    desc: "Speed matters! In today's fast-paced world, businesses need to move quickly to stay ahead. By streamlining processes, embracing technology, and empowering employees, you can achieve unparalleled speed and efficiency in your operations.",
    bullets: [
      "48-hour GST registration",
      "Same-day document turnaround",
      "Always-on client portal",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Accurate Compliance",
    desc: "Stay on the right side of the law! Accurate compliance means following rules and regulations to the letter. Keep up with changes, set up internal checks, and make sure everyone in your organization understands their responsibilities to maintain accurate compliance.",
    bullets: [
      "CBDT / CBIC aligned filings",
      "Double-verification model",
      "Audit-trail for every action",
    ],
  },
];
