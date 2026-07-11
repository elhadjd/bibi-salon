export function getFormErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return fallback;
}

export async function parseApiResponse(response: Response): Promise<{
  ok: boolean;
  message?: string;
}> {
  const data = (await response.json().catch(() => ({}))) as {
    success?: boolean;
    message?: string;
    error?: string;
  };

  return {
    ok: response.ok && data.success === true,
    message: data.message || data.error,
  };
}
