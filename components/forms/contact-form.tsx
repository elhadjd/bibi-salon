"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { getFormErrorMessage, parseApiResponse } from "@/lib/api/form-errors";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitError(null);

    try {
      const response = await fetch("/api/site/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          serviceType: "contact",
        }),
      });

      const result = await parseApiResponse(response);
      if (!result.ok) {
        setSubmitError(result.message || "Unable to send your message. Please try again.");
        return;
      }

      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(getFormErrorMessage(error, "Unable to send your message. Please try again."));
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-border/50 bg-white p-12 text-center shadow-sm">
        <CheckCircle className="mx-auto h-16 w-16 text-secondary" />
        <h3 className="mt-6 text-2xl font-medium text-primary">Message Sent!</h3>
        <p className="mt-3 text-muted">
          Thank you for reaching out. We&apos;ll respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-border/50 bg-white p-8 shadow-sm"
      noValidate
    >
      {submitError && (
        <p className="mb-6 rounded-lg border border-accent/30 bg-accent/5 px-4 py-3 text-sm text-accent" role="alert">
          {submitError}
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && <p className="text-sm text-accent" role="alert">{errors.name.message}</p>}
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

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="subject">Subject *</Label>
          <Input id="subject" {...register("subject")} aria-invalid={!!errors.subject} />
          {errors.subject && <p className="text-sm text-accent" role="alert">{errors.subject.message}</p>}
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea id="message" rows={5} {...register("message")} aria-invalid={!!errors.message} />
          {errors.message && <p className="text-sm text-accent" role="alert">{errors.message.message}</p>}
        </div>
      </div>

      <Button type="submit" variant="secondary" size="lg" className="mt-8 w-full" disabled={isSubmitting}>
        <Send className="h-4 w-4" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
