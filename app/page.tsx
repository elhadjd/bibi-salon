import { Metadata } from "next";
import { homePageDescription, homePageTitle } from "@/config/keywords";
import { generateSEO } from "@/lib/seo";
import { HeroSection } from "@/sections/home/hero";
import { FeaturedServicesSection } from "@/sections/services/featured-services";
import { GallerySection } from "@/sections/gallery/gallery-section";
import { TestimonialsSection } from "@/sections/testimonials/testimonials-section";
import { TeamSection } from "@/sections/team/team-section";
import { WhyChooseUsSection } from "@/sections/home/why-choose-us";
import { LocationSection } from "@/sections/home/location";
import { SEOContentSection } from "@/sections/home/seo-content";
import { CTASection } from "@/sections/shared/cta-section";
import { getFeaturedServices } from "@/constants/services";

export const metadata: Metadata = {
  ...generateSEO({
    description: homePageDescription,
    path: "/",
  }),
  title: homePageTitle,
  description: homePageDescription,
};

export default function HomePage() {
  const featuredServices = getFeaturedServices();

  return (
    <>
      <HeroSection />
      <FeaturedServicesSection services={featuredServices.slice(0, 6)} />
      <GallerySection limit={8} />
      <TestimonialsSection />
      <TeamSection limit={3} />
      <WhyChooseUsSection />
      <SEOContentSection />
      <LocationSection />
      <CTASection />
      <CTASection
        title="Beauty Professional? Rent a Suite for $150/Week"
        description="All materials & Wi-Fi included. Only 7 minutes from downtown Columbus. Call Bibiche to schedule a tour!"
        primaryLabel="Explore Salon Suites"
        primaryHref="/salon-suites"
        secondaryLabel="Call (614) 622-4624"
        secondaryHref="tel:+16146224624"
        variant="gold"
      />
    </>
  );
}
