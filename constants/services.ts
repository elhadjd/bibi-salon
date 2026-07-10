import { Service } from "@/types";

const braidImage = "/images/gallery-braids-box.jpg";
const knotlessImage = "/images/gallery-knotless.jpg";
const locsImage = "/images/gallery-locs.jpg";
const cornrowsImage = "/images/gallery-cornrows.jpg";
const wavesImage = "/images/gallery-waves.jpg";
const glamImage = "/images/gallery-glam-makeup.jpg";

export const services: Service[] = [
  {
    slug: "knotless-braids",
    name: "Knotless Braids",
    category: "Braids",
    description: "Lightweight knotless braids with a natural, scalp-friendly finish and long-lasting style.",
    longDescription:
      "Our signature knotless braids reduce tension on the scalp while delivering a seamless, natural look. Perfect for protective styling with less discomfort and beautiful results that last weeks.",
    duration: "4–8 hours",
    startingPrice: 150,
    image: knotlessImage,
    featured: true,
    benefits: ["Scalp-friendly technique", "Natural finish", "Long-lasting style"],
  },
  {
    slug: "box-braids",
    name: "Box Braids",
    category: "Braids",
    description: "Classic box braids in various lengths and sizes — a timeless protective style.",
    longDescription:
      "Box braids remain one of the most versatile protective styles. Our artists create clean parts and uniform braids customized to your preferred length, thickness, and color.",
    duration: "4–8 hours",
    startingPrice: 120,
    image: braidImage,
    featured: true,
    benefits: ["Custom length & size", "Premium hair included", "Scalp care"],
  },
  {
    slug: "boho-braids",
    name: "Boho Braids",
    category: "Braids",
    description: "Bohemian-inspired braids with curly ends for a soft, romantic, effortless look.",
    longDescription:
      "Boho braids combine structured braiding with loose, curly ends for a relaxed bohemian vibe. Ideal for vacations, events, or everyday glam with a natural feel.",
    duration: "5–9 hours",
    startingPrice: 180,
    image: braidImage,
    featured: true,
    benefits: ["Curly boho ends", "Event-ready style", "Custom curl pattern"],
  },
  {
    slug: "cornrows",
    name: "Cornrows",
    category: "Braids",
    description: "Intricate cornrow patterns from simple rows to creative designs.",
    longDescription:
      "From classic straight-backs to elaborate tribal and feed-in patterns, our braiders create precise cornrows that protect your hair while showcasing artistry and culture.",
    duration: "1–4 hours",
    startingPrice: 100,
    image: cornrowsImage,
    featured: true,
    benefits: ["Creative patterns", "Feed-in technique", "Quick install options"],
  },
  {
    slug: "faux-locs",
    name: "Faux Locs",
    category: "Locs",
    description: "Beautiful loc-style extensions without the long-term commitment.",
    longDescription:
      "Get the loc look instantly with our faux loc installations. Available in goddess locs, soft locs, and butterfly locs — lightweight, versatile, and stunning.",
    duration: "5–10 hours",
    startingPrice: 160,
    image: locsImage,
    featured: true,
    benefits: ["No commitment", "Goddess & soft loc options", "Lightweight feel"],
  },
  {
    slug: "twists",
    name: "Twists",
    category: "Braids",
    description: "Senegalese twists, passion twists, and more for elegant protective styling.",
    longDescription:
      "Twists offer a softer alternative to braids with beautiful movement and texture. Choose from Senegalese, passion, or spring twists for a look that suits your style.",
    duration: "3–7 hours",
    startingPrice: 130,
    image: knotlessImage,
    featured: true,
    benefits: ["Multiple twist types", "Natural movement", "Low maintenance"],
  },
  {
    slug: "hair-extensions",
    name: "Hair Extensions",
    category: "Extensions",
    description: "Premium hair extensions for added length, volume, and versatility.",
    longDescription:
      "Transform your look with high-quality human hair extensions. We offer various methods and textures to match your natural hair for seamless, beautiful results.",
    duration: "2–5 hours",
    startingPrice: 150,
    image: wavesImage,
    featured: true,
    benefits: ["Color matching", "Premium hair", "Multiple methods"],
  },
  {
    slug: "sew-ins",
    name: "Sew-Ins",
    category: "Extensions",
    description: "Secure sew-in weave installations for full, glamorous transformations.",
    longDescription:
      "Our sew-in specialists create flawless installations with proper braiding foundation and invisible weft placement. Leave with full, flowing hair that looks and feels natural.",
    duration: "3–6 hours",
    startingPrice: 140,
    image: wavesImage,
    featured: true,
    benefits: ["Secure installation", "Natural blend", "Versatile styling"],
  },
  {
    slug: "closures",
    name: "Closures",
    category: "Extensions",
    description: "Lace closures and frontals for a natural hairline and parting.",
    longDescription:
      "Complete your install with a perfectly blended closure or frontal. We customize the hairline, bleach knots, and style for an undetectable, salon-quality finish.",
    duration: "2–4 hours",
    startingPrice: 100,
    image: wavesImage,
    featured: false,
    benefits: ["Natural hairline", "Custom parting", "Bleached knots"],
  },
  {
    slug: "eyebrows",
    name: "Eyebrows",
    category: "Beauty",
    description: "Expert eyebrow shaping, waxing, and styling for perfectly framed eyes.",
    longDescription:
      "Frame your face with beautifully shaped brows. Our artists sculpt, wax, and style your eyebrows to complement your features for a polished, defined look.",
    duration: "20–45 min",
    startingPrice: 100,
    image: glamImage,
    featured: true,
    benefits: ["Custom shaping", "Wax & tweeze", "Brow styling"],
  },
  {
    slug: "lashes",
    name: "Lashes",
    category: "Beauty",
    description: "Stunning lash extensions and lifts for captivating, eye-opening results.",
    longDescription:
      "Wake up gorgeous with our lash services. From classic to volume extensions and lash lifts, every set is customized to enhance your natural eye shape.",
    duration: "1.5–3 hours",
    startingPrice: 100,
    image: glamImage,
    featured: true,
    benefits: ["Custom lash mapping", "Volume & classic sets", "Aftercare guidance"],
  },
  {
    slug: "makeup",
    name: "Makeup",
    category: "Beauty",
    description: "Professional makeup for events, photoshoots, and everyday glam.",
    longDescription:
      "Look your absolute best for any occasion. Our makeup artists create flawless looks from soft glam to full beat — perfect for weddings, parties, and special events.",
    duration: "45–90 min",
    startingPrice: 100,
    image: glamImage,
    featured: true,
    benefits: ["Event-ready looks", "Long-lasting products", "Skin-tone matching"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}
