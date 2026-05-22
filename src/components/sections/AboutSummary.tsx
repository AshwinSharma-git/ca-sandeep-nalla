import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Verified,
  Users,
  ShieldCheck,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BrandDivider } from "@/components/ui/BrandDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";

type Stat = { label: string; val: string; icon: LucideIcon };

const stats: Stat[] = [
  { label: "Clients Served", val: "500+", icon: Users },
  { label: "On-Time Filings", val: "99.8%", icon: Verified },
  { label: "Avg. Response", val: "< 4 hrs", icon: Clock },
  { label: "Compliance Areas", val: "30+", icon: ShieldCheck },
];

export function AboutSummary() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <FadeIn direction="up" className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden luxury-shadow relative">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1740"
                alt="The AXIAFIN team in collaboration"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
              />
            </div>
            <div className="absolute -bottom-6 sm:-bottom-10 right-2 sm:-right-10 bg-white p-5 sm:p-8 lg:p-10 rounded-2xl luxury-shadow border border-ink/5 max-w-[220px] sm:max-w-[280px] lg:max-w-[300px]">
              <p className="font-display text-2xl sm:text-4xl lg:text-5xl text-gradient-brand font-bold leading-none mb-2 sm:mb-3">
                Build Your Business
              </p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate leading-snug">
                With a partner who has your back
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            <BrandDivider />
            <Eyebrow>About AXIAFIN</Eyebrow>
            <h2 className="font-display text-4xl text-ink font-bold leading-[1.05] md:text-5xl text-balance">
              Meet the team that{" "}
              <span className="text-gradient-brand italic font-medium">
                makes it happen
              </span>
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              At AXIAFIN, we are dedicated to providing unparalleled financial
              services tailored to meet the diverse needs of our clients.
            </p>

            <dl className="grid grid-cols-2 gap-x-12 gap-y-8 pt-2">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <dd className="font-display text-3xl text-ink font-bold">
                    {stat.val}
                  </dd>
                  <dt className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate/60">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>

            <Link
              href="/about"
              className="inline-flex items-center gap-4 group pt-2"
            >
              <span className="font-bold text-sm text-ink border-b-2 border-indigo/40 pb-1 group-hover:border-indigo group-hover:text-indigo transition-all">
                More About Us
              </span>
              <ArrowRight
                className="w-5 h-5 text-indigo group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
