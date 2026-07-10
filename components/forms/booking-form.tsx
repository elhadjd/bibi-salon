"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Calendar, CheckCircle } from "lucide-react";
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

const bookingSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const timeSlots = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
];

export function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Booking submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-border/50 bg-white p-8 text-center shadow-sm sm:p-12">
        <CheckCircle className="mx-auto h-14 w-14 text-secondary sm:h-16 sm:w-16" />
        <h3 className="mt-6 text-xl font-medium text-primary sm:text-2xl">Appointment Request Received!</h3>
        <p className="mt-3 text-sm text-muted sm:text-base">
          Thank you for booking with Bb Salon SUITES. We&apos;ll confirm your appointment
          within 2 hours via email and text message.
        </p>
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
                  {service.name} — from ${service.startingPrice}
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
      </div>

      <Button type="submit" variant="secondary" size="lg" className="mt-6 h-14 w-full text-base sm:mt-8" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Request Appointment"}
      </Button>

      <p className="mt-4 text-center text-xs text-muted">
        We&apos;ll confirm within 2 hours. New clients: mention $20 OFF!
      </p>
    </form>
  );
}
