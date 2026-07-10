import { FeaturedServicesSection } from "@/sections/services/featured-services";
import { PageHero } from "@/components/ui/section-heading";
import { CTASection } from "@/sections/shared/cta-section";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { generateSEO } from "@/lib/seo";
import { services } from "@/constants/services";

export const metadata = generateSEO({
  title: "Hair Braiding Services Columbus OH",
  description:
    "Box braids, knotless braids, faux locs, cornrows, sew-ins, lashes & makeup at Bb Salon SUITES Columbus Ohio. African hair braiding salon on Livingston Ave. From $100.",
  path: "/services",
  keywords: "hair braiding services Columbus Ohio, box braids Columbus, knotless braids near me, African hair salon Columbus",
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
