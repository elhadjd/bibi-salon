import { NextRequest, NextResponse } from "next/server";
import { bookingConfig } from "@/config/booking";
import { siteConfig } from "@/config/site";
import {
  createDepositCheckout,
  isPaymentApiConfigured,
  isPaymentApiError,
} from "@/lib/api/payment-client";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!isPaymentApiConfigured()) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Online deposit payments are not configured yet. Please call us to secure your appointment.",
      },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, date, time, service, appointmentId } = body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
      return NextResponse.json(
        { success: false, message: "Customer and appointment details are required." },
        { status: 422 }
      );
    }

    const origin = request.nextUrl.origin;
    const returnUrl = `${origin}/book/payment/return?status=success`;
    const cancelUrl = `${origin}/book/payment/return?status=cancelled`;

    const result = await createDepositCheckout({
      amount: bookingConfig.depositAmount,
      currency: bookingConfig.depositCurrency,
      description: `${bookingConfig.depositLabel} — ${siteConfig.name}`,
      customer: {
        firstName,
        lastName,
        email,
        phone,
      },
      appointment: {
        service,
        date,
        time,
      },
      returnUrl,
      cancelUrl,
      metadata: {
        appointment_id: appointmentId,
        service,
        date,
        time,
      },
    });

    return NextResponse.json({
      success: true,
      checkoutUrl: result.checkoutUrl,
      paymentId: result.paymentId,
    });
  } catch (error) {
    if (isPaymentApiError(error)) {
      return NextResponse.json(
        { success: false, message: error.message, errors: error.errors },
        { status: error.status }
      );
    }

    console.error("Deposit payment creation error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to start deposit payment. Please try again." },
      { status: 500 }
    );
  }
}
