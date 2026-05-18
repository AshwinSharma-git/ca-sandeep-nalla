export type ProcessStep = {
  step: string;
  title: string;
  desc: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "A free 30-minute consult to understand your business, current compliance status, and immediate priorities.",
  },
  {
    step: "02",
    title: "Tailored Engagement Plan",
    desc: "We outline scope, timelines, deliverables, and a fixed fee — no surprises, no hidden hourly billing.",
  },
  {
    step: "03",
    title: "Execution by Senior CAs",
    desc: "A dedicated associate plus a senior reviewer execute the work, with weekly updates and a secure document portal.",
  },
  {
    step: "04",
    title: "Long-term Stewardship",
    desc: "Compliance calendar, proactive alerts, and quarterly strategy reviews — we stay with you as you scale.",
  },
];
