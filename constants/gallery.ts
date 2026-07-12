import { GalleryImage } from "@/types";
import { galleryBrandImages } from "@/constants/images";

export const galleryImages: GalleryImage[] = [
  ...galleryBrandImages.map((img) => ({
    id: img.id,
    src: img.src,
    alt: img.alt,
    category: img.category,
    width: img.width,
    height: img.height,
  })),
  {
    id: "11",
    src: "/images/hero-portrait.jpg",
    alt: "Professional hair styling at Bb Salon SUITES",
    category: "before-after" as const,
    beforeAfter: true,
    width: 800,
    height: 1000,
  },
];

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "braids", label: "Braids" },
  { id: "locs", label: "Locs" },
  { id: "extensions", label: "Extensions" },
  { id: "makeup", label: "Makeup" },
  { id: "suites", label: "Suites" },
  { id: "before-after", label: "Before & After" },
] as const;
