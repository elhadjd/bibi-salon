"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Calendar, CheckCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/constants/services";
import { bookingConfig } from "@/config/booking";
import { siteConfig } from "@/config/site";
import { bookingAppointmentIdStorageKey } from "@/components/booking/payment-return-status";
import { getFormErrorMessage, parseApiResponse } from "@/lib/api/form-errors";
import type { AppointmentPaymentInfo, AppointmentSubmitResponse } from "@/lib/api/site-client";

const bookingSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  notes: z.string().optional(),
  payDeposit: z.boolean().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

type AppointmentApiResponse = {
  success?: boolean;
  message?: string;
  appointment?: AppointmentSubmitResponse;
  payment?: AppointmentPaymentInfo;
};

const timeSlots = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
];

function getServiceName(slug: string): string {
  return services.find((s) => s.slug === slug)?.name ?? slug;
}

export function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [depositPending, setDepositPending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitNotice, setSubmitNotice] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      payDeposit: false,
    },
  });

  const payDeposit = watch("payDeposit");

  const onSubmit = async (data: BookingFormValues) => {
    setSubmitError(null);
    setSubmitNotice(null);

    try {
      const serviceName = getServiceName(data.service);
      const origin = window.location.origin;
      const successUrl = `${origin}/book/payment/return?status=success&session_id={CHECKOUT_SESSION_ID}`;
      const cancelUrl = `${origin}/book/payment/return?status=cancelled`;

      const response = await fetch("/api/site/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          date: data.date,
          time: data.time,
          service: serviceName,
          notes: data.notes,
          ...(data.payDeposit
            ? {
                amount: bookingConfig.depositAmount,
                success_url: successUrl,
                cancel_url: cancelUrl,
              }
            : {}),
          metadata: {
            pay_deposit: Boolean(data.payDeposit),
            deposit_amount: data.payDeposit ? bookingConfig.depositAmount : undefined,
          },
        }),
      });

      const result = await parseApiResponse<AppointmentApiResponse>(response);
      if (!result.ok) {
        setSubmitError(result.message || "Unable to submit your appointment. Please try again.");
        return;
      }

      const payment = result.data?.payment;
      const appointment = result.data?.appointment;

      if (payment?.payment_url) {
        setDepositPending(true);

        if (appointment?.id) {
          sessionStorage.setItem(bookingAppointmentIdStorageKey, String(appointment.id));
        }

        window.location.href = payment.payment_url;
        return;
      }

      if (data.payDeposit && payment?.status === "unavailable") {
        setIsSubmitted(true);
        setSubmitNotice(
          payment.message ||
            "Your appointment is confirmed, but online deposit payment is not available right now. Please call us to pay your deposit."
        );
        return;
      }

      setIsSubmitted(true);
    } catch (error) {
      setDepositPending(false);
      setSubmitError(getFormErrorMessage(error, "Unable to submit your appointment. Please try again."));
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-border/50 bg-white p-8 text-center shadow-sm sm:p-12">
        <CheckCircle className="mx-auto h-14 w-14 text-secondary sm:h-16 sm:w-16" />
        <h3 className="mt-6 text-xl font-medium text-primary sm:text-2xl">Appointment Confirmed!</h3>
        <p className="mt-3 text-sm text-muted sm:text-base">
          Your appointment at Bb Salon SUITES is confirmed. We&apos;ll see you at your scheduled
          date and time. A confirmation will be sent to your email and phone.
        </p>
        {submitNotice && (
          <p className="mt-4 rounded-lg border border-secondary/30 bg-secondary/5 px-4 py-3 text-sm text-muted" role="status">
            {submitNotice}
          </p>
        )}
        {submitError && (
          <p className="mt-4 rounded-lg border border-accent/30 bg-accent/5 px-4 py-3 text-sm text-accent" role="alert">
            {submitError}
          </p>
        )}
      </div>
    );
  }

  const minDate = new Date().toISOString().split("T")[0];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:p-8"
      noValidate
    >
      <div className="mb-6 flex items-center gap-3 sm:mb-8">
        <Calendar className="h-6 w-6 shrink-0 text-secondary" />
        <h2 className="text-lg font-medium text-primary sm:text-xl">Book Your Appointment</h2>
      </div>

      {submitError && !isSubmitted && (
        <p className="mb-6 rounded-lg border border-accent/30 bg-accent/5 px-4 py-3 text-sm text-accent" role="alert">
          {submitError}
        </p>
      )}

      <div className="mb-6 rounded-xl border border-secondary/20 bg-secondary/5 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
          <div>
            <p className="font-medium text-primary">Secure your spot with a ${bookingConfig.depositAmount} deposit</p>
            <p className="mt-1 text-sm text-muted">{bookingConfig.depositDescription}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="service">Service *</Label>
          <Select
            value={watch("service")}
            onValueChange={(value) => setValue("service", value, { shouldValidate: true })}
          >
            <SelectTrigger id="service" className="h-12 w-full" aria-invalid={!!errors.service}>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.slug} value={service.slug}>
                  {service.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-sm text-accent" role="alert">{errors.service.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Preferred Date *</Label>
          <Input
            id="date"
            type="date"
            min={minDate}
            className="h-12 w-full"
            {...register("date")}
            aria-invalid={!!errors.date}
          />
          {errors.date && (
            <p className="text-sm text-accent" role="alert">{errors.date.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Preferred Time *</Label>
          <Select
            value={watch("time")}
            onValueChange={(value) => setValue("time", value, { shouldValidate: true })}
          >
            <SelectTrigger id="time" className="h-12 w-full" aria-invalid={!!errors.time}>
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>
                  {slot}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.time && (
            <p className="text-sm text-accent" role="alert">{errors.time.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" className="h-12" {...register("firstName")} aria-invalid={!!errors.firstName} />
          {errors.firstName && (
            <p className="text-sm text-accent" role="alert">{errors.firstName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" className="h-12" {...register("lastName")} aria-invalid={!!errors.lastName} />
          {errors.lastName && (
            <p className="text-sm text-accent" role="alert">{errors.lastName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" type="tel" className="h-12" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && (
            <p className="text-sm text-accent" role="alert">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" className="h-12" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && (
            <p className="text-sm text-accent" role="alert">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="notes">Special Requests (Optional)</Label>
          <Textarea
            id="notes"
            placeholder="Hair length, style preferences, allergies..."
            {...register("notes")}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border/60 p-4">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-border text-secondary focus:ring-secondary"
              {...register("payDeposit")}
            />
            <span>
              <span className="block font-medium text-primary">
                Pay ${bookingConfig.depositAmount} deposit now to secure my appointment
              </span>
              <span className="mt-1 block text-sm text-muted">
                You&apos;ll be redirected to Stripe Checkout after booking. The deposit is applied to your service total.
              </span>
            </span>
          </label>
        </div>
      </div>

      <Button type="submit" variant="secondary" size="lg" className="mt-6 h-14 w-full text-base sm:mt-8" disabled={isSubmitting || depositPending}>
        {depositPending
          ? "Redirecting to Stripe..."
          : isSubmitting
            ? "Submitting..."
            : payDeposit
              ? `Book & Pay $${bookingConfig.depositAmount} Deposit`
              : "Book Appointment"}
      </Button>

      <p className="mt-4 text-center text-xs text-muted">
        Your appointment is confirmed as soon as you book. For pricing, call{" "}
        <a href={`tel:${siteConfig.phoneRaw}`} className="text-secondary hover:underline">
          {siteConfig.phone}
        </a>
        .
      </p>
    </form>
  );
}
