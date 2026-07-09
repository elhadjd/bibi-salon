import { TeamSection } from "@/sections/team/team-section";
import { PageHero } from "@/components/ui/section-heading";
import { CTASection } from "@/sections/shared/cta-section";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Meet the Team",
  description:
    "Meet the award-winning beauty professionals at Lumière Beauty Studio in Columbus, OH — master colorists, stylists, barbers, estheticians, and lash artists.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Team", url: "/team" },
        ]}
      />
      <PageHero
        eyebrow="Our Artists"
        title="Meet the Team"
        description="Passionate professionals dedicated to making you look and feel extraordinary."
      />
      <TeamSection showAll />
      <CTASection />
    </>
  );
}
