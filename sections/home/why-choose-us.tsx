import { Award, Heart, Sparkles, Shield } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/animations/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

const reasons = [
  {
    icon: Award,
    title: "Expert Braiders",
    description:
      "Our team specializes in knotless braids, box braids, locs, twists, and all protective styles with years of experience.",
  },
  {
    icon: Sparkles,
    title: "Personalized Quotes",
    description:
      `Every style is unique. Call ${siteConfig.phone} for pricing tailored to your hair and service.`,
  },
  {
    icon: Heart,
    title: "Scalp-Friendly Techniques",
    description:
      "We prioritize your hair health with gentle braiding methods that protect your natural hair and scalp.",
  },
  {
    icon: Shield,
    title: "Clean & Professional",
    description:
      "A beautiful pink and gold salon environment with strict hygiene standards for your safety and comfort.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="why-heading">
      <div className="container-wide">
        <FadeIn>
          <SectionHeading
            eyebrow="The Bb Salon Difference"
            title="Why Clients Choose Us"
            description="Columbus's trusted destination for braiding, beauty services, and salon suite rentals."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="rounded-2xl border border-border/50 bg-background p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <reason.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-primary">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{reason.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
