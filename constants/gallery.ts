import { GalleryImage } from "@/types";

export const galleryImages: GalleryImage[] = [
  { id: "1", src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80", alt: "Knotless braids hairstyle", category: "braids", width: 600, height: 800 },
  { id: "2", src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80", alt: "Box braids protective style", category: "braids", width: 600, height: 900 },
  { id: "3", src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80", alt: "Boho braids with curly ends", category: "braids", width: 600, height: 750 },
  { id: "4", src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80", alt: "Intricate cornrow design", category: "braids", width: 600, height: 800 },
  { id: "5", src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80", alt: "Goddess faux locs", category: "locs", width: 600, height: 900 },
  { id: "6", src: "https://images.unsplash.com/photo-1583001939226-6b6d8f379f54?w=600&q=80", alt: "Volume lash extensions", category: "lashes", width: 600, height: 700 },
  { id: "7", src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2d11?w=600&q=80", alt: "Sew-in hair extensions", category: "extensions", width: 600, height: 850 },
  { id: "8", src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80", alt: "Professional makeup glam look", category: "makeup", width: 600, height: 700 },
  { id: "9", src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80", alt: "Before and after braiding transformation", category: "before-after", beforeAfter: true, width: 600, height: 600 },
  { id: "10", src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80", alt: "Passion twists hairstyle", category: "braids", width: 600, height: 900 },
  { id: "11", src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2d11?w=600&q=80", alt: "Hair closure installation", category: "extensions", width: 600, height: 750 },
  { id: "12", src: "https://images.unsplash.com/photo-1583001939226-6b6d8f379f54?w=600&q=80", alt: "Classic lash extensions", category: "lashes", width: 600, height: 700 },
  { id: "13", src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80", alt: "Before and after locs transformation", category: "before-after", beforeAfter: true, width: 600, height: 600 },
  { id: "14", src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80", alt: "Feed-in cornrows style", category: "braids", width: 600, height: 900 },
  { id: "15", src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80", alt: "Event makeup look", category: "makeup", width: 600, height: 700 },
  { id: "16", src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80", alt: "Soft locs installation", category: "locs", width: 600, height: 800 },
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
