export interface DepositCheckoutPayload {
  amount: number;
  currency: string;
  description: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  appointment: {
    service?: string;
    date: string;
    time: string;
  };
  returnUrl: string;
  cancelUrl: string;
  metadata?: Record<string, unknown>;
}

export interface DepositCheckoutResult {
  checkoutUrl: string;
  paymentId?: string;
}

interface PaymentApiErrorBody {
  message?: string;
  errors?: Record<string, string[]>;
}

function getPaymentApiConfig() {
  const baseUrl = process.env.PAYMENT_API_BASE_URL?.replace(/\/$/, "");
  const apiKey = process.env.PAYMENT_API_KEY;

  if (!baseUrl || !apiKey) {
    throw new Error("Payment API is not configured. Set PAYMENT_API_BASE_URL and PAYMENT_API_KEY.");
  }

  return { baseUrl, apiKey };
}

function extractCheckoutUrl(data: unknown): string | undefined {
  if (!data || typeof data !== "object") return undefined;

  const body = data as Record<string, unknown>;
  const candidates = [
    body.checkout_url,
    body.checkoutUrl,
    body.payment_url,
    body.paymentUrl,
    body.redirect_url,
    body.redirectUrl,
    body.url,
  ];

  for (const candidate of candidates) {
    if (typeof candidate === "string" && candidate.startsWith("http")) {
      return candidate;
    }
  }

  if (body.data && typeof body.data === "object") {
    return extractCheckoutUrl(body.data);
  }

  return undefined;
}

function extractErrorMessage(data: unknown): string | undefined {
  if (typeof data === "string" && data.trim()) return data;
  if (data && typeof data === "object") {
    const body = data as PaymentApiErrorBody;
    if (body.errors) {
      const validationMessage = Object.values(body.errors).flat().join(" ");
      if (validationMessage) return validationMessage;
    }
    if (body.message) return body.message;
  }
  return undefined;
}

export class PaymentApiRequestError extends Error {
  constructor(
    message: string,
    public status: number,
    public errors?: Record<string, string[]>
  ) {
    super(message);
    this.name = "PaymentApiRequestError";
  }
}

export function isPaymentApiError(error: unknown): error is PaymentApiRequestError {
  return (
    error instanceof PaymentApiRequestError ||
    (typeof error === "object" &&
      error !== null &&
      "name" in error &&
      (error as PaymentApiRequestError).name === "PaymentApiRequestError" &&
      "status" in error)
  );
}

export function isPaymentApiConfigured(): boolean {
  return Boolean(process.env.PAYMENT_API_BASE_URL && process.env.PAYMENT_API_KEY);
}

export async function createDepositCheckout(
  payload: DepositCheckoutPayload
): Promise<DepositCheckoutResult> {
  const { baseUrl, apiKey } = getPaymentApiConfig();
  const endpoint = process.env.PAYMENT_API_CHECKOUT_PATH || "/payments/checkout";

  const response = await fetch(`${baseUrl}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
      key: apiKey,
    },
    body: JSON.stringify({
      amount: payload.amount,
      currency: payload.currency,
      description: payload.description,
      customer: payload.customer,
      appointment: payload.appointment,
      return_url: payload.returnUrl,
      cancel_url: payload.cancelUrl,
      success_url: payload.returnUrl,
      metadata: {
        type: "booking_deposit",
        source: "bb-salon-website",
        ...payload.metadata,
      },
      key: apiKey,
    }),
    cache: "no-store",
  });

  const rawText = await response.text();
  let data: unknown = null;

  if (rawText) {
    try {
      data = JSON.parse(rawText);
    } catch {
      data = rawText;
    }
  }

  if (!response.ok) {
    throw new PaymentApiRequestError(
      extractErrorMessage(data) || `Payment API request failed (HTTP ${response.status}).`,
      response.status,
      data && typeof data === "object" ? (data as PaymentApiErrorBody).errors : undefined
    );
  }

  const checkoutUrl = extractCheckoutUrl(data);
  if (!checkoutUrl) {
    throw new PaymentApiRequestError(
      "Payment API did not return a checkout URL.",
      502
    );
  }

  const paymentId =
    data && typeof data === "object"
      ? ((data as Record<string, unknown>).payment_id as string | undefined) ||
        ((data as Record<string, unknown>).paymentId as string | undefined)
      : undefined;

  return { checkoutUrl, paymentId };
}
