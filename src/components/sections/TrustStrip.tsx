import { Building2, Receipt, ShieldCheck, Rocket, Factory, Scale, Globe, FileText } from "lucide-react";

const items = [
  { icon: Building2, label: "Pvt Ltd Incorporation" },
  { icon: Receipt, label: "GST · GSTR-1 · GSTR-3B" },
  { icon: ShieldCheck, label: "Statutory & Tax Audit" },
  { icon: FileText, label: "Income Tax Filing" },
  { icon: Rocket, label: "Startup India · DPIIT" },
  { icon: Factory, label: "MSME · Udyam" },
  { icon: Scale, label: "LLP & Partnership" },
  { icon: Globe, label: "Import Export Code" },
];

export function TrustStrip() {
  // Duplicate for seamless marquee loop
  const sequence = [...items, ...items];
  return (
    <section
      aria-label="Areas of practice"
      className="relative bg-white border-y border-ink/5 py-6 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"
      />
      <div className="flex marquee gap-12 whitespace-nowrap">
        {sequence.map((it, i) => (
          <div
            key={`${it.label}-${i}`}
            className="flex items-center gap-3 text-slate"
          >
            <it.icon
              className="w-5 h-5 text-indigo"
              aria-hidden="true"
            />
            <span className="text-sm font-semibold tracking-wide">
              {it.label}
            </span>
            <span
              aria-hidden="true"
              className="ml-12 w-1 h-1 rounded-full bg-ink/20"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
