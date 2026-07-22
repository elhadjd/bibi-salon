import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Phone, Check, ArrowRight } from "lucide-react";
import { FadeIn } from "@/animations/motion";
import { Breadcrumbs } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/sections/shared/cta-section";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { generateSEO } from "@/lib/seo";
import { services, getServiceBySlug } from "@/constants/services";
import { siteConfig } from "@/config/site";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return generateSEO({
    title: `${service.name} Columbus OH`,
    description: `${service.description} Book ${service.name.toLowerCase()} at Bb Salon SUITES in Columbus, Ohio. Call ${siteConfig.phone} for pricing. Open daily 8AM-9:30PM.`,
    path: `/services/${service.slug}`,
    image: service.image,
    keywords: `${service.name} Columbus Ohio, ${service.name} near me, African hair braiding Columbus, Black hair salon Columbus OH`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const relatedServices = services
    .filter((s) => s.slug !== service.slug && s.category === service.category)
    .slice(0, 3);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.name, url: `/services/${service.slug}` },
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={`${service.name} at Bb Salon SUITES`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Badge variant="secondary">{service.category}</Badge>
              <h1 className="mt-4 text-4xl font-medium text-primary sm:text-5xl">
                {service.name}
              </h1>
              <p className="mt-4 text-lg text-muted">{service.description}</p>

              <div className="mt-6 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-muted">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span>{service.duration}</span>
                </div>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-2 text-secondary hover:underline"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call {siteConfig.phone} for pricing</span>
                </a>
              </div>

              <div className="mt-8 space-y-4 text-muted leading-relaxed">
                <p>{service.longDescription}</p>
              </div>

              {service.benefits && (
                <ul className="mt-6 space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-muted">
                      <Check className="h-4 w-4 text-secondary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="secondary" size="lg" asChild>
                  <Link href={`/book?service=${service.slug}`}>
                    Book {service.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">All Services</Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          {relatedServices.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-medium text-primary">Related Services</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {relatedServices.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="group rounded-2xl border border-border/50 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <h3 className="font-medium text-primary group-hover:text-secondary">
                      {related.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted line-clamp-2">{related.description}</p>
                    <p className="mt-3 text-sm font-medium text-secondary">Call for pricing</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
