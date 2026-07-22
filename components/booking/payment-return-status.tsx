"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle, Loader2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingConfig } from "@/config/booking";
import { siteConfig } from "@/config/site";

const APPOINTMENT_ID_STORAGE_KEY = "bb_booking_appointment_id";

interface PaymentReturnStatusProps {
  status?: string;
  sessionId?: string;
}

export function PaymentReturnStatus({ status, sessionId }: PaymentReturnStatusProps) {
  const [confirmState, setConfirmState] = useState<"loading" | "success" | "error" | "idle">("idle");
  const [confirmMessage, setConfirmMessage] = useState<string | null>(null);

  const isSuccess = status === "success";
  const isCancelled = status === "cancelled";

  useEffect(() => {
    if (!isSuccess) {
      return;
    }

    if (!sessionId) {
      setConfirmState("error");
      setConfirmMessage(
        "We could not verify your deposit automatically. Your appointment may still be booked — please call us to confirm."
      );
      return;
    }

    const appointmentId = sessionStorage.getItem(APPOINTMENT_ID_STORAGE_KEY);
    if (!appointmentId) {
      setConfirmState("error");
      setConfirmMessage(
        "We could not verify your deposit automatically. Your appointment may still be booked — please call us to confirm."
      );
      return;
    }

    let cancelled = false;

    async function confirmPayment() {
      setConfirmState("loading");

      try {
        const response = await fetch("/api/site/appointments/confirm-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            appointment_id: Number(appointmentId),
            session_id: sessionId,
          }),
        });

        const data = await response.json().catch(() => ({}));

        if (cancelled) return;

        if (response.ok && data.success) {
          sessionStorage.removeItem(APPOINTMENT_ID_STORAGE_KEY);
          setConfirmState("success");
          setConfirmMessage(data.message || "Your deposit payment has been confirmed.");
          return;
        }

        setConfirmState("error");
        setConfirmMessage(
          data.message ||
            "We could not confirm your deposit online. Your appointment may still be booked — please call us."
        );
      } catch {
        if (!cancelled) {
          setConfirmState("error");
          setConfirmMessage(
            "We could not confirm your deposit online. Your appointment may still be booked — please call us."
          );
        }
      }
    }

    confirmPayment();

    return () => {
      cancelled = true;
    };
  }, [isSuccess, sessionId]);

  const showErrorIcon = isCancelled || confirmState === "error";
  const showLoadingIcon = isSuccess && confirmState === "loading";

  return (
    <div className="rounded-2xl border border-border/50 bg-white p-8 text-center shadow-sm sm:p-12">
      {showErrorIcon ? (
        <XCircle className="mx-auto h-14 w-14 text-accent sm:h-16 sm:w-16" />
      ) : showLoadingIcon ? (
        <Loader2 className="mx-auto h-14 w-14 animate-spin text-secondary sm:h-16 sm:w-16" />
      ) : (
        <CheckCircle className="mx-auto h-14 w-14 text-secondary sm:h-16 sm:w-16" />
      )}

      <p className="mt-6 text-sm text-muted sm:text-base">
        {isSuccess && confirmState === "loading"
          ? "Confirming your deposit payment..."
          : isSuccess && confirmState === "success"
            ? confirmMessage ||
              `Your ${bookingConfig.depositLabel} has been applied to secure your appointment. We'll see you soon!`
            : isSuccess && confirmState === "error"
              ? confirmMessage
              : isCancelled
                ? `Your deposit payment was cancelled. Your appointment may still be booked — call ${siteConfig.phone} to confirm or pay by phone.`
                : confirmMessage ||
                  `If you need help with your ${bookingConfig.depositLabel}, call ${siteConfig.phone}.`}
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
  );
}

export const bookingAppointmentIdStorageKey = APPOINTMENT_ID_STORAGE_KEY;
