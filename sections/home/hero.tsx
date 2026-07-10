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
    <section className="relative flex min-h-screen items-center overflow-hidden" aria-label="Hero">
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
        className="object-cover object-top opacity-40 mix-blend-overlay"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-accent/40" />

      <div className="container-wide relative z-10 pt-24 pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge variant="accent" className="mb-6 bg-accent text-white shadow-lg">
              {siteConfig.promotion}
            </Badge>

            <div className="mb-6 rounded-2xl bg-white/95 p-4 shadow-2xl backdrop-blur-sm inline-block">
              <Logo size="lg" showLink={false} />
            </div>

            <p className="mb-2 text-lg font-medium italic text-secondary">
              {siteConfig.tagline}
            </p>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/80">
              {siteConfig.subtitle} · Columbus, OH
            </p>

            <p className="max-w-xl text-lg leading-relaxed text-white/90 text-balance">
              Expert braiding, lashes, eyebrows &amp; makeup from ${siteConfig.servicesStartAt}.
              Luxury salon suites for rent at ${siteConfig.suitePriceWeekly}/week — all materials
              &amp; Wi-Fi included. {siteConfig.hoursSummary}.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/book">
                  Book Appointment
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href={`tel:${siteConfig.phoneRaw}`}>
                  <Phone className="h-5 w-5" />
                  {siteConfig.phone}
                </a>
              </Button>
              <Button variant="accent" size="lg" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-3xl border-4 border-secondary/60 shadow-2xl">
              <Image
                src={brandImages.heroPortrait}
                alt={brandImages.heroPortraitAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 0vw, 400px"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-secondary/30 bg-black/30 p-6 backdrop-blur-md sm:grid-cols-4 lg:mt-20 lg:p-8 [&_p]:text-white [&_.text-primary]:text-white">
          <Counter end={siteConfig.stats.yearsInBusiness} suffix="+" label="Years of Excellence" />
          <Counter end={siteConfig.stats.happyClients} suffix="+" label="Happy Clients" />
          <Counter end={siteConfig.stats.professionals} suffix="+" label="Professionals" />
          <Counter end={siteConfig.stats.reviews} suffix="+" label="5-Star Reviews" />
        </div>
      </div>
    </section>
  );
}
