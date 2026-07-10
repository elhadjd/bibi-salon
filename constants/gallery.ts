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
  { id: "7", src: "/images/gallery-braids-box.jpg", alt: "Box braids protective style close-up", category: "braids" as const, width: 800, height: 900 },
  { id: "8", src: "/images/gallery-cornrows.jpg", alt: "Cornrow updo braided hairstyle", category: "braids" as const, width: 800, height: 850 },
  { id: "9", src: "/images/hero-portrait.jpg", alt: "Glamour hair and makeup transformation", category: "before-after" as const, beforeAfter: true, width: 800, height: 1000 },
  { id: "10", src: "/images/gallery-locs.jpg", alt: "Goddess faux locs style", category: "locs" as const, width: 800, height: 900 },
];

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "braids", label: "Braids" },
  { id: "locs", label: "Locs" },
  { id: "extensions", label: "Extensions" },
  { id: "lashes", label: "Lashes" },
  { id: "makeup", label: "Makeup" },
  { id: "before-after", label: "Before & After" },
] as const;
