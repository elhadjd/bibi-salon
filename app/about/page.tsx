import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, Heart } from "lucide-react";
import { FadeIn } from "@/animations/motion";
import { PageHero } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/sections/shared/cta-section";
import { TeamSection } from "@/sections/team/team-section";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = generateSEO({
  title: "About Us",
  description:
    "Learn about Bb Salon SUITES — Columbus, Ohio's destination for expert hair braiding, lashes, makeup, and luxury salon suites for rent at $150/week.",
  path: "/about",
});

const values = [
  {
    icon: Award,
    title: "Braiding Excellence",
    description: "Our artists specialize in knotless braids, box braids, locs, twists, and protective styles with expert technique.",
  },
  {
    icon: Heart,
    title: "Client Care",
    description: "Every client is treated with warmth and respect. Your comfort and satisfaction are our top priorities.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We support both clients and the independent beauty professionals who rent suites in our building.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />
      <PageHero
        eyebrow="Our Story"
        title="Bb Salon SUITES & Hair Braiding"
        description="Columbus's destination for expert braiding, beauty services, and affordable luxury salon suites for rent."
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80"
                  alt="Hair braiding at Bb Salon SUITES Columbus Ohio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-medium text-primary sm:text-4xl">
                Where Braiding Meets Business
              </h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  Bb Salon SUITES was founded by {siteConfig.owner} with a vision to create a space
                  where braiding artistry thrives and beauty professionals can grow their independent
                  businesses.
                </p>
                <p>
                  Located at 2177 Livingston Ave — just 7 minutes from downtown Columbus — we offer
                  expert hair braiding, lashes, eyebrows, and makeup services starting at $100,
                  plus luxury salon suites for rent at only $150 per week with all materials and
                  Wi-Fi included.
                </p>
                <p>
                  Whether you&apos;re looking for stunning knotless braids or a professional suite
                  to launch your beauty career, Bb Salon SUITES is your destination.
                </p>
              </div>
              <Button variant="secondary" className="mt-8" asChild>
                <Link href="/book">
                  Book Your Appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl font-medium text-primary sm:text-4xl">Our Values</h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <FadeIn key={value.title}>
                <div className="rounded-2xl border border-border/50 bg-white p-8 text-center">
                  <value.icon className="mx-auto h-10 w-10 text-accent" />
                  <h3 className="mt-4 text-xl font-medium text-primary">{value.title}</h3>
                  <p className="mt-3 text-sm text-muted">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <TeamSection showAll />
      <CTASection
        description={`Book today and get ${siteConfig.promotion}! Services start at $100.`}
      />
    </>
  );
}
