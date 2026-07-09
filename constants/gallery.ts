import { GalleryImage } from "@/types";

export const galleryImages: GalleryImage[] = [
  { id: "1", src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80", alt: "Balayage hair color transformation", category: "color", width: 600, height: 800 },
  { id: "2", src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80", alt: "Luxury hair styling", category: "hair", width: 600, height: 750 },
  { id: "3", src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80", alt: "Intricate braided hairstyle", category: "braids", width: 600, height: 900 },
  { id: "4", src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80", alt: "Elegant nail art design", category: "nails", width: 600, height: 600 },
  { id: "5", src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80", alt: "Professional barber fade", category: "barber", width: 600, height: 750 },
  { id: "6", src: "https://images.unsplash.com/photo-1583001939226-6b6d8f379f54?w=600&q=80", alt: "Volume lash extensions", category: "lashes", width: 600, height: 700 },
  { id: "7", src: "https://images.unsplash.com/photo-1595476108010-b7d1a01996aa?w=600&q=80", alt: "Sun-kissed balayage highlights", category: "color", width: 600, height: 800 },
  { id: "8", src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2d11?w=600&q=80", alt: "Long hair extensions", category: "hair", width: 600, height: 850 },
  { id: "9", src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80", alt: "Before and after hair color", category: "before-after", beforeAfter: true, width: 600, height: 600 },
  { id: "10", src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80", alt: "Salon interior luxury styling", category: "hair", width: 600, height: 700 },
  { id: "11", src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb29d?w=600&q=80", alt: "Gel manicure with gold accents", category: "nails", width: 600, height: 650 },
  { id: "12", src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80", alt: "Beard grooming and styling", category: "barber", width: 600, height: 750 },
  { id: "13", src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80", alt: "Dramatic color transformation before after", category: "before-after", beforeAfter: true, width: 600, height: 600 },
  { id: "14", src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80", alt: "Box braids protective style", category: "braids", width: 600, height: 900 },
  { id: "15", src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80", alt: "Classic lash extensions close up", category: "lashes", width: 600, height: 700 },
  { id: "16", src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80", alt: "Blonde balayage on long hair", category: "color", width: 600, height: 800 },
];

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "hair", label: "Hair" },
  { id: "color", label: "Color" },
  { id: "braids", label: "Braids" },
  { id: "nails", label: "Nails" },
  { id: "lashes", label: "Lashes" },
  { id: "barber", label: "Barber" },
  { id: "before-after", label: "Before & After" },
] as const;
