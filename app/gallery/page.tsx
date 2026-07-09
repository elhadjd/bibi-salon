import { GallerySection } from "@/sections/gallery/gallery-section";
import { PageHero } from "@/components/ui/section-heading";
import { CTASection } from "@/sections/shared/cta-section";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Gallery",
  description:
    "Browse our portfolio of stunning hair transformations, color work, nail art, lash extensions, and barber services at Lumière Beauty Studio in Columbus, OH.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
        ]}
      />
      <PageHero
        eyebrow="Portfolio"
        title="Our Work Speaks for Itself"
        description="Explore transformations crafted by our talented team of beauty professionals."
      />
      <GallerySection showFilters showHeading={false} />
      <CTASection />
    </>
  );
}
