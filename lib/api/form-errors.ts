const TECHNICAL_ERROR_PATTERNS = [
  /SQLSTATE\[/i,
  /\bSQL:\s*(update|insert|select|delete)\b/i,
  /Unknown column/i,
  /Connection:\s*\w+/i,
  /field list/i,
  /PDOException/i,
  /Illuminate\\/i,
  /stack trace/i,
  /stripe_payment_id/i,
  /payment_invoices/i,
  /no active Stripe account/i,
  /Deposit amount was sent but/i,
  /External API/i,
  /SITE_API/i,
  /PAYMENT_API/i,
  /syntax error/i,
  /undefined (method|property|index)/i,
  /cs_test_/i,
  /cs_live_/i,
];

export function isTechnicalErrorMessage(message: string): boolean {
  const trimmed = message.trim();
  if (!trimmed) return true;
  if (trimmed.length > 220) return true;
  return TECHNICAL_ERROR_PATTERNS.some((pattern) => pattern.test(trimmed));
}

export function sanitizeClientErrorMessage(
  message: string | undefined,
  fallback: string
): string {
  if (!message || !message.trim()) return fallback;
  if (isTechnicalErrorMessage(message)) return fallback;
  return message.trim();
}

export function getFormErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof Error && error.message) {
    return sanitizeClientErrorMessage(error.message, fallback);
  }
  return fallback;
}

export async function parseApiResponse<T = Record<string, unknown>>(
  response: Response,
  fallback = "Something went wrong. Please try again."
): Promise<{
  ok: boolean;
  message?: string;
  data?: T;
}> {
  const data = (await response.json().catch(() => ({}))) as T & {
    success?: boolean;
    message?: string;
    error?: string;
  };

  const rawMessage = data.message || data.error;

  return {
    ok: response.ok && data.success === true,
    message: sanitizeClientErrorMessage(rawMessage, fallback),
    data,
  };
}
