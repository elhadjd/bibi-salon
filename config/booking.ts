import { siteConfig } from "@/config/site";

export const bookingConfig = {
  depositAmount: 20,
  depositCurrency: "USD",
  depositLabel: "$20 booking deposit",
  pricingCta: `Call ${siteConfig.phone} for pricing`,
  depositDescription:
    "We're often fully booked. A $20 deposit secures your appointment and is applied to your service total.",
  depositUnavailableNotice:
    `Your appointment is confirmed! To secure your spot with the $20 deposit, please call us at ${siteConfig.phone} or message us on WhatsApp.`,
} as const;
