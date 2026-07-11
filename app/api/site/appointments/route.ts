import { NextRequest, NextResponse } from "next/server";
import {
  submitAppointment,
  submitContact,
  isSiteApiError,
  isSiteApiConfigured,
} from "@/lib/api/site-client";
import { to24HourTime } from "@/lib/format-time";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

async function submitAppointmentAsContact(input: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  time24: string;
  service?: string;
  notes?: string;
  pageUrl?: string;
}) {
  const messageLines = [
    input.notes,
    `Preferred date: ${input.date}`,
    `Preferred time: ${input.time} (${input.time24})`,
    input.service ? `Service: ${input.service}` : null,
  ].filter(Boolean);

  return submitContact({
    name: `${input.firstName} ${input.lastName}`,
    email: input.email,
    phone: input.phone,
    subject: `Appointment Request${input.service ? `: ${input.service}` : ""}`,
    message: messageLines.join("\n"),
    service: input.service,
    serviceType: "appointment",
    metadata: {
      first_name: input.firstName,
      last_name: input.lastName,
      date: input.date,
      time: input.time24,
      preferred_time_12h: input.time,
      service: input.service,
      notes: input.notes,
      ...(input.pageUrl ? { page_url: input.pageUrl } : {}),
      source: "bb-salon-website",
      fallback_reason: "appointments_api_unavailable",
    },
  });
}

export async function POST(request: NextRequest) {
  if (!isSiteApiConfigured()) {
    return NextResponse.json(
      { success: false, message: "Booking service is not configured." },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
      service,
      notes,
      department_id,
      metadata,
    } = body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
      return NextResponse.json(
        { success: false, message: "All required booking fields must be provided." },
        { status: 422 }
      );
    }

    let time24: string;
    try {
      time24 = to24HourTime(time);
      if (time24.length === 5) {
        time24 = `${time24}:00`;
      }
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid time format. Please select a valid time slot." },
        { status: 422 }
      );
    }

    const pageUrl = request.headers.get("referer") ?? undefined;

    const appointmentPayload = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      date,
      time: time24,
      service,
      notes,
      department_id,
      metadata: {
        ...metadata,
        ...(pageUrl ? { page_url: pageUrl } : {}),
        source: "bb-salon-website",
        preferred_time_12h: time,
      },
    };

    try {
      const result = await submitAppointment(appointmentPayload);
      return NextResponse.json(result.data, { status: result.status });
    } catch (appointmentError) {
      console.error("Appointment API failed, falling back to contact:", appointmentError);

      const fallback = await submitAppointmentAsContact({
        firstName,
        lastName,
        email,
        phone,
        date,
        time,
        time24,
        service,
        notes,
        pageUrl,
      });

      return NextResponse.json(
        {
          ...fallback.data,
          message:
            "Appointment request received. Our team will confirm your booking shortly.",
          fallback: true,
        },
        { status: fallback.status }
      );
    }
  } catch (error) {
    if (isSiteApiError(error)) {
      return NextResponse.json(
        { success: false, message: error.message, errors: error.errors },
        { status: error.status }
      );
    }

    console.error("Appointment submission error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to submit appointment. Please try again." },
      { status: 500 }
    );
  }
}
