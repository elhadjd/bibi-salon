import { Award, Heart, Sparkles, Shield } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/animations/motion";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  {
    icon: Award,
    title: "Award-Winning Artists",
    description:
      "Our team includes nationally recognized stylists and colorists trained at the industry's top academies.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description:
      "We use only professional-grade, luxury products from brands like Olaplex, Redken, and Dermalogica.",
  },
  {
    icon: Heart,
    title: "Personalized Experience",
    description:
      "Every visit begins with a consultation to understand your goals, lifestyle, and unique beauty.",
  },
  {
    icon: Shield,
    title: "Hygiene Excellence",
    description:
      "Rigorous sanitation protocols and HEPA filtration ensure your safety and peace of mind.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="why-heading">
      <div className="container-wide">
        <FadeIn>
          <SectionHeading
            eyebrow="The Lumière Difference"
            title="Why Clients Choose Us"
            description="More than a salon — a sanctuary where expertise, luxury, and genuine care converge."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="rounded-2xl border border-border/50 bg-background p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10">
                  <reason.icon className="h-7 w-7 text-secondary" />
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
