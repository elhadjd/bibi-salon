export function getFormErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return fallback;
}

export async function parseApiResponse<T = Record<string, unknown>>(response: Response): Promise<{
  ok: boolean;
  message?: string;
  data?: T;
}> {
  const data = (await response.json().catch(() => ({}))) as T & {
    success?: boolean;
    message?: string;
    error?: string;
  };

  return {
    ok: response.ok && data.success === true,
    message: data.message || data.error,
    data,
  };
}
