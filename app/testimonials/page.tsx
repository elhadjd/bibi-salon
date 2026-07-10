import { TestimonialsSection } from "@/sections/testimonials/testimonials-section";
import { PageHero } from "@/components/ui/section-heading";
import { FadeIn } from "@/animations/motion";
import { StarRating } from "@/components/ui/testimonial-card";
import { CTASection } from "@/sections/shared/cta-section";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = generateSEO({
  title: "Testimonials & Reviews",
  description:
    "Read 350+ five-star reviews from satisfied clients at Bb Salon SUITES in Columbus, OH.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Testimonials", url: "/testimonials" },
        ]}
      />
      <PageHero
        eyebrow="Client Reviews"
        title="Loved by Columbus"
        description="Hear from clients who trust Bb Salon SUITES for their braiding and beauty needs."
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="text-6xl font-medium text-primary">4.9</span>
              <div className="text-left">
                <StarRating rating={5} />
                <p className="mt-1 text-muted">
                  Based on {siteConfig.stats.reviews.toLocaleString()}+ Google Reviews
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <TestimonialsSection showAll />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <FadeIn className="rounded-2xl border border-border/50 bg-white p-12 text-center">
            <h2 className="text-2xl font-medium text-primary">Video Testimonials</h2>
            <p className="mt-3 text-muted">
              Video testimonial gallery coming soon. Follow us on Instagram for client transformation
              stories and behind-the-scenes content.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex aspect-video items-center justify-center rounded-2xl bg-background text-sm text-muted"
                  aria-hidden="true"
                >
                  Video Placeholder {i}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
