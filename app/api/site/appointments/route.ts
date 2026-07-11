import { NextRequest, NextResponse } from "next/server";
import { submitAppointment, SiteApiRequestError, isSiteApiConfigured } from "@/lib/api/site-client";
import { to24HourTime } from "@/lib/format-time";

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
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid time format. Please select a valid time slot." },
        { status: 422 }
      );
    }

    const pageUrl = request.headers.get("referer") ?? undefined;

    const result = await submitAppointment({
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
    });

    return NextResponse.json(result.data, { status: result.status });
  } catch (error) {
    if (error instanceof SiteApiRequestError) {
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
