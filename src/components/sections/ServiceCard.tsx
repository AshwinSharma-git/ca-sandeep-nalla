import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

type Props = {
  title: string;
  desc: string;
  icon: LucideIcon;
  href: string;
};

export function ServiceCard({ title, desc, icon: Icon, href }: Props) {
  return (
    <article className="group bg-white p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl border border-lime/10 shadow-lg flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full">
      <div>
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-ink flex items-center justify-center text-lime-soft mb-6 sm:mb-8 group-hover:scale-110 transition-transform shadow-lg">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
        </div>
        <div
          aria-hidden="true"
          className="w-12 h-1 bg-lime/30 mb-6 group-hover:w-20 transition-all"
        />
        <h3 className="font-display text-2xl text-ink font-bold mb-4">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">{desc}</p>
      </div>
      <Link
        href={href}
        className="flex items-center gap-2 text-ink font-bold text-xs uppercase tracking-widest hover:text-lime transition-colors"
        aria-label={`Inquire about ${title}`}
      >
        Inquire Details
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
