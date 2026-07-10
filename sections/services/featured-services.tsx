import { Clock, DollarSign, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/animations/motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { formatPrice } from "@/lib/utils";
import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.name} at Bb Salon SUITES`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-secondary">
          {service.category}
        </p>
        <h3 className="mt-1 text-xl font-medium text-primary">{service.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{service.description}</p>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-secondary" />
            {service.duration}
          </span>
          <span className="flex items-center gap-1">
            <DollarSign className="h-4 w-4 text-secondary" />
            From {formatPrice(service.startingPrice)}
          </span>
        </div>
        <Button variant="ghost" className="mt-4 w-full group-hover:bg-primary group-hover:text-white" asChild>
          <Link href={`/services/${service.slug}`}>
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}

interface FeaturedServicesProps {
  services: Service[];
  showAll?: boolean;
}

export function FeaturedServicesSection({ services, showAll = false }: FeaturedServicesProps) {
  return (
    <section className="section-padding bg-background" aria-labelledby="services-heading">
      <div className="container-wide">
        <FadeIn>
          <SectionHeading
            eyebrow="Our Services"
            title="Signature Beauty Experiences"
            description="From transformative color to precision cuts, every service is crafted with artistry and care."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {!showAll && (
          <FadeIn className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
