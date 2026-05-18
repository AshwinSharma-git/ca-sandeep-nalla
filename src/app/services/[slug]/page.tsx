import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { servicePages } from "@/lib/service-pages";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) return {};
  return {
    title: data.title,
    description: data.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `/services/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    description: data.metaDescription,
    provider: {
      "@type": "AccountingService",
      name: "CA Sandeep Nalla & Co.",
    },
    areaServed: { "@type": "Country", name: "India" },
  };

  return (
    <>
      <ServiceDetailTemplate data={data} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
