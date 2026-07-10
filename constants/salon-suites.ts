import { SalonSuite, FAQItem } from "@/types";

export const salonSuites: SalonSuite[] = [
  {
    id: "suite-window",
    name: "Window Suite",
    size: "Private suite with natural light",
    price: 150,
    pricePeriod: "week",
    available: true,
    amenities: ["Large window", "Shampoo sink", "Air conditioning", "Free Wi-Fi"],
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80",
  },
  {
    id: "suite-standard",
    name: "Standard Suite",
    size: "Fully equipped private suite",
    price: 150,
    pricePeriod: "week",
    available: true,
    amenities: ["Shampoo sink", "Air conditioning", "Free Wi-Fi", "Storage space"],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  },
  {
    id: "suite-premium",
    name: "Premium Suite",
    size: "Spacious suite with premium finishes",
    price: 150,
    pricePeriod: "week",
    available: true,
    amenities: ["Window available", "Shampoo sink", "AC & heating", "All materials included"],
    image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb29d?w=800&q=80",
  },
];

export const suiteBenefits = [
  {
    title: "Only $150/Week",
    description: "Affordable weekly rent with all materials and internet included. No hidden fees.",
    icon: "TrendingUp",
  },
  {
    title: "7 Min from Downtown",
    description: "Prime Livingston Avenue location — just 7 minutes from downtown Columbus.",
    icon: "MapPin",
  },
  {
    title: "All Materials Included",
    description: "Wi-Fi, utilities, shampoo sink, air conditioning, and supplies included in rent.",
    icon: "Sparkles",
  },
  {
    title: "Grow Your Business",
    description: "The perfect space to promote and grow your beauty business independently.",
    icon: "Users",
  },
  {
    title: "Now Leasing",
    description: "Suites available now. Call today to schedule a personal tour of our space.",
    icon: "Calendar",
  },
  {
    title: "Professional Environment",
    description: "Clean, modern suites in a professional salon building with great visibility.",
    icon: "Megaphone",
  },
];

export const suiteAmenities = [
  "Window suites available",
  "Shampoo sink in every suite",
  "Air conditioning & heating",
  "Free high-speed Wi-Fi",
  "All materials included in rent",
  "Professional, clean environment",
  "Only 7 minutes from downtown Columbus",
  "Free on-site parking",
  "Flexible weekly lease terms",
  "Perfect for independent beauty professionals",
];

export const suiteFAQs: FAQItem[] = [
  {
    question: "How much does a salon suite cost?",
    answer:
      "Our luxury salon suites are $150 per week. This includes all materials, high-speed Wi-Fi, utilities, shampoo sink, and air conditioning. No hidden fees.",
    category: "suites",
  },
  {
    question: "What is included in the weekly rent?",
    answer:
      "Your $150/week rent includes all materials, free Wi-Fi, utilities, shampoo sink, air conditioning, and use of a professional, clean suite. Everything you need to run your business is included.",
    category: "suites",
  },
  {
    question: "Who can rent a suite?",
    answer:
      "Our suites are perfect for hairstylists, braiders, estheticians, lash artists, makeup artists, and other beauty professionals looking to grow their independent business.",
    category: "suites",
  },
  {
    question: "How do I schedule a tour?",
    answer:
      "Call us at (614) 622-4624 or message us on WhatsApp at +1 (380) 265-5069 to schedule a tour. Contact Bibiche to see available suites.",
    category: "suites",
  },
  {
    question: "Are window suites available?",
    answer:
      "Yes! We have window suites available with natural light — perfect for creating content and giving clients a bright, welcoming experience.",
    category: "suites",
  },
];

export const generalFAQs: FAQItem[] = [
  {
    question: "How do I book an appointment?",
    answer:
      "Book online through our website, call (614) 622-4624, or message us on WhatsApp at +1 (380) 265-5069. We recommend booking in advance, especially for braiding services.",
    category: "general",
  },
  {
    question: "What services do you offer?",
    answer:
      "We specialize in hair braiding (knotless, box, boho, cornrows), faux locs, twists, hair extensions, sew-ins, closures, eyebrows, lashes, and makeup. We do not offer men's haircuts.",
    category: "general",
  },
  {
    question: "How much do services cost?",
    answer:
      "Our services start at $100. Final pricing depends on hair length, style complexity, and add-ons. New clients may qualify for $20 off their first service — ask when booking!",
    category: "general",
  },
  {
    question: "What are your hours?",
    answer:
      "We are open Monday through Saturday, 8:00 AM to 7:00 PM. We are closed on Sundays.",
    category: "general",
  },
  {
    question: "Where are you located?",
    answer:
      "We are located at 2177 Livingston Ave, Columbus, OH 43209 — only 7 minutes from downtown Columbus with free on-site parking.",
    category: "general",
  },
  {
    question: "Do you offer walk-ins?",
    answer:
      "Walk-ins are welcome based on availability, but appointments are strongly recommended for braiding and longer services.",
    category: "general",
  },
  {
    question: "Do you cut men's hair?",
    answer:
      "No, we do not offer men's haircuts. We specialize in braiding, protective styles, extensions, lashes, eyebrows, and makeup for women.",
    category: "general",
  },
  {
    question: "Is there a promotion for new clients?",
    answer:
      "Yes! New clients receive $20 OFF their first service. Mention this offer when booking your appointment.",
    category: "general",
  },
];
