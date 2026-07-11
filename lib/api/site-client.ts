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

interface SiteApiSuccess<T> {
  success: true;
  message: string;
  contact?: T;
  appointment?: T;
}

interface SiteApiError {
  message?: string;
  errors?: Record<string, string[]>;
}

async function siteApiRequest<T>(
  path: string,
  body: Record<string, unknown>
): Promise<{ data: SiteApiSuccess<T>; status: number }> {
  const { baseUrl, apiKey } = getSiteApiConfig();

  const response = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      key: apiKey,
    },
    body: JSON.stringify(body),
  });

  const data = (await response.json().catch(() => ({}))) as SiteApiSuccess<T> & SiteApiError;

  if (!response.ok) {
    const validationMessage = data.errors
      ? Object.values(data.errors).flat().join(" ")
      : undefined;
    throw new SiteApiRequestError(
      validationMessage || data.message || "Request failed",
      response.status,
      data.errors
    );
  }

  return { data: data as SiteApiSuccess<T>, status: response.status };
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

export function submitContact(payload: ContactPayload) {
  return siteApiRequest("/contacts/submit", payload as unknown as Record<string, unknown>);
}

export function submitAppointment(payload: AppointmentPayload) {
  return siteApiRequest("/appointments/submit", payload as unknown as Record<string, unknown>);
}

export function isSiteApiConfigured(): boolean {
  return Boolean(process.env.SITE_API_BASE_URL && process.env.SITE_API_KEY);
}
