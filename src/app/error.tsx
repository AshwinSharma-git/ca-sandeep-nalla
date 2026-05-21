"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrandDivider } from "@/components/ui/BrandDivider";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[70vh] flex items-center pt-32 pb-20">
      <Container className="text-center max-w-xl space-y-6">
        <BrandDivider align="center" />
        <h1 className="font-display text-4xl text-ink font-bold">
          Something went wrong
        </h1>
        <p className="text-gray-600">
          We&apos;ve been notified and our team is investigating. Please try
          again or contact our support team.
        </p>
        <div className="flex justify-center pt-4">
          <Button onClick={() => reset()}>Try again</Button>
        </div>
      </Container>
    </section>
  );
}
