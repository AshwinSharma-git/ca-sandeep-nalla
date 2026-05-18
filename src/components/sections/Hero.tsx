import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const heroPoints = [
  "Senior CA-led engagements",
  "Fixed fee, no surprise billing",
  "Mon – Fri · 9 AM – 6 PM IST",
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-off-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-off-white via-off-white/80 to-transparent" />
      </div>

      <Container className="relative z-10 py-28 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right" className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5">
            <ShieldCheck className="w-4 h-4 text-gold" aria-hidden="true" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">
              Chartered Accountants · Hyderabad
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-navy leading-[1.05] font-bold text-balance">
            Empowering Your{" "}
            <span className="text-gold italic font-medium">
              Financial Compliance
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            Company registration, GST, audit, ITR filing, and end-to-end
            compliance — delivered by senior Chartered Accountants who give
            best value to your time and money.
          </p>

          <ul className="space-y-2.5 pt-2">
            {heroPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-sm text-navy font-medium"
              >
                <CheckCircle2
                  className="w-5 h-5 text-gold shrink-0"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <LinkButton href="/contact" size="lg" className="group">
              Book Free Consultation
              <ArrowRight
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </LinkButton>
            <LinkButton href="/services" variant="secondary" size="lg">
              Explore Services
            </LinkButton>
          </div>
        </FadeIn>

        <FadeIn
          direction="left"
          delay={0.15}
          className="hidden md:block relative"
        >
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-gold/10 rounded-full blur-3xl opacity-50" />
          <div className="relative glass-card rounded-3xl p-6 luxury-shadow border border-white/50">
            <div className="relative rounded-2xl overflow-hidden mb-8 shadow-inner aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1740"
                alt="Senior chartered accountants reviewing financial reports"
                fill
                sizes="(min-width: 768px) 40vw, 0vw"
                className="object-cover"
              />
            </div>
            <div className="flex justify-between items-end px-2">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                  Best Value · Your Time
                </p>
                <p className="font-display text-2xl text-navy font-bold">
                  Strategic Stewardship
                </p>
              </div>
              <div className="p-4 bg-gold-light rounded-2xl shadow-lg">
                <TrendingUp
                  className="w-8 h-8 text-navy"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
