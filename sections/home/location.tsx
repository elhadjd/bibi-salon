import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/animations/motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function LocationSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.full)}`;

  return (
    <section className="section-padding bg-background" aria-labelledby="location-heading">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
              Visit Us
            </p>
            <h2 id="location-heading" className="mt-3 text-3xl font-medium text-primary sm:text-4xl">
              Find Us on Livingston Ave
            </h2>
            <p className="mt-4 text-lg text-muted">
              Located at 2177 Livingston Ave in Columbus — only 7 minutes from downtown
              with free on-site parking.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="font-medium text-primary">Address</p>
                  <p className="text-muted">{siteConfig.address.full}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="font-medium text-primary">Phone</p>
                  <a href={`tel:${siteConfig.phoneRaw}`} className="text-muted hover:text-secondary">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="font-medium text-primary">Hours</p>
                  <ul className="text-sm text-muted">
                    {siteConfig.hours.map((h) => (
                      <li key={h.day}>
                        {h.day}: {h.hours}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-muted">
              <strong className="text-primary">Parking:</strong> {siteConfig.parking}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="secondary" asChild>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="overflow-hidden rounded-2xl border border-border/50 shadow-lg">
              <iframe
                title="Bb Salon SUITES location on Google Maps"
                src={`https://maps.google.com/maps?q=${siteConfig.address.coordinates.lat},${siteConfig.address.coordinates.lng}&z=15&output=embed`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
