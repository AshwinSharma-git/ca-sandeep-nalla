import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Stat = { label: string; val: string };

type Props = {
  stats: Stat[];
  bgImage?: string;
};

export function StatsRibbon({ stats, bgImage }: Props) {
  return (
    <section className="bg-ink py-20 overflow-hidden relative">
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover opacity-10 grayscale"
          />
        </div>
      )}
      <Container className="relative z-10">
        <dl
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center"
          aria-label="Firm statistics"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-4">
              <dd className="font-display text-4xl md:text-5xl text-lime-soft font-bold">
                {stat.val}
              </dd>
              <dt className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
