import { SalonSuite, FAQItem } from "@/types";

export const salonSuites: SalonSuite[] = [
  {
    id: "suite-101",
    name: "Suite 101 — The Studio",
    size: "120 sq ft",
    price: 1200,
    available: true,
    amenities: ["Private entrance", "Shampoo bowl", "Styling chair", "Storage"],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  },
  {
    id: "suite-102",
    name: "Suite 102 — The Atelier",
    size: "150 sq ft",
    price: 1450,
    available: true,
    amenities: ["Corner suite", "Natural light", "Double storage", "Wash station"],
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80",
  },
  {
    id: "suite-103",
    name: "Suite 103 — The Loft",
    size: "180 sq ft",
    price: 1650,
    available: false,
    amenities: ["Premium corner", "Extra windows", "Reception nook", "Premium fixtures"],
    image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb29d?w=800&q=80",
  },
  {
    id: "suite-104",
    name: "Suite 104 — The Salon",
    size: "200 sq ft",
    price: 1850,
    available: true,
    amenities: ["Largest suite", "Private bathroom", "Premium lighting", "VIP entrance"],
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
  },
];

export const suiteBenefits = [
  {
    title: "Financial Independence",
    description: "Keep 100% of your earnings. No commission splits, no booth rental surprises.",
    icon: "TrendingUp",
  },
  {
    title: "Premium Location",
    description: "Grandview Avenue visibility with high foot traffic and affluent clientele.",
    icon: "MapPin",
  },
  {
    title: "All-Inclusive Amenities",
    description: "Utilities, WiFi, laundry, cleaning, and reception support included.",
    icon: "Sparkles",
  },
  {
    title: "Professional Community",
    description: "Join a network of successful independent beauty professionals.",
    icon: "Users",
  },
  {
    title: "Flexible Terms",
    description: "Month-to-month options available. Grow your business on your timeline.",
    icon: "Calendar",
  },
  {
    title: "Marketing Support",
    description: "Featured on our website, social media, and Google Business Profile.",
    icon: "Megaphone",
  },
];

export const suiteAmenities = [
  "24/7 secure building access",
  "High-speed WiFi throughout",
  "Shared laundry facilities",
  "Professional reception area",
  "Client waiting lounge",
  "Complimentary parking",
  "Weekly common area cleaning",
  "Security cameras & alarm system",
  "Break room with kitchenette",
  "Marketing & social media features",
  "Google Business Profile listing",
  "Flexible lease terms",
];

export const suiteFAQs: FAQItem[] = [
  {
    question: "What is included in the monthly rent?",
    answer:
      "Your monthly rent includes utilities (electric, water, heat), high-speed WiFi, common area maintenance, laundry facilities, reception support, security, and marketing features on our platforms. You provide your own equipment and supplies.",
    category: "suites",
  },
  {
    question: "What lease terms are available?",
    answer:
      "We offer flexible month-to-month leases as well as 6-month and 12-month terms with discounted rates. A security deposit equal to one month's rent is required.",
    category: "suites",
  },
  {
    question: "Can I customize my suite?",
    answer:
      "Yes! You can personalize your suite with your branding, décor, and equipment layout. We approve modifications to ensure they meet safety standards and maintain our premium aesthetic.",
    category: "suites",
  },
  {
    question: "Do you help with building a clientele?",
    answer:
      "While building your clientele is your responsibility, we provide significant support through our website, social media features, Google Business Profile integration, and cross-referrals within our professional community.",
    category: "suites",
  },
  {
    question: "What professions are accepted?",
    answer:
      "We welcome licensed hairstylists, colorists, barbers, nail technicians, lash artists, estheticians, makeup artists, and other beauty professionals. All applicants must hold valid Ohio licenses.",
    category: "suites",
  },
];

export const generalFAQs: FAQItem[] = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online through our website, call us at (614) 555-0147, or visit us in person. We recommend booking 1-2 weeks in advance for popular stylists and color services.",
    category: "general",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We require 24-hour notice for cancellations. Late cancellations or no-shows may be charged 50% of the scheduled service fee. We understand emergencies happen — please call us as soon as possible.",
    category: "general",
  },
  {
    question: "Do you offer consultations?",
    answer:
      "Yes! We offer complimentary 15-minute consultations for color services and extensions. For major transformations, we highly recommend scheduling a consultation before your service appointment.",
    category: "general",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept all major credit cards, debit cards, Apple Pay, Google Pay, and cash. Gratuity can be added to card payments or given directly to your service provider.",
    category: "general",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes, we offer complimentary parking in our private lot behind the building. Additional street parking is available on Grandview Avenue.",
    category: "general",
  },
  {
    question: "Do you serve walk-ins?",
    answer:
      "We welcome walk-ins based on availability, but appointments are strongly recommended to ensure you receive service with your preferred professional.",
    category: "general",
  },
  {
    question: "What COVID-19 safety measures are in place?",
    answer:
      "We maintain rigorous sanitation protocols including station disinfection between clients, regular deep cleaning, and HEPA air filtration throughout the salon.",
    category: "general",
  },
  {
    question: "Can I bring children to my appointment?",
    answer:
      "Children are welcome but must be supervised at all times. For lengthy services like color or braids, we recommend arranging childcare for the best experience.",
    category: "general",
  },
];
