import { PageHero } from "@/components/ui/section-heading";
import { FadeIn } from "@/animations/motion";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = generateSEO({
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}. Read our policies regarding appointments, cancellations, and salon suite rentals.`,
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" description="Last updated: March 1, 2026" />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <FadeIn className="prose prose-lg max-w-none text-muted">
            <h2 className="text-2xl font-medium text-primary">Agreement to Terms</h2>
            <p>
              By accessing or using the services of {siteConfig.name}, you agree to be bound by these
              Terms of Service. If you do not agree, please do not use our services.
            </p>

            <h2 className="mt-8 text-2xl font-medium text-primary">Appointments & Cancellations</h2>
            <p>
              Appointments are confirmed upon receipt of confirmation from our team. We require 24-hour
              notice for cancellations. Late cancellations or no-shows may be charged 50% of the
              scheduled service fee.
            </p>

            <h2 className="mt-8 text-2xl font-medium text-primary">Pricing</h2>
            <p>
              All prices listed on our website are starting prices and may vary based on hair length,
              complexity, and additional services. Final pricing will be discussed during your
              consultation or appointment.
            </p>

            <h2 className="mt-8 text-2xl font-medium text-primary">Salon Suite Rentals</h2>
            <p>
              Salon suite rental agreements are governed by separate lease terms provided at the time
              of application. Suite renters must maintain valid professional licenses and liability
              insurance throughout their tenancy.
            </p>

            <h2 className="mt-8 text-2xl font-medium text-primary">Liability</h2>
            <p>
              {siteConfig.name} and its independent professionals are not liable for allergic reactions
              or adverse results when clients fail to disclose relevant health information or when
              aftercare instructions are not followed.
            </p>

            <h2 className="mt-8 text-2xl font-medium text-primary">Contact</h2>
            <p>
              Questions about these terms? Contact us at {siteConfig.email} or {siteConfig.phone}.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
