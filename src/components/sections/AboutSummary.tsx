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
import { GoldDivider } from "@/components/ui/GoldDivider";
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
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <FadeIn direction="up" className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden luxury-shadow grayscale hover:grayscale-0 transition-all duration-700 relative">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c7377f0f6311?auto=format&fit=crop&q=80&w=1742"
                alt="Senior partner of CA Sandeep Nalla & Co. in office"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-4 sm:-right-10 bg-white p-8 sm:p-10 rounded-2xl luxury-shadow border border-gold/10 max-w-[280px]">
              <p className="font-display text-5xl sm:text-6xl text-gold font-bold leading-none mb-3">
                15+
              </p>
              <p className="text-xs font-bold uppercase tracking-tight text-navy leading-snug">
                Years Building Financial Confidence
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            <GoldDivider />
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-gold">
              About the Firm
            </p>
            <h2 className="font-display text-4xl text-navy font-bold leading-tight md:text-5xl text-balance">
              Personalised Financial Services. Strategic Business Guidance.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At CA Sandeep Nalla &amp; Co., we deliver unparalleled financial
              services tailored to the diverse needs of our clients — from
              first-time founders to multi-jurisdiction enterprises. Our
              mission is simple: provide the best value to your time and money,
              backed by precise compliance and senior-CA accountability.
            </p>

            <dl className="grid grid-cols-2 gap-x-12 gap-y-10 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <dd className="font-display text-2xl text-navy font-bold">
                    {stat.val}
                  </dd>
                  <dt className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>

            <Link
              href="/about"
              className="inline-flex items-center gap-4 group pt-4"
            >
              <span className="font-bold text-sm text-navy border-b-2 border-gold/30 pb-1 group-hover:border-gold transition-all">
                Discover Our Story
              </span>
              <ArrowRight
                className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
