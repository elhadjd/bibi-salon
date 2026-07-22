import { NextRequest, NextResponse } from "next/server";
import { submitAppointment, isSiteApiError, isSiteApiConfigured } from "@/lib/api/site-client";
import { to24HourTime } from "@/lib/format-time";
import { siteConfig } from "@/config/site";

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
      department_id,
      metadata,
      amount,
      success_url,
      cancel_url,
    } = body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
      return NextResponse.json(
        { success: false, message: "All required booking fields must be provided." },
        { status: 422 }
      );
    }

    if (amount != null && (!success_url || !cancel_url)) {
      return NextResponse.json(
        { success: false, message: "success_url and cancel_url are required when amount is provided." },
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
    const origin = request.nextUrl.origin;

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
      ...(amount != null
        ? {
            amount: Number(amount),
            success_url:
              success_url ||
              `${origin}/book/payment/return?status=success&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: cancel_url || `${origin}/book/payment/return?status=cancelled`,
          }
        : {}),
      metadata: {
        ...metadata,
        ...(pageUrl ? { page_url: pageUrl } : {}),
        source: "bb-salon-website",
        preferred_time_12h: time,
        site_url: siteConfig.url,
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
