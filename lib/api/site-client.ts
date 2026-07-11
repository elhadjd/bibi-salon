const getSiteApiConfig = () => {
  const baseUrl = process.env.SITE_API_BASE_URL?.replace(/\/$/, "");
  const apiKey = process.env.SITE_API_KEY;

  if (!baseUrl || !apiKey) {
    throw new Error("Site API is not configured. Set SITE_API_BASE_URL and SITE_API_KEY.");
  }

  return { baseUrl, apiKey };
};

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message?: string;
  service?: string | number;
  serviceType?: string;
  metadata?: Record<string, unknown>;
}

export interface AppointmentPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service?: string | number;
  notes?: string;
  department_id?: number;
  metadata?: Record<string, unknown>;
}

export interface SiteApiSuccess<T = unknown> {
  success: true;
  message: string;
  contact?: T;
  appointment?: T;
}

interface SiteApiErrorBody {
  message?: string;
  errors?: Record<string, string[]>;
  success?: boolean;
}

function extractErrorMessage(data: unknown): string | undefined {
  if (typeof data === "string" && data.trim()) {
    return data;
  }

  if (data && typeof data === "object") {
    const body = data as SiteApiErrorBody;
    if (body.errors) {
      const validationMessage = Object.values(body.errors).flat().join(" ");
      if (validationMessage) return validationMessage;
    }
    if (body.message) return body.message;
  }

  return undefined;
}

function isEmptyResponse(data: unknown, rawText: string): boolean {
  if (!rawText.trim() || rawText.trim() === "{}") return true;
  if (data && typeof data === "object" && Object.keys(data as object).length === 0) return true;
  return false;
}

function normalizeSuccessResponse<T>(data: unknown): SiteApiSuccess<T> {
  if (data && typeof data === "object") {
    const body = data as Record<string, unknown>;

    if (body.success === true) {
      return body as unknown as SiteApiSuccess<T>;
    }

    if (body.appointment) {
      return {
        success: true,
        message: (body.message as string) || "Appointment created successfully",
        appointment: body.appointment as T,
      };
    }

    if (body.contact) {
      return {
        success: true,
        message: (body.message as string) || "Contact submitted successfully",
        contact: body.contact as T,
      };
    }
  }

  throw new SiteApiRequestError(
    extractErrorMessage(data) || "External API did not confirm success.",
    502
  );
}

async function siteApiRequest<T>(
  path: string,
  body: Record<string, unknown>
): Promise<{ data: SiteApiSuccess<T>; status: number }> {
  const { baseUrl, apiKey } = getSiteApiConfig();
  const url = `${baseUrl}${path}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      key: apiKey,
    },
    body: JSON.stringify({
      ...body,
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
    throw new SiteApiRequestError(
      extractErrorMessage(data) || `External API request failed (HTTP ${response.status}).`,
      response.status,
      data && typeof data === "object" ? (data as SiteApiErrorBody).errors : undefined
    );
  }

  if (isEmptyResponse(data, rawText)) {
    throw new SiteApiRequestError(
      "External API returned an empty response. The appointments module may not be configured in Zyvo.",
      502
    );
  }

  return {
    data: normalizeSuccessResponse<T>(data),
    status: response.status,
  };
}

export class SiteApiRequestError extends Error {
  constructor(
    message: string,
    public status: number,
    public errors?: Record<string, string[]>
  ) {
    super(message);
    this.name = "SiteApiRequestError";
  }
}

export function isSiteApiError(error: unknown): error is SiteApiRequestError {
  return (
    error instanceof SiteApiRequestError ||
    (typeof error === "object" &&
      error !== null &&
      "name" in error &&
      (error as SiteApiRequestError).name === "SiteApiRequestError" &&
      "status" in error)
  );
}

export function submitContact(payload: ContactPayload) {
  return siteApiRequest("/contacts/submit", payload as unknown as Record<string, unknown>);
}

export function submitAppointment(payload: AppointmentPayload) {
  return siteApiRequest("/appointments/submit", payload as unknown as Record<string, unknown>);
}

export function isSiteApiConfigured(): boolean {
  return Boolean(process.env.SITE_API_BASE_URL && process.env.SITE_API_KEY);
}

export function getSiteApiTarget(path: string): string | null {
  const baseUrl = process.env.SITE_API_BASE_URL?.replace(/\/$/, "");
  if (!baseUrl) return null;
  return `${baseUrl}${path}`;
}
