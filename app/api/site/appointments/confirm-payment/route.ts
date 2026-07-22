import { NextRequest, NextResponse } from "next/server";
import {
  confirmAppointmentPayment,
  isSiteApiConfigured,
  isSiteApiError,
} from "@/lib/api/site-client";
import { sanitizeClientErrorMessage } from "@/lib/api/form-errors";

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
    const { appointment_id, session_id } = body;

    if (!appointment_id || !session_id) {
      return NextResponse.json(
        { success: false, message: "appointment_id and session_id are required." },
        { status: 422 }
      );
    }

    const result = await confirmAppointmentPayment({
      appointment_id: Number(appointment_id),
      session_id: String(session_id),
    });

    return NextResponse.json(result.data, { status: result.status });
  } catch (error) {
    if (isSiteApiError(error)) {
      return NextResponse.json(
        {
          success: false,
          message: sanitizeClientErrorMessage(
            error.message,
            "Unable to confirm deposit payment. Please try again."
          ),
          errors: error.errors,
        },
        { status: error.status }
      );
    }

    console.error("Appointment payment confirmation error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to confirm deposit payment. Please try again." },
      { status: 500 }
    );
  }
}
