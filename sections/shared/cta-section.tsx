import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { FadeIn } from "@/animations/motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "gold";
}

export function CTASection({
  title = "Ready for Your Transformation?",
  description = "Book your appointment today and experience the Lumière difference. New clients receive a complimentary consultation.",
  primaryLabel = "Book Appointment",
  primaryHref = "/book",
  secondaryLabel = "Call Now",
  secondaryHref = `tel:${siteConfig.phoneRaw}`,
  variant = "dark",
}: CTASectionProps) {
  return (
    <section
      className={
        variant === "dark"
          ? "luxury-gradient section-padding"
          : "section-padding bg-secondary/10"
      }
      aria-label="Call to action"
    >
      <div className="container-wide">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2
            className={`text-3xl font-medium sm:text-4xl lg:text-5xl text-balance ${
              variant === "dark" ? "text-white" : "text-primary"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-4 text-lg text-balance ${
              variant === "dark" ? "text-white/70" : "text-muted"
            }`}
          >
            {description}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="secondary" size="lg" asChild>
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={
                variant === "dark"
                  ? "border-white/30 text-white hover:bg-white hover:text-primary"
                  : ""
              }
              asChild
            >
              <a href={secondaryHref}>
                <Phone className="h-5 w-5" />
                {secondaryLabel}
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
