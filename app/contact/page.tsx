import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/ui/section-heading";
import { FadeIn } from "@/animations/motion";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = generateSEO({
  title: "Contact Us",
  description:
    "Contact Bb Salon SUITES in Columbus, OH. Call (614) 622-4624, WhatsApp +1 (380) 265-5069, or visit us at 2177 Livingston Ave.",
  path: "/contact",
});

export default function ContactPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.full)}`;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        description="We'd love to hear from you. Reach out for appointments, suite inquiries, or any questions."
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-3">
            <FadeIn className="space-y-6">
              <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
                <Phone className="h-6 w-6 text-secondary" />
                <h3 className="mt-3 font-medium text-primary">Phone</h3>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="mt-1 block text-muted hover:text-secondary"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
                <Mail className="h-6 w-6 text-secondary" />
                <h3 className="mt-3 font-medium text-primary">Email</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 block text-muted hover:text-secondary"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
                <MessageCircle className="h-6 w-6 text-secondary" />
                <h3 className="mt-3 font-medium text-primary">WhatsApp</h3>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-muted hover:text-secondary"
                >
                  {siteConfig.whatsappDisplay}
                </a>
              </div>

              <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
                <MapPin className="h-6 w-6 text-secondary" />
                <h3 className="mt-3 font-medium text-primary">Address</h3>
                <p className="mt-1 text-muted">{siteConfig.address.full}</p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-secondary hover:underline"
                >
                  Get Directions →
                </a>
                <p className="mt-3 text-sm text-muted">
                  <strong className="text-primary">Parking:</strong> {siteConfig.parking}
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
                <Clock className="h-6 w-6 text-secondary" />
                <h3 className="mt-3 font-medium text-primary">Business Hours</h3>
                <ul className="mt-2 space-y-1 text-sm text-muted">
                  {siteConfig.hours.map((h) => (
                    <li key={h.day} className="flex justify-between">
                      <span>{h.day}</span>
                      <span>{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
                <h3 className="font-medium text-primary">Follow Us</h3>
                <div className="mt-4 flex gap-3">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="rounded-full bg-background p-3 text-muted transition-colors hover:bg-secondary hover:text-primary"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="rounded-full bg-background p-3 text-muted transition-colors hover:bg-secondary hover:text-primary"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href={siteConfig.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="rounded-full bg-background p-3 text-muted transition-colors hover:bg-secondary hover:text-primary"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>

            <div className="lg:col-span-2">
              <FadeIn delay={0.2}>
                <ContactForm />
              </FadeIn>
            </div>
          </div>

          <FadeIn className="mt-12">
            <div className="overflow-hidden rounded-2xl border border-border/50 shadow-lg">
              <iframe
                title="Bb Salon SUITES on Google Maps"
                src={`https://maps.google.com/maps?q=${siteConfig.address.coordinates.lat},${siteConfig.address.coordinates.lng}&z=15&output=embed`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
