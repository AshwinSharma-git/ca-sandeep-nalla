import { Container } from "@/components/ui/Container";
import { BrandDivider } from "@/components/ui/BrandDivider";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center pt-32 pb-20">
      <Container className="text-center max-w-xl space-y-6">
        <p className="font-display text-7xl text-lime font-bold">404</p>
        <BrandDivider align="center" />
        <h1 className="font-display text-4xl text-ink font-bold">
          Page not found
        </h1>
        <p className="text-gray-600">
          The page you&apos;re looking for has moved or never existed. Let us
          guide you back to safer ground.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <LinkButton href="/">Return Home</LinkButton>
          <LinkButton href="/contact" variant="secondary">
            Contact Us
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
