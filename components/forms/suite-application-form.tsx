"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
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
import { salonSuites } from "@/constants/salon-suites";

const suiteSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  profession: z.string().min(2, "Profession is required"),
  experience: z.string().min(1, "Experience level is required"),
  preferredSuite: z.string().optional(),
  startDate: z.string().min(1, "Preferred start date is required"),
  message: z.string().optional(),
});

type SuiteFormValues = z.infer<typeof suiteSchema>;

export function SuiteApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SuiteFormValues>({
    resolver: zodResolver(suiteSchema),
  });

  const onSubmit = async (data: SuiteFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Suite application submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-border/50 bg-white p-12 text-center shadow-sm">
        <CheckCircle className="mx-auto h-16 w-16 text-secondary" />
        <h3 className="mt-6 text-2xl font-medium text-primary">Application Received!</h3>
        <p className="mt-3 text-muted">
          Thank you for your interest in renting a salon suite at Lumière. Our team will
          contact you within 48 hours to schedule a tour.
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
      <h2 className="mb-8 text-xl font-medium text-primary">Suite Rental Application</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" {...register("firstName")} aria-invalid={!!errors.firstName} />
          {errors.firstName && <p className="text-sm text-accent" role="alert">{errors.firstName.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" {...register("lastName")} aria-invalid={!!errors.lastName} />
          {errors.lastName && <p className="text-sm text-accent" role="alert">{errors.lastName.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && <p className="text-sm text-accent" role="alert">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" type="tel" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <p className="text-sm text-accent" role="alert">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="profession">Profession *</Label>
          <Input id="profession" placeholder="e.g., Hairstylist, Esthetician" {...register("profession")} aria-invalid={!!errors.profession} />
          {errors.profession && <p className="text-sm text-accent" role="alert">{errors.profession.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">Years of Experience *</Label>
          <Select
            value={watch("experience")}
            onValueChange={(value) => setValue("experience", value, { shouldValidate: true })}
          >
            <SelectTrigger id="experience" aria-invalid={!!errors.experience}>
              <SelectValue placeholder="Select experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-2">0–2 years</SelectItem>
              <SelectItem value="3-5">3–5 years</SelectItem>
              <SelectItem value="6-10">6–10 years</SelectItem>
              <SelectItem value="10+">10+ years</SelectItem>
            </SelectContent>
          </Select>
          {errors.experience && <p className="text-sm text-accent" role="alert">{errors.experience.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="preferredSuite">Preferred Suite</Label>
          <Select
            value={watch("preferredSuite")}
            onValueChange={(value) => setValue("preferredSuite", value)}
          >
            <SelectTrigger id="preferredSuite">
              <SelectValue placeholder="Select a suite (optional)" />
            </SelectTrigger>
            <SelectContent>
              {salonSuites.filter((s) => s.available).map((suite) => (
                <SelectItem key={suite.id} value={suite.id}>
                  {suite.name} — ${suite.price}/mo
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="startDate">Preferred Start Date *</Label>
          <Input id="startDate" type="date" min={minDate} {...register("startDate")} aria-invalid={!!errors.startDate} />
          {errors.startDate && <p className="text-sm text-accent" role="alert">{errors.startDate.message}</p>}
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message">Tell Us About Yourself</Label>
          <Textarea
            id="message"
            placeholder="Your clientele, specialties, business goals..."
            {...register("message")}
          />
        </div>
      </div>

      <Button type="submit" variant="secondary" size="lg" className="mt-8 w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
