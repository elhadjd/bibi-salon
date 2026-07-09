import { FeaturedServicesSection } from "@/sections/services/featured-services";
import { PageHero } from "@/components/ui/section-heading";
import { CTASection } from "@/sections/shared/cta-section";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { generateSEO } from "@/lib/seo";
import { services } from "@/constants/services";

export const metadata = generateSEO({
  title: "Beauty Services",
  description:
    "Explore luxury beauty services at Lumière Beauty Studio in Columbus, OH — hair styling, color, balayage, braids, extensions, barber, nails, lashes, and facials.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <PageHero
        eyebrow="Services"
        title="Luxury Beauty Services"
        description="Every service is an experience — crafted with premium products, expert technique, and personalized care."
      />
      <FeaturedServicesSection services={services} showAll />
      <CTASection />
    </>
  );
}
