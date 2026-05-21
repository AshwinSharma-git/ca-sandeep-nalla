import {
  Lightbulb,
  Crosshair,
  RefreshCw,
  BarChart3,
  Search,
  Target,
  RotateCw,
  Network,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

type Segment = {
  side: "business" | "compliance";
  title: string;
  body: string;
  color: string;
  icon: LucideIcon;
};

const segments: Segment[] = [
  // Left — Business Perspective (top → bottom)
  {
    side: "business",
    title: "Start Business as",
    body: "Incorporate Business as Private Limited, Limited Liability Partnership, Partnership Firm, OPC, Proprietorship, Society, Trust.",
    color: "#7CB342",
    icon: Lightbulb,
  },
  {
    side: "business",
    title: "Investment",
    body: "Funds from Promoter, Friends, Relatives, Seed Funding, Angel Investors and others. Need of Valuation and Securities allotment to investors.",
    color: "#16B3A4",
    icon: Crosshair,
  },
  {
    side: "business",
    title: "Tax Exemptions",
    body: "Startup under DPIIT gets Income Tax Exemption (u/s 80IAC), Angel Tax Exemption (U/s 56(2)(viib) and differential tax rate.",
    color: "#345E91",
    icon: RefreshCw,
  },
  {
    side: "business",
    title: "Annual Reports",
    body: "Annual Reports to be provided to stake holders according to Companies Act (Statutory Audit), Income Tax Act (Income Tax Audit) and applicable laws in force.",
    color: "#8B4FB0",
    icon: BarChart3,
  },
  // Right — Compliance Perspective (top → bottom)
  {
    side: "compliance",
    title: "Audit & Assurance",
    body: "Audits under the Act are Statutory Audit, Internal Audit, Income Tax Audit, GST Audit, etc. Management Audits are Revenue Audit, Stock Audit, Due Diligence.",
    color: "#FBBC04",
    icon: Search,
  },
  {
    side: "compliance",
    title: "Registrations & License",
    body: "Startup Registration on DPIIT, GST Registration, ESIC, EPF, MSME, IEC Code Registration, Trade & Labour Licenses.",
    color: "#F58220",
    icon: Target,
  },
  {
    side: "compliance",
    title: "Return Filings",
    body: "GST Returns, Income Tax Returns, Labour Law Related Returns, TDS Returns, ROC Returns and etc.",
    color: "#E63946",
    icon: RotateCw,
  },
  {
    side: "compliance",
    title: "Other Compliances",
    body: "Project Report, ROC Related Forms, Reply for Notices from Income Tax, GST. GST Refund Services and others required in the course of Business.",
    color: "#E91E63",
    icon: Network,
  },
];

// === SVG geometry ===
const CX = 300;
const CY = 300;
const OUTER_R = 240;
const INNER_R = 95;
const ICON_R = 170;

function polarToCartesian(r: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: CX + r * Math.cos(angleRad),
    y: CY + r * Math.sin(angleRad),
  };
}

function describeSector(startAngle: number, endAngle: number) {
  const outerStart = polarToCartesian(OUTER_R, startAngle);
  const outerEnd = polarToCartesian(OUTER_R, endAngle);
  const innerStart = polarToCartesian(INNER_R, endAngle);
  const innerEnd = polarToCartesian(INNER_R, startAngle);
  return [
    `M ${outerStart.x.toFixed(2)} ${outerStart.y.toFixed(2)}`,
    `A ${OUTER_R} ${OUTER_R} 0 0 1 ${outerEnd.x.toFixed(2)} ${outerEnd.y.toFixed(2)}`,
    `L ${innerStart.x.toFixed(2)} ${innerStart.y.toFixed(2)}`,
    `A ${INNER_R} ${INNER_R} 0 0 0 ${innerEnd.x.toFixed(2)} ${innerEnd.y.toFixed(2)}`,
    "Z",
  ].join(" ");
}

// Map segment index → angle range (clockwise from 12 o'clock)
// Order on the wheel: Audit(0°-45°), Registrations(45°-90°), Return Filings(90°-135°),
// Other Compliances(135°-180°), Annual Reports(180°-225°), Tax Exemptions(225°-270°),
// Investment(270°-315°), Start Business(315°-360°)
const wheelOrder = [
  4, // Audit & Assurance
  5, // Registrations & License
  6, // Return Filings
  7, // Other Compliances
  3, // Annual Reports
  2, // Tax Exemptions
  1, // Investment
  0, // Start Business
];

export function BusinessVsCompliance() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <FadeIn className="mb-16">
          <SectionHeading
            eyebrow="The Two Sides of Every Business"
            title={
              <>
                Business{" "}
                <span className="text-gradient-brand italic font-medium">
                  vs Compliances
                </span>
              </>
            }
            description="From incorporation to annual reports — every business runs on twin engines: the Business Perspective (how you grow) and the Compliance Perspective (how you stay regulated). AXIAFIN handles both."
            align="center"
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 2xl:gap-14 items-start">
          {/* LEFT — Business Perspective */}
          <div className="lg:col-span-4 space-y-5 order-2 lg:order-1">
            <div className="text-center lg:text-right">
              <span className="inline-block underline decoration-2 underline-offset-4 decoration-indigo/60 font-display text-2xl md:text-3xl text-indigo font-bold">
                Business Perspective
              </span>
            </div>
            {segments
              .filter((s) => s.side === "business")
              .map((s) => (
                <article
                  key={s.title}
                  className="bg-pearl/60 backdrop-blur p-5 rounded-2xl border border-ink/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="w-3 h-3 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: s.color }}
                    />
                    <div>
                      <h4 className="font-display text-base md:text-lg text-ink font-bold mb-1.5">
                        {s.title}
                      </h4>
                      <p className="text-xs md:text-sm text-slate leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
          </div>

          {/* CENTER — Chart */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[26rem] xl:max-w-[28rem] 2xl:max-w-[32rem] 3xl:max-w-[36rem]">
              <svg
                viewBox="0 0 600 600"
                role="img"
                aria-label="Business vs Compliances comparison wheel"
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(14,16,36,0.18)]"
              >
                {/* Subtle outer ring */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={OUTER_R + 12}
                  fill="none"
                  stroke="rgba(14,16,36,0.05)"
                  strokeDasharray="2 6"
                />

                {/* Sectors */}
                {wheelOrder.map((segIdx, i) => {
                  const s = segments[segIdx];
                  const startAngle = i * 45;
                  const endAngle = (i + 1) * 45;
                  const midAngle = (startAngle + endAngle) / 2;
                  const iconPos = polarToCartesian(ICON_R, midAngle);
                  return (
                    <g key={s.title}>
                      <path
                        d={describeSector(startAngle, endAngle)}
                        fill={s.color}
                        stroke="#ffffff"
                        strokeWidth="3"
                      />
                      <foreignObject
                        x={iconPos.x - 22}
                        y={iconPos.y - 22}
                        width="44"
                        height="44"
                      >
                        <div className="w-11 h-11 rounded-full bg-white/95 flex items-center justify-center shadow-md">
                          <s.icon
                            className="w-5 h-5"
                            style={{ color: s.color }}
                            aria-hidden="true"
                          />
                        </div>
                      </foreignObject>
                    </g>
                  );
                })}

                {/* Center hub */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={INNER_R - 4}
                  fill="#ffffff"
                  stroke="rgba(14,16,36,0.08)"
                  strokeWidth="2"
                />
                <text
                  x={CX}
                  y={CY - 14}
                  textAnchor="middle"
                  className="fill-ink font-display font-bold"
                  fontSize="24"
                >
                  Business
                </text>
                <text
                  x={CX}
                  y={CY + 12}
                  textAnchor="middle"
                  className="fill-indigo font-display font-bold italic"
                  fontSize="20"
                >
                  VS
                </text>
                <text
                  x={CX}
                  y={CY + 38}
                  textAnchor="middle"
                  className="fill-ink font-display font-bold"
                  fontSize="22"
                >
                  Compliances
                </text>
              </svg>
            </div>
          </div>

          {/* RIGHT — Compliance Perspective */}
          <div className="lg:col-span-4 space-y-5 order-3">
            <div className="text-center lg:text-left">
              <span className="inline-block underline decoration-2 underline-offset-4 decoration-lime-deep/60 font-display text-2xl md:text-3xl text-lime-deep font-bold">
                Compliance Perspective
              </span>
            </div>
            {segments
              .filter((s) => s.side === "compliance")
              .map((s) => (
                <article
                  key={s.title}
                  className="bg-pearl/60 backdrop-blur p-5 rounded-2xl border border-ink/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="w-3 h-3 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: s.color }}
                    />
                    <div>
                      <h4 className="font-display text-base md:text-lg text-ink font-bold mb-1.5">
                        {s.title}
                      </h4>
                      <p className="text-xs md:text-sm text-slate leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
