import { siteConfig } from "@/config/site";

export const bookingConfig = {
  depositAmount: 20,
  depositCurrency: "USD",
  depositLabel: "$20 booking deposit",
  pricingCta: `Call ${siteConfig.phone} for pricing`,
  depositDescription:
    "We're often fully booked. A $20 deposit secures your appointment and is applied to your service total.",
} as const;
