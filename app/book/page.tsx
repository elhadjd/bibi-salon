import { BookingForm } from "@/components/forms/booking-form";
import { PageHero } from "@/components/ui/section-heading";
import { FadeIn } from "@/animations/motion";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Phone, Clock, MapPin, MessageCircle } from "lucide-react";

export const metadata = generateSEO({
  title: "Book Hair Braiding Appointment Columbus OH",
  description:
    "Book box braids, knotless braids, faux locs, lashes & makeup at Bb Salon SUITES Columbus OH. Services from $100. Open daily 8AM-9:30PM. New clients get $20 OFF!",
  path: "/book",
  keywords:
    "book braids Columbus Ohio, hair braiding appointment near me, knotless braids booking Columbus, salon appointment Livingston Ave",
});

export default function BookPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;

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
        description="Choose your service, date, and time. We'll confirm within 2 hours. No need to pick a stylist — we'll match you with the best available braider."
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <BookingForm />
            </div>

            <FadeIn>
              <div className="space-y-4 sm:space-y-6">
                <div className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:p-6">
                  <h3 className="font-medium text-primary">Need Help Booking?</h3>
                  <p className="mt-2 text-sm text-muted">
                    Call or WhatsApp us — we&apos;re happy to help you book the perfect service.
                  </p>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="mt-4 flex items-center gap-2 text-secondary hover:underline"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    {siteConfig.phone}
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-2 text-accent hover:underline"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" />
                    {siteConfig.whatsappDisplay}
                  </a>
                </div>

                <div className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:p-6">
                  <h3 className="flex items-center gap-2 font-medium text-primary">
                    <Clock className="h-5 w-5 shrink-0 text-secondary" />
                    Salon Hours
                  </h3>
                  <p className="mt-3 text-sm font-medium text-accent">{siteConfig.hoursSummary}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted">
                    {siteConfig.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span>{h.day}</span>
                        <span className="text-right">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:p-6">
                  <h3 className="flex items-center gap-2 font-medium text-primary">
                    <MapPin className="h-5 w-5 shrink-0 text-secondary" />
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
