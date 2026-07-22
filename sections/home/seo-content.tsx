import Link from "next/link";
import { FadeIn } from "@/animations/motion";
import { siteConfig } from "@/config/site";
import { seoKeywords } from "@/config/keywords";

export function SEOContentSection() {
  return (
    <section className="section-padding bg-white" aria-label="About our Columbus braiding salon">
      <div className="container-wide">
        <FadeIn>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-medium text-primary sm:text-3xl lg:text-4xl text-balance">
              Columbus, Ohio&apos;s Trusted Hair Braiding &amp; Beauty Salon
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                <strong className="text-primary">Bb Salon SUITES</strong> is a premier{" "}
                <strong>Black hair salon</strong> and <strong>African hair braiding</strong> studio
                located at {siteConfig.address.full}. We specialize in{" "}
                <Link href="/services/box-braids" className="text-accent hover:underline">box braids</Link>,{" "}
                <Link href="/services/knotless-braids" className="text-accent hover:underline">knotless braids</Link>,{" "}
                <Link href="/services/faux-locs" className="text-accent hover:underline">faux locs</Link>,{" "}
                <Link href="/services/cornrows" className="text-accent hover:underline">cornrows</Link>,{" "}
                <Link href="/services/sew-ins" className="text-accent hover:underline">sew-in weaves</Link>,{" "}
                <Link href="/services/lashes" className="text-accent hover:underline">lash extensions</Link>, and{" "}
                <Link href="/services/makeup" className="text-accent hover:underline">professional makeup</Link>{" "}
                for women in Columbus and surrounding areas.
              </p>
              <p>
                Searching for <em>&ldquo;hair braiding near me&rdquo;</em> or{" "}
                <em>&ldquo;box braids Columbus Ohio&rdquo;</em>? Our expert braiders deliver flawless
                protective styles tailored to your look. Call {siteConfig.phone} for pricing. We&apos;re open daily{" "}
                {siteConfig.hoursSummary.toLowerCase()} — including Sundays — making us one of the
                most accessible braiding salons in Columbus.
              </p>
              <p>
                We also offer affordable{" "}
                <Link href="/salon-suites" className="text-accent hover:underline">salon suites for rent</Link>{" "}
                at just ${siteConfig.suitePriceWeekly}/week with all materials and Wi-Fi included.
                Perfect for hairstylists, braiders, lash artists, and makeup artists looking to
                grow their business in a professional environment just 7 minutes from downtown Columbus.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {seoKeywords.services.slice(0, 10).map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs text-muted sm:text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
