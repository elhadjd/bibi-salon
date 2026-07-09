import { PageHero } from "@/components/ui/section-heading";
import { FadeIn } from "@/animations/motion";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = generateSEO({
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" description="Last updated: March 1, 2026" />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <FadeIn className="prose prose-lg max-w-none text-muted">
            <h2 className="text-2xl font-medium text-primary">Introduction</h2>
            <p>
              {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy
              and is committed to protecting your personal data. This privacy policy explains how we
              collect, use, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="mt-8 text-2xl font-medium text-primary">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6">
              <li>Contact information (name, email, phone number)</li>
              <li>Appointment and booking details</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Website usage data and cookies</li>
              <li>Communications you send to us</li>
            </ul>

            <h2 className="mt-8 text-2xl font-medium text-primary">How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6">
              <li>Process and confirm appointments</li>
              <li>Communicate about your services</li>
              <li>Send promotional offers (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="mt-8 text-2xl font-medium text-primary">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              data against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="mt-8 text-2xl font-medium text-primary">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. To exercise these
              rights, contact us at {siteConfig.email}.
            </p>

            <h2 className="mt-8 text-2xl font-medium text-primary">Contact Us</h2>
            <p>
              For privacy-related inquiries, contact us at {siteConfig.email} or {siteConfig.phone}.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
