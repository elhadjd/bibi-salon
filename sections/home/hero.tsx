"use client";

import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden" aria-label="Hero">
      <Image
        src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=1920&q=85"
        alt="Hair braiding at Bb Salon SUITES in Columbus, Ohio"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-accent/30" />

      <div className="container-wide relative z-10 pt-20">
        <div className="max-w-3xl">
          <Badge variant="accent" className="mb-4 bg-accent text-white">
            {siteConfig.promotion}
          </Badge>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-secondary">
            Hair Braiding & Salon Suites — Columbus, OH
          </p>
          <h1 className="text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-7xl text-balance">
            <span className="text-accent">Bb</span> Salon{" "}
            <span className="text-secondary">SUITES</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 text-balance">
            Expert braiding, lashes, eyebrows & makeup starting at $100. Luxury salon suites
            for rent at just $150/week — all materials & Wi-Fi included. Only 7 minutes
            from downtown Columbus.
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
                {siteConfig.phone}
              </a>
            </Button>
            <Button
              variant="accent"
              size="lg"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 rounded-2xl border border-accent/20 bg-white/5 p-8 backdrop-blur-sm sm:grid-cols-4">
          <Counter end={siteConfig.stats.yearsInBusiness} suffix="+" label="Years of Excellence" />
          <Counter end={siteConfig.stats.happyClients} suffix="+" label="Happy Clients" />
          <Counter end={siteConfig.stats.professionals} suffix="+" label="Professionals" />
          <Counter end={siteConfig.stats.reviews} suffix="+" label="5-Star Reviews" />
        </div>
      </div>
    </section>
  );
}
