export interface Service {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  duration: string;
  image: string;
  featured?: boolean;
  benefits?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  specialties: string[];
  image: string;
  social: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
  image: string;
  service?: string;
  date: string;
  verified?: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  beforeAfter?: boolean;
  width: number;
  height: number;
}

export type GalleryCategory =
  | "all"
  | "braids"
  | "locs"
  | "extensions"
  | "lashes"
  | "makeup"
  | "suites"
  | "before-after";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
}

export interface SalonSuite {
  id: string;
  name: string;
  size: string;
  price: number;
  pricePeriod: "week" | "month";
  available: boolean;
  amenities: string[];
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BookingFormData {
  service: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  notes?: string;
  payDeposit?: boolean;
}

export interface SuiteApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profession: string;
  experience: string;
  preferredSuite?: string;
  startDate: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
