"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import type { FAQ as FAQItem } from "@/lib/faqs";

type Props = {
  items: FAQItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function FAQ({
  items,
  eyebrow = "Common Questions",
  title = "Answers Before You Ask",
  description = "Don't see your question? Reach out — a senior CA will get back the same business day.",
}: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section className="py-24 md:py-32 bg-mist">
      <Container className="max-w-4xl">
        <FadeIn className="mb-12 md:mb-16">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            align="center"
          />
        </FadeIn>

        <ul className="space-y-4">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={item.q}
                className="bg-white rounded-2xl border border-lime/10 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-6 sm:px-8 py-5 flex items-center justify-between gap-6 group"
                >
                  <span className="font-display text-lg text-ink font-bold leading-snug">
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 w-9 h-9 rounded-full bg-pearl border border-lime/20 flex items-center justify-center text-ink group-hover:bg-lime group-hover:text-white transition-colors"
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 sm:px-8 pb-6 text-gray-600 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
