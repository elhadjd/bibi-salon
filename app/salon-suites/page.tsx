import Image from "next/image";
import {
  TrendingUp,
  MapPin,
  Sparkles,
  Users,
  Calendar,
  Megaphone,
  Check,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/animations/motion";
import { PageHero } from "@/components/ui/section-heading";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { SuiteApplicationForm } from "@/components/forms/suite-application-form";
import { CTASection } from "@/sections/shared/cta-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/schema";
import { generateSEO } from "@/lib/seo";
import {
  salonSuites,
  suiteBenefits,
  suiteAmenities,
  suiteFAQs,
} from "@/constants/salon-suites";
import { formatPrice } from "@/lib/utils";

export const metadata = generateSEO({
  title: "Salon Suites for Rent",
  description:
    "Rent a luxury salon suite at Lumière Beauty Studio in Columbus, OH. Flexible terms, premium amenities, and a thriving professional community for hairstylists, barbers, estheticians, and beauty professionals.",
  path: "/salon-suites",
});

const iconMap = {
  TrendingUp,
  MapPin,
  Sparkles,
  Users,
  Calendar,
  Megaphone,
};

export default function SalonSuitesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Salon Suites", url: "/salon-suites" },
        ]}
      />
      <FAQSchema faqs={suiteFAQs} />

      <PageHero
        eyebrow="For Beauty Professionals"
        title="Your Dream Salon Suite Awaits"
        description="Build your business in Columbus's most prestigious beauty destination. Premium suites, flexible terms, and a thriving professional community."
      />

      <section className="section-padding">
        <div className="container-wide">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Lumière"
              title="Benefits of Suite Rental"
              description="Everything you need to grow your independent beauty business."
            />
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {suiteBenefits.map((benefit) => {
              const Icon = iconMap[benefit.icon as keyof typeof iconMap];
              return (
                <StaggerItem key={benefit.title}>
                  <div className="rounded-2xl border border-border/50 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
                    <Icon className="h-8 w-8 text-secondary" />
                    <h3 className="mt-4 text-lg font-medium text-primary">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-muted">{benefit.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="text-3xl font-medium text-primary">Included Amenities</h2>
              <p className="mt-4 text-muted">
                Focus on your craft while we handle the rest. Every suite rental includes access to
                our premium shared amenities.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {suiteAmenities.map((amenity) => (
                  <li key={amenity} className="flex items-start gap-2 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80"
                  alt="Luxury salon suite interior at Lumière Beauty Studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <FadeIn>
            <SectionHeading
              eyebrow="Available Now"
              title="Salon Suite Pricing"
              description="Transparent pricing with no hidden fees. All utilities and amenities included."
            />
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2">
            {salonSuites.map((suite) => (
              <FadeIn key={suite.id}>
                <article className="overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={suite.image}
                      alt={suite.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <Badge
                      variant={suite.available ? "secondary" : "outline"}
                      className="absolute right-4 top-4"
                    >
                      {suite.available ? "Available" : "Leased"}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-primary">{suite.name}</h3>
                    <p className="mt-1 text-sm text-muted">{suite.size}</p>
                    <p className="mt-4 text-3xl font-medium text-secondary">
                      {formatPrice(suite.price)}
                      <span className="text-base font-normal text-muted">/month</span>
                    </p>
                    <ul className="mt-4 space-y-2">
                      {suite.amenities.map((amenity) => (
                        <li key={amenity} className="flex items-center gap-2 text-sm text-muted">
                          <Check className="h-4 w-4 text-secondary" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background" id="apply">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="text-3xl font-medium text-primary">Apply for a Suite</h2>
              <p className="mt-4 text-muted">
                Ready to take the next step in your beauty career? Submit your application and
                we&apos;ll schedule a personal tour of our available suites.
              </p>
              <div className="mt-8 space-y-4 text-sm text-muted">
                <p>
                  <strong className="text-primary">Requirements:</strong> Valid Ohio professional
                  license, liability insurance, and established or growing clientele.
                </p>
                <p>
                  <strong className="text-primary">Next Steps:</strong> Application review within
                  48 hours, suite tour, lease signing, and move-in within 2 weeks.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <SuiteApplicationForm />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <FadeIn>
            <SectionHeading title="Suite Rental FAQ" />
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="w-full">
              {suiteFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`suite-faq-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Empire?"
        description="Schedule a tour of our available suites and see why Columbus's top beauty professionals choose Lumière."
        primaryLabel="Apply Now"
        primaryHref="/salon-suites#apply"
        secondaryLabel="Call Us"
        variant="dark"
      />
    </>
  );
}
