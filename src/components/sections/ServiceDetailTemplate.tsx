import Image from "next/image";
import { CheckCircle2, Phone, ArrowRight, AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BrandDivider } from "@/components/ui/BrandDivider";
import { FadeIn } from "@/components/ui/FadeIn";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { LinkButton } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import type {
  ServicePage,
  ServiceItem,
  ExtraSection,
  DataTable,
} from "@/lib/service-pages";

type Props = { data: ServicePage };

function ImageBlock({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] rounded-3xl overflow-hidden luxury-shadow border border-lime/10",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 45vw, 90vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-tr from-ink/20 via-transparent to-transparent"
      />
    </div>
  );
}

function ItemGrid({
  items,
  tone = "lime",
}: {
  items: ServiceItem[];
  tone?: "lime" | "warning";
}) {
  return (
    <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((a) => (
        <StaggerItem key={a.title}>
          <article
            className={cn(
              "h-full bg-white p-8 rounded-2xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
              tone === "lime"
                ? "border-lime/10"
                : "border-red-300/30",
            )}
          >
            <div
              className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-6",
                tone === "lime" ? "bg-ink/5" : "bg-red-50",
              )}
            >
              <a.icon
                className={cn(
                  "w-6 h-6",
                  tone === "lime" ? "text-lime" : "text-red-500",
                )}
                aria-hidden="true"
              />
            </div>
            <h3 className="font-display text-xl text-ink font-bold mb-3">
              {a.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function DataTableBlock({ table }: { table: DataTable }) {
  return (
    <FadeIn className="max-w-6xl mx-auto">
      <div className="mb-8 text-center space-y-3">
        <h3 className="font-display text-2xl md:text-3xl text-ink font-bold">
          {table.heading}
        </h3>
        {table.description && (
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {table.description}
          </p>
        )}
      </div>
      <div className="overflow-x-auto rounded-2xl border border-lime/10 shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-ink text-lime-soft">
            <tr>
              {table.headers.map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left font-bold whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {table.rows.map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-pearl/40" : "bg-white"}
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={
                      j === 0
                        ? "px-4 py-3 font-semibold text-ink align-top whitespace-nowrap"
                        : "px-4 py-3 text-gray-600 align-top"
                    }
                  >
                    {cell.split("\n").map((line, k) => (
                      <span key={k} className="block">
                        {line}
                      </span>
                    ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note && (
        <p className="mt-4 text-xs text-gray-500 italic text-center">
          {table.note}
        </p>
      )}
    </FadeIn>
  );
}

function ExtraSectionBlock({
  section,
  index,
}: {
  section: ExtraSection;
  index: number;
}) {
  const align = section.align ?? (index % 2 === 0 ? "right" : "left");
  const bg = index % 2 === 0 ? "bg-white" : "bg-pearl";

  return (
    <section className={cn("py-16 md:py-20", bg)}>
      <Container>
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center",
            align === "left" && "lg:[&>*:first-child]:order-2",
          )}
        >
          <FadeIn direction={align === "right" ? "right" : "left"} className="space-y-6">
            <BrandDivider />
            <h2 className="font-display text-3xl md:text-4xl text-ink font-bold leading-tight">
              {section.heading}
            </h2>
            <p className="text-gray-600 leading-relaxed">{section.body}</p>
            {section.bullets && (
              <ul className="space-y-3 pt-2">
                {section.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-ink"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-lime shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </FadeIn>
          <FadeIn direction={align === "right" ? "left" : "right"} delay={0.1}>
            {section.image && (
              <ImageBlock src={section.image} alt={section.heading} />
            )}
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export function ServiceDetailTemplate({ data }: Props) {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 md:pt-36 pb-20 bg-mist overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-lime/10 rounded-full blur-[120px]"
        />
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn className="lg:col-span-7 space-y-6">
              <div className="inline-block px-4 py-1 border-l-2 border-lime bg-lime/5">
                <Eyebrow>{data.eyebrow}</Eyebrow>
              </div>
              <BrandDivider />
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink font-bold leading-[1.05] text-balance">
                {data.hero.titleLead}{" "}
                <span className="text-lime italic font-medium">
                  {data.hero.titleAccent}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                {data.hero.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <LinkButton href="/contact" size="lg" className="group">
                  {data.cta.label}
                  <ArrowRight
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </LinkButton>
                <a
                  href={`tel:${siteConfig.contact.phoneE164}`}
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-lg border border-ink/15 text-ink font-semibold hover:bg-ink/5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-lime" aria-hidden="true" />
                  {siteConfig.contact.phone}
                </a>
              </div>
            </FadeIn>
            {data.hero.image && (
              <FadeIn direction="left" delay={0.15} className="lg:col-span-5">
                <ImageBlock src={data.hero.image} alt={data.title} />
              </FadeIn>
            )}
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {data.intro.image && (
              <FadeIn direction="right">
                <ImageBlock src={data.intro.image} alt={data.intro.heading} />
              </FadeIn>
            )}
            <FadeIn
              direction="left"
              delay={0.05}
              className={cn("space-y-6", !data.intro.image && "lg:col-span-2 max-w-4xl mx-auto")}
            >
              <BrandDivider />
              <h2 className="font-display text-3xl md:text-4xl text-ink font-bold leading-tight">
                {data.intro.heading}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.intro.body}
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* EXTRA SECTIONS (BEFORE advantages) — image + text alternating */}
      {data.extraSections?.map((section, i) => (
        <ExtraSectionBlock
          key={section.heading}
          section={section}
          index={i}
        />
      ))}

      {/* ADVANTAGES */}
      <section className="py-20 md:py-24 bg-pearl">
        <Container>
          <FadeIn className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <Eyebrow>Key Advantages</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl text-ink font-bold">
              {data.advantagesHeading ?? "Why this structure works"}
            </h2>
            <BrandDivider align="center" />
          </FadeIn>

          {data.advantagesImage && (
            <FadeIn className="mb-12 max-w-4xl mx-auto">
              <ImageBlock
                src={data.advantagesImage}
                alt={data.advantagesHeading ?? "Advantages"}
                className="aspect-[16/7]"
              />
            </FadeIn>
          )}

          <ItemGrid items={data.advantages} tone="lime" />
        </Container>
      </section>

      {/* DATA TABLES — only renders if data provides them */}
      {data.tables && data.tables.length > 0 && (
        <section className="py-20 md:py-24 bg-white">
          <Container>
            <FadeIn className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <Eyebrow>Reference Tables</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl text-ink font-bold">
                Forms, Due Dates & Rate Slabs
              </h2>
              <BrandDivider align="center" />
            </FadeIn>
            <div className="space-y-16">
              {data.tables.map((table) => (
                <DataTableBlock key={table.heading} table={table} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* DISADVANTAGES — only renders if data provides them */}
      {data.disadvantages && data.disadvantages.length > 0 && (
        <section className="py-20 md:py-24 bg-white">
          <Container>
            <FadeIn className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-200 bg-red-50">
                <AlertTriangle
                  className="w-4 h-4 text-red-500"
                  aria-hidden="true"
                />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-red-500">
                  Things to Consider
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-ink font-bold">
                {data.disadvantagesHeading ?? "Disadvantages"}
              </h2>
              <BrandDivider align="center" />
            </FadeIn>

            {data.disadvantagesImage && (
              <FadeIn className="mb-12 max-w-4xl mx-auto">
                <ImageBlock
                  src={data.disadvantagesImage}
                  alt={data.disadvantagesHeading ?? "Disadvantages"}
                  className="aspect-[16/7]"
                />
              </FadeIn>
            )}

            <ItemGrid items={data.disadvantages} tone="warning" />
          </Container>
        </section>
      )}

      {/* WHY CHOOSE AXIAFIN */}
      {data.whyChoose && (
        <section className="py-20 md:py-24 bg-mist">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn direction="right" className="space-y-6">
                <Eyebrow>Why AXIAFIN</Eyebrow>
                <h2 className="font-display text-3xl md:text-4xl text-ink font-bold leading-tight">
                  {data.whyChoose.heading}
                </h2>
                <BrandDivider />
                <p className="text-lg text-gray-600 leading-relaxed">
                  {data.whyChoose.body}
                </p>
                <LinkButton href="/contact" size="lg" className="group mt-2">
                  Contact Now
                  <ArrowRight
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </LinkButton>
              </FadeIn>
              {data.whyChoose.image && (
                <FadeIn direction="left" delay={0.1}>
                  <ImageBlock
                    src={data.whyChoose.image}
                    alt={data.whyChoose.heading}
                  />
                </FadeIn>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* PROCESS */}
      <section className="py-20 md:py-24 bg-ink text-white relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-lime/10 rounded-full blur-[160px] -translate-y-1/2"
        />
        <Container className="relative z-10">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <Eyebrow>The Process</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold">
              {data.processHeading ?? "How we deliver"}
            </h2>
          </FadeIn>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {data.process.map((step) => (
              <StaggerItem key={step.step}>
                <article className="h-full p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <p className="font-display text-4xl text-lime-soft font-bold leading-none mb-5">
                    {step.step}
                  </p>
                  <h3 className="font-display text-lg text-white font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* BUNDLE / Documents Required / Checklist */}
      {data.bundle && (
        <section className="py-20 md:py-24 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-pearl rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-16 border border-lime/10">
              <div className="lg:col-span-5 space-y-6">
                <BrandDivider />
                <Eyebrow>Bundled Together</Eyebrow>
                <h2 className="font-display text-3xl md:text-4xl text-ink font-bold leading-tight">
                  {data.bundle.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Everything you need handled in one engagement, one timeline,
                  one fee.
                </p>
              </div>
              <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.bundle.items.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl border border-lime/10 shadow-sm"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-lime shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-ink font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      )}

      {/* HOW DOES IT WORK */}
      {data.howItWorks && (
        <section className="py-20 md:py-24 bg-mist">
          <Container>
            <FadeIn className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <Eyebrow>Workflow</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl text-ink font-bold">
                {data.howItWorks.title}
              </h2>
              <BrandDivider align="center" />
            </FadeIn>
            <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {data.howItWorks.items.map((step, idx) => (
                <StaggerItem key={step}>
                  <article className="h-full bg-white p-6 rounded-2xl border border-lime/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <span className="font-display text-3xl text-lime font-bold leading-none shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-ink font-medium leading-relaxed pt-1">
                        {step}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </section>
      )}

      <CTASection
        title={data.cta.headline}
        description={data.cta.sub}
        ctaLabel={data.cta.label}
        ctaHref="/contact"
      />
    </>
  );
}
