import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/animations/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/constants/testimonials";

interface TestimonialsSectionProps {
  limit?: number;
  showAll?: boolean;
}

export function TestimonialsSection({ limit = 3, showAll = false }: TestimonialsSectionProps) {
  const displayed = showAll ? testimonials : testimonials.slice(0, limit);

  return (
    <section className="section-padding bg-white" aria-labelledby="testimonials-heading">
      <div className="container-wide">
        <FadeIn>
          <SectionHeading
            eyebrow="Client Love"
            title="What Our Clients Say"
            description="Join thousands of satisfied clients who trust Lumière for their beauty needs."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayed.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {!showAll && (
          <FadeIn className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/testimonials">
                Read More Reviews
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
