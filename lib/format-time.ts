/**
 * Converts 12-hour time (e.g. "2:30 PM") to 24-hour HH:MM (e.g. "14:30").
 */
export function to24HourTime(time12h: string): string {
  const match = time12h.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) {
    throw new Error(`Invalid time format: ${time12h}`);
  }

  let hours = parseInt(match[1], 10);
  const minutes = match[2];
  const period = match[3].toUpperCase();

  if (period === "AM") {
    if (hours === 12) hours = 0;
  } else if (hours !== 12) {
    hours += 12;
  }

  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}
