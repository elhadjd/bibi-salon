import { FeaturedServicesSection } from "@/sections/services/featured-services";
import { PageHero } from "@/components/ui/section-heading";
import { CTASection } from "@/sections/shared/cta-section";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { generateSEO } from "@/lib/seo";
import { services } from "@/constants/services";

export const metadata = generateSEO({
  title: "Beauty Services",
  description:
    "Explore hair braiding and beauty services at Bb Salon SUITES in Columbus, OH — knotless braids, box braids, locs, extensions, lashes, eyebrows, and makeup from $100.",
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
