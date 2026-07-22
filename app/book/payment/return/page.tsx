import { PageHero } from "@/components/ui/section-heading";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { PaymentReturnStatus } from "@/components/booking/payment-return-status";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Booking Deposit Payment",
  description: "Booking deposit payment status at Bb Salon SUITES Columbus OH.",
  path: "/book/payment/return",
  noIndex: true,
});

interface PaymentReturnPageProps {
  searchParams: Promise<{ status?: string; session_id?: string }>;
}

export default async function PaymentReturnPage({ searchParams }: PaymentReturnPageProps) {
  const { status, session_id: sessionId } = await searchParams;
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
            ? "Thank you! We're confirming your deposit and securing your appointment spot."
            : isCancelled
              ? "Your deposit payment was cancelled. Your appointment may still be booked — call us to confirm."
              : "Review your booking deposit payment status below."
        }
      />

      <section className="section-padding">
        <div className="container-wide max-w-xl">
          <PaymentReturnStatus status={status} sessionId={sessionId} />
        </div>
      </section>
    </>
  );
}
