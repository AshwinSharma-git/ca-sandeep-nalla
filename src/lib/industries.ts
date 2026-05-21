import {
  Briefcase,
  Award,
  Building2,
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
    icon: Award,
    title: "For Expertise",
    desc: "Experience unparalleled expertise with us. Our seasoned team delivers tailored solutions and strategic insights to navigate any challenge.",
    points: [
      "Domain-led strategic advisory",
      "Senior CA-led engagements",
      "Industry-specific solutions",
    ],
  },
  {
    icon: Briefcase,
    title: "For Experts",
    desc: "Join forces with us to elevate your business. Our seasoned professionals provide personalized support and innovative solutions for success.",
    points: [
      "Practice-level compliance",
      "Section 44ADA advisory",
      "Tax-efficient structuring",
    ],
  },
  {
    icon: Building2,
    title: "For SMEs",
    desc: "We're committed to SME success. Our cost-effective solutions and personalized guidance empower small and medium-sized enterprises to thrive.",
    points: [
      "Monthly bookkeeping & MIS",
      "GST · TDS · ROC calendar",
      "Working-capital project reports",
    ],
  },
  {
    icon: User,
    title: "For Individuals",
    desc: "Achieve your financial goals with us. Our personalized services and expert guidance ensure you're empowered to secure your financial future.",
    points: [
      "Salaried · HNI · NRI ITR filing",
      "Capital gains optimisation",
      "Tax-saving investment planning",
    ],
  },
];
