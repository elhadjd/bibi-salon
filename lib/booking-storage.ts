export const bookingAppointmentIdStorageKey = "bb_booking_appointment_id";

function getDepositConfirmedKey(sessionId: string): string {
  return `bb_deposit_confirmed_${sessionId}`;
}

export function savePendingAppointmentId(appointmentId: string | number): void {
  const id = String(appointmentId);
  sessionStorage.setItem(bookingAppointmentIdStorageKey, id);
  localStorage.setItem(bookingAppointmentIdStorageKey, id);
}

export function getPendingAppointmentId(): string | null {
  return (
    sessionStorage.getItem(bookingAppointmentIdStorageKey) ||
    localStorage.getItem(bookingAppointmentIdStorageKey)
  );
}

export function markDepositConfirmed(sessionId: string): void {
  localStorage.setItem(getDepositConfirmedKey(sessionId), "1");
  sessionStorage.removeItem(bookingAppointmentIdStorageKey);
  localStorage.removeItem(bookingAppointmentIdStorageKey);
}

export function isDepositConfirmed(sessionId: string): boolean {
  return localStorage.getItem(getDepositConfirmedKey(sessionId)) === "1";
}
