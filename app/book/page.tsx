import { BookingForm } from "@/components/forms/booking-form";
import { PageHero } from "@/components/ui/section-heading";
import { FadeIn } from "@/animations/motion";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Phone, Clock, MapPin } from "lucide-react";

export const metadata = generateSEO({
  title: "Book Appointment",
  description:
    "Book your luxury beauty appointment at Lumière Beauty Studio in Columbus, OH. Hair, color, nails, lashes, facials, and barber services available.",
  path: "/book",
});

interface BookPageProps {
  searchParams: Promise<{ professional?: string; service?: string }>;
}

export default async function BookPage({ searchParams }: BookPageProps) {
  const params = await searchParams;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Book Appointment", url: "/book" },
        ]}
      />
      <PageHero
        eyebrow="Reservations"
        title="Book Your Appointment"
        description="Select your service, preferred professional, and time. We'll confirm within 2 hours."
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <BookingForm defaultProfessional={params.professional} />
            </div>

            <FadeIn>
              <div className="space-y-6">
                <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
                  <h3 className="font-medium text-primary">Need Help Booking?</h3>
                  <p className="mt-2 text-sm text-muted">
                    Our team is happy to assist you in finding the perfect service and professional.
                  </p>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="mt-4 flex items-center gap-2 text-secondary hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    {siteConfig.phone}
                  </a>
                </div>

                <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
                  <h3 className="flex items-center gap-2 font-medium text-primary">
                    <Clock className="h-5 w-5 text-secondary" />
                    Salon Hours
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {siteConfig.hours.map((h) => (
                      <li key={h.day} className="flex justify-between">
                        <span>{h.day}</span>
                        <span>{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
                  <h3 className="flex items-center gap-2 font-medium text-primary">
                    <MapPin className="h-5 w-5 text-secondary" />
                    Location
                  </h3>
                  <p className="mt-2 text-sm text-muted">{siteConfig.address.full}</p>
                  <p className="mt-2 text-sm text-muted">{siteConfig.parking}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
