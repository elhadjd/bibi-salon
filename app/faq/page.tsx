import { PageHero } from "@/components/ui/section-heading";
import { FadeIn } from "@/animations/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTASection } from "@/sections/shared/cta-section";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/schema";
import { generateSEO } from "@/lib/seo";
import { generalFAQs, suiteFAQs } from "@/constants/salon-suites";

export const metadata = generateSEO({
  title: "FAQ",
  description:
    "Frequently asked questions about Lumière Beauty Studio in Columbus, OH — appointments, services, salon suite rentals, parking, and policies.",
  path: "/faq",
});

const allFAQs = [...generalFAQs, ...suiteFAQs];

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ]}
      />
      <FAQSchema faqs={allFAQs} />

      <PageHero
        eyebrow="Help Center"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services, appointments, and salon suite rentals."
      />

      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <FadeIn>
            <h2 className="mb-6 text-2xl font-medium text-primary">General Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {generalFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`general-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          <FadeIn className="mt-12">
            <h2 className="mb-6 text-2xl font-medium text-primary">Salon Suite Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {suiteFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`suite-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
