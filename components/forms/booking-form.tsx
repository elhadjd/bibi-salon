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
import { teamMembers } from "@/constants/team";

const bookingSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  professional: z.string().min(1, "Please select a professional"),
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
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM",
];

interface BookingFormProps {
  defaultProfessional?: string;
}

export function BookingForm({ defaultProfessional }: BookingFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      professional: defaultProfessional || "",
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Booking submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-border/50 bg-white p-12 text-center shadow-sm">
        <CheckCircle className="mx-auto h-16 w-16 text-secondary" />
        <h3 className="mt-6 text-2xl font-medium text-primary">Appointment Request Received!</h3>
        <p className="mt-3 text-muted">
          Thank you for booking with Lumière Beauty Studio. We&apos;ll confirm your appointment
          within 2 hours via email and text message.
        </p>
        <p className="mt-2 text-sm text-muted">
          A calendar invitation will be sent once your appointment is confirmed.
        </p>
      </div>
    );
  }

  const minDate = new Date().toISOString().split("T")[0];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-border/50 bg-white p-8 shadow-sm"
      noValidate
    >
      <div className="mb-8 flex items-center gap-3">
        <Calendar className="h-6 w-6 text-secondary" />
        <h2 className="text-xl font-medium text-primary">Book Your Appointment</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="service">Service *</Label>
          <Select
            value={watch("service")}
            onValueChange={(value) => setValue("service", value, { shouldValidate: true })}
          >
            <SelectTrigger id="service" aria-invalid={!!errors.service}>
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
          <Label htmlFor="professional">Professional *</Label>
          <Select
            value={watch("professional")}
            onValueChange={(value) => setValue("professional", value, { shouldValidate: true })}
          >
            <SelectTrigger id="professional" aria-invalid={!!errors.professional}>
              <SelectValue placeholder="Select a professional" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Available Professional</SelectItem>
              {teamMembers.map((member) => (
                <SelectItem key={member.id} value={member.id}>
                  {member.name} — {member.role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.professional && (
            <p className="text-sm text-accent" role="alert">{errors.professional.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Preferred Date *</Label>
          <Input
            id="date"
            type="date"
            min={minDate}
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
            <SelectTrigger id="time" aria-invalid={!!errors.time}>
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
          <Input id="firstName" {...register("firstName")} aria-invalid={!!errors.firstName} />
          {errors.firstName && (
            <p className="text-sm text-accent" role="alert">{errors.firstName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" {...register("lastName")} aria-invalid={!!errors.lastName} />
          {errors.lastName && (
            <p className="text-sm text-accent" role="alert">{errors.lastName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" type="tel" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && (
            <p className="text-sm text-accent" role="alert">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && (
            <p className="text-sm text-accent" role="alert">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="notes">Special Requests (Optional)</Label>
          <Textarea
            id="notes"
            placeholder="Any allergies, preferences, or special requests..."
            {...register("notes")}
          />
        </div>
      </div>

      <Button type="submit" variant="secondary" size="lg" className="mt-8 w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Request Appointment"}
      </Button>

      <p className="mt-4 text-center text-xs text-muted">
        By submitting, you agree to our cancellation policy. We&apos;ll confirm within 2 hours.
      </p>
    </form>
  );
}
