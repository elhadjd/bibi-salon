import { NextRequest, NextResponse } from "next/server";
import { submitContact, isSiteApiError, isSiteApiConfigured } from "@/lib/api/site-client";
import { sanitizeClientErrorMessage } from "@/lib/api/form-errors";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!isSiteApiConfigured()) {
    return NextResponse.json(
      { success: false, message: "Contact service is not configured." },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, subject, message, service, serviceType, metadata } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Name, email, and phone are required." },
        { status: 422 }
      );
    }

    const pageUrl = request.headers.get("referer") ?? undefined;

    const result = await submitContact({
      name,
      email,
      phone,
      subject,
      message,
      service,
      serviceType,
      metadata: {
        ...metadata,
        ...(pageUrl ? { page_url: pageUrl } : {}),
        source: "bb-salon-website",
      },
    });

    return NextResponse.json(result.data, { status: result.status });
  } catch (error) {
    if (isSiteApiError(error)) {
      return NextResponse.json(
        {
          success: false,
          message: sanitizeClientErrorMessage(
            error.message,
            "Unable to submit contact. Please try again."
          ),
          errors: error.errors,
        },
        { status: error.status }
      );
    }

    console.error("Contact submission error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to submit contact. Please try again." },
      { status: 500 }
    );
  }
}
