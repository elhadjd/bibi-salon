"use client";

import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/ui/logo";
import { brandImages } from "@/constants/images";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden" aria-label="Hero">
      <Image
        src={brandImages.banner}
        alt={brandImages.bannerAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <Image
        src={brandImages.heroPortrait}
        alt={brandImages.heroPortraitAlt}
        fill
        priority
        className="object-cover object-top opacity-50 mix-blend-overlay"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/75 to-primary/90 sm:bg-gradient-to-r" />

      <div className="container-wide relative z-10 pb-10 pt-28 sm:pb-16 sm:pt-32">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="text-center lg:text-left">
            <Badge variant="accent" className="mb-4 bg-accent text-white shadow-lg sm:mb-6">
              {siteConfig.promotion}
            </Badge>

            <div className="mx-auto mb-6 inline-block w-full max-w-md rounded-2xl bg-white px-4 py-4 shadow-2xl sm:px-6 sm:py-5 lg:mx-0">
              <Logo size="xl" showLink={false} className="mx-auto lg:mx-0" />
            </div>

            <p className="mb-2 text-base font-medium italic text-secondary sm:text-lg">
              {siteConfig.tagline}
            </p>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/80 sm:text-sm">
              {siteConfig.subtitle} · Columbus, OH
            </p>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-white/90 text-balance sm:text-lg lg:mx-0">
              Expert African hair braiding, lashes, eyebrows &amp; makeup in Columbus.
              Salon suites for rent at ${siteConfig.suitePriceWeekly}/week. {siteConfig.hoursSummary}.
              Call {siteConfig.phone} for service pricing.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <Button variant="secondary" size="lg" className="h-14 w-full text-base sm:w-auto" asChild>
                <Link href="/book">
                  Book Appointment
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 w-full border-white/40 bg-white/10 text-white sm:w-auto hover:bg-white hover:text-primary"
                asChild
              >
                <a href={`tel:${siteConfig.phoneRaw}`}>
                  <Phone className="h-5 w-5" />
                  {siteConfig.phone}
                </a>
              </Button>
              <Button variant="accent" size="lg" className="h-14 w-full sm:w-auto" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border-4 border-secondary/60 shadow-2xl">
              <Image
                src={brandImages.heroPortrait}
                alt={brandImages.heroPortraitAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 400px"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-secondary/30 bg-black/40 p-4 backdrop-blur-md sm:mt-16 sm:grid-cols-4 sm:gap-6 sm:p-6 lg:mt-20 lg:p-8 [&_.text-muted]:text-white/70 [&_.text-primary]:text-white [&_p]:text-white">
          <Counter end={siteConfig.stats.yearsInBusiness} suffix="+" label="Years of Excellence" />
          <Counter end={siteConfig.stats.happyClients} suffix="+" label="Happy Clients" />
          <Counter end={siteConfig.stats.professionals} suffix="+" label="Professionals" />
          <Counter end={siteConfig.stats.reviews} suffix="+" label="5-Star Reviews" />
        </div>
      </div>
    </section>
  );
}
