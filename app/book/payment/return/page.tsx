import Link from "next/link";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/section-heading";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { bookingConfig } from "@/config/booking";

export const metadata = generateSEO({
  title: "Booking Deposit Payment",
  description: "Booking deposit payment status at Bb Salon SUITES Columbus OH.",
  path: "/book/payment/return",
  noIndex: true,
});

interface PaymentReturnPageProps {
  searchParams: Promise<{ status?: string }>;
}

export default async function PaymentReturnPage({ searchParams }: PaymentReturnPageProps) {
  const { status } = await searchParams;
  const isSuccess = status === "success";
  const isCancelled = status === "cancelled";

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Book Appointment", url: "/book" },
          { name: "Payment", url: "/book/payment/return" },
        ]}
      />
      <PageHero
        eyebrow="Booking Deposit"
        title={isSuccess ? "Deposit Received" : isCancelled ? "Payment Cancelled" : "Payment Status"}
        description={
          isSuccess
            ? "Thank you! Your deposit has been received and your appointment spot is secured."
            : isCancelled
              ? "Your deposit payment was cancelled. Your appointment may still be booked — call us to confirm."
              : "Review your booking deposit payment status below."
        }
      />

      <section className="section-padding">
        <div className="container-wide max-w-xl">
          <div className="rounded-2xl border border-border/50 bg-white p-8 text-center shadow-sm sm:p-12">
            {isSuccess ? (
              <CheckCircle className="mx-auto h-14 w-14 text-secondary sm:h-16 sm:w-16" />
            ) : (
              <XCircle className="mx-auto h-14 w-14 text-accent sm:h-16 sm:w-16" />
            )}

            <p className="mt-6 text-sm text-muted sm:text-base">
              {isSuccess
                ? `Your ${bookingConfig.depositLabel} has been applied to secure your appointment. We'll see you soon!`
                : isCancelled
                  ? `You can try again when booking online, or call ${siteConfig.phone} to pay your deposit by phone.`
                  : `If you need help with your ${bookingConfig.depositLabel}, call ${siteConfig.phone}.`}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/book">Book Another Appointment</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
