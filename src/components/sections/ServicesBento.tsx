import Image from "next/image";
import { TrendingUp, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HoverLift } from "@/components/ui/HoverLift";
import { FadeIn } from "@/components/ui/FadeIn";

const tags = ["M&A", "Auditing", "Tax Law", "Regulatory"];

export function ServicesBento() {
  return (
    <section className="py-24 bg-ivory">
      <Container>
        <FadeIn className="mb-16">
          <SectionHeading
            eyebrow="Our Advantage"
            title="Excellence is Our Default Setting"
            align="center"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HoverLift className="md:col-span-2">
            <article className="glass-card p-10 md:p-12 rounded-3xl border border-white shadow-xl flex flex-col justify-between min-h-[350px] h-full">
              <div className="flex justify-between items-start gap-4">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center">
                  <TrendingUp
                    className="w-8 h-8 text-gold"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/5 px-4 py-2 rounded-full border border-gold/20">
                  Premium Service
                </span>
              </div>
              <div className="max-w-md mt-12">
                <h3 className="font-display text-2xl text-navy font-bold mb-4">
                  Maximum Tax Savings
                </h3>
                <p className="text-gray-600">
                  Our strategic tax planning identifies every possible
                  optimization, ensuring your wealth remains protected and
                  productive.
                </p>
              </div>
            </article>
          </HoverLift>

          <HoverLift>
            <article className="bg-navy p-10 md:p-12 rounded-3xl flex flex-col justify-between min-h-[350px] shadow-2xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16 blur-3xl" />
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <ShieldCheck
                  className="w-8 h-8 text-gold-light"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-12">
                <h3 className="font-display text-2xl text-gold-light font-bold mb-4">
                  Accurate Compliance
                </h3>
                <p className="text-gray-400">
                  Meticulous adherence to evolving GST, Income Tax, and
                  International laws.
                </p>
              </div>
            </article>
          </HoverLift>

          <HoverLift>
            <article className="bg-white p-10 md:p-12 rounded-3xl border border-gold/10 flex flex-col justify-between min-h-[350px] shadow-sm h-full">
              <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-navy" aria-hidden="true" />
              </div>
              <div className="mt-12">
                <h3 className="font-display text-2xl text-navy font-bold mb-4">
                  Fast Processing
                </h3>
                <p className="text-gray-600">
                  Rapid turnaround times powered by AI-integrated financial
                  workflows.
                </p>
              </div>
            </article>
          </HoverLift>

          <HoverLift className="md:col-span-2">
            <article className="glass-card p-10 md:p-12 rounded-3xl border border-white flex flex-col md:flex-row items-center gap-10 shadow-xl h-full">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 relative">
                <Image
                  src="https://images.unsplash.com/photo-1521791136364-798a730bb361?auto=format&fit=crop&q=80&w=1740"
                  alt="Partner in client consultation"
                  fill
                  sizes="(min-width: 768px) 192px, 160px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-2xl text-navy font-bold mb-4">
                  Expert CA Guidance
                </h3>
                <p className="text-gray-600 mb-6">
                  Direct access to senior partners with decades of specialized
                  financial expertise across industries.
                </p>
                <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="px-4 py-1 bg-gold/10 text-gold text-[10px] font-bold uppercase rounded-full border border-gold/20 leading-loose"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </HoverLift>
        </div>
      </Container>
    </section>
  );
}
