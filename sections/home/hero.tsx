"use client";

import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden" aria-label="Hero">
      <Image
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=85"
        alt="Luxury beauty salon interior at Lumière Beauty Studio in Columbus, Ohio"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />

      <div className="container-wide relative z-10 pt-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-secondary">
            Columbus, Ohio&apos;s Premier Beauty Destination
          </p>
          <h1 className="text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-7xl text-balance">
            Where Beauty Becomes{" "}
            <span className="text-secondary">Art</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 text-balance">
            Experience luxury hair, color, nails, and skincare in an elegant sanctuary
            designed for your transformation. Trusted by over 15,000 clients across Columbus.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/book">
                Book Appointment
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href={`tel:${siteConfig.phoneRaw}`}>
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:grid-cols-4">
          <Counter end={siteConfig.stats.yearsInBusiness} suffix="+" label="Years of Excellence" />
          <Counter end={siteConfig.stats.happyClients} suffix="+" label="Happy Clients" />
          <Counter end={siteConfig.stats.professionals} suffix="+" label="Professionals" />
          <Counter end={siteConfig.stats.reviews} suffix="+" label="5-Star Reviews" />
        </div>
      </div>
    </section>
  );
}
