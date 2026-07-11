import { NextRequest, NextResponse } from "next/server";
import { submitContact, isSiteApiError, isSiteApiConfigured } from "@/lib/api/site-client";
import { to24HourTime } from "@/lib/format-time";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

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
    } = body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
      return NextResponse.json(
        { success: false, message: "All required booking fields must be provided." },
        { status: 422 }
      );
    }

    let time24 = time;
    try {
      time24 = to24HourTime(time);
      if (time24.length === 5) {
        time24 = `${time24}:00`;
      }
    } catch {
      // Keep original time string if conversion fails
    }

    const pageUrl = request.headers.get("referer") ?? undefined;
    const serviceName = service || "General";

    const messageLines = [
      notes,
      `Preferred date: ${date}`,
      `Preferred time: ${time} (${time24})`,
      `Service: ${serviceName}`,
    ].filter(Boolean);

    const result = await submitContact({
      name: `${firstName} ${lastName}`,
      email,
      phone,
      subject: `Appointment Request: ${serviceName}`,
      message: messageLines.join("\n"),
      service: serviceName,
      serviceType: "appointment",
      metadata: {
        first_name: firstName,
        last_name: lastName,
        date,
        time: time24,
        preferred_time_12h: time,
        service: serviceName,
        notes,
        ...(pageUrl ? { page_url: pageUrl } : {}),
        source: "bb-salon-website",
      },
    });

    return NextResponse.json(result.data, { status: result.status });
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
