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
    "Learn about Lumière Beauty Studio — Columbus, Ohio's premier luxury salon with 12+ years of excellence, award-winning artists, and a commitment to transformative beauty experiences.",
  path: "/about",
});

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue mastery in every service, continuously training and evolving with industry innovations.",
  },
  {
    icon: Heart,
    title: "Care",
    description: "Every client is treated as family. Your comfort, confidence, and satisfaction are our highest priorities.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster a supportive environment for both clients and the independent professionals who call Lumière home.",
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
        title="A Legacy of Beauty & Excellence"
        description="For over a decade, Lumière Beauty Studio has been Columbus's destination for luxury beauty experiences and professional growth."
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80"
                  alt="Lumière Beauty Studio elegant salon interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-medium text-primary sm:text-4xl">
                Where Artistry Meets Sanctuary
              </h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  Founded in 2014, Lumière Beauty Studio was born from a vision to create something
                  extraordinary in Columbus&apos;s beauty landscape — a space where exceptional artistry,
                  premium products, and genuine hospitality converge.
                </p>
                <p>
                  What began as a boutique salon has evolved into a premier beauty destination and
                  professional community, housing {siteConfig.stats.professionals} independent beauty
                  professionals and serving over {siteConfig.stats.happyClients.toLocaleString()} clients.
                </p>
                <p>
                  Our name, Lumière — French for &ldquo;light&rdquo; — reflects our mission to illuminate
                  the unique beauty in every person who walks through our doors.
                </p>
              </div>
              <Button variant="secondary" className="mt-8" asChild>
                <Link href="/book">
                  Experience Lumière
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
                  <value.icon className="mx-auto h-10 w-10 text-secondary" />
                  <h3 className="mt-4 text-xl font-medium text-primary">{value.title}</h3>
                  <p className="mt-3 text-sm text-muted">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <TeamSection showAll />
      <CTASection />
    </>
  );
}
