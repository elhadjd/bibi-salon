import { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "hair-styling",
    name: "Hair Styling",
    category: "Hair",
    description: "Precision cuts, luxurious blowouts, and event-ready styling tailored to your unique features.",
    longDescription:
      "Our master stylists combine technical expertise with artistic vision to create looks that enhance your natural beauty. From classic bobs to modern layers, every cut is customized to your face shape, hair texture, and lifestyle.",
    duration: "45–90 min",
    startingPrice: 65,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    featured: true,
    benefits: ["Consultation included", "Premium products", "Style tips"],
  },
  {
    slug: "hair-color",
    name: "Hair Color",
    category: "Color",
    description: "Rich, vibrant color transformations from subtle highlights to bold fashion shades.",
    longDescription:
      "Experience color artistry at its finest. Our colorists use premium, ammonia-free formulas to deliver stunning results while maintaining hair health. Whether you desire a sun-kissed refresh or a complete transformation, we create custom color plans for lasting beauty.",
    duration: "2–4 hours",
    startingPrice: 120,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    featured: true,
    benefits: ["Color consultation", "Bond-building treatments", "Toner included"],
  },
  {
    slug: "balayage",
    name: "Balayage",
    category: "Color",
    description: "Hand-painted highlights for a natural, sun-kissed glow with seamless grow-out.",
    longDescription:
      "Balayage is our signature specialty. Our artists hand-paint each highlight for a dimensional, lived-in look that grows out beautifully. Perfect for those seeking low-maintenance luxury with maximum impact.",
    duration: "3–5 hours",
    startingPrice: 185,
    image: "https://images.unsplash.com/photo-1595476108010-b7d1a01996aa?w=800&q=80",
    featured: true,
    benefits: ["Custom placement", "Low maintenance", "Natural finish"],
  },
  {
    slug: "braids",
    name: "Braids & Protective Styles",
    category: "Hair",
    description: "Expert braiding techniques from classic to creative, protecting and beautifying your hair.",
    longDescription:
      "Our braiding specialists create stunning protective styles that celebrate texture and culture. From box braids to knotless styles, cornrows to goddess braids, each installation prioritizes scalp health and lasting elegance.",
    duration: "3–8 hours",
    startingPrice: 150,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80",
    featured: true,
    benefits: ["Scalp care included", "Premium hair options", "Style longevity"],
  },
  {
    slug: "extensions",
    name: "Hair Extensions",
    category: "Hair",
    description: "Premium extensions for length, volume, and versatility with seamless blending.",
    longDescription:
      "Transform your look with our premium extension services. We offer tape-in, sew-in, and fusion methods using 100% human hair. Our specialists ensure invisible blending and natural movement for undetectable luxury.",
    duration: "2–6 hours",
    startingPrice: 250,
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2d11?w=800&q=80",
    featured: true,
    benefits: ["Color matching", "Maintenance plan", "Premium hair"],
  },
  {
    slug: "barber",
    name: "Barber Services",
    category: "Barber",
    description: "Precision fades, classic cuts, and grooming services in a refined masculine atmosphere.",
    longDescription:
      "Our barbers deliver impeccable grooming with attention to detail. From skin fades to beard sculpting, hot towel shaves to executive cuts, experience the art of men's grooming in a premium setting.",
    duration: "30–60 min",
    startingPrice: 45,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
    featured: true,
    benefits: ["Hot towel service", "Beard trim included", "Premium products"],
  },
  {
    slug: "nails",
    name: "Nail Services",
    category: "Nails",
    description: "Luxurious manicures, pedicures, and nail art in a serene, hygienic environment.",
    longDescription:
      "Indulge in nail care elevated to an art form. Our nail technicians create flawless finishes from classic French to intricate nail art. Using premium polishes and strict sanitation protocols, every visit is a pampering experience.",
    duration: "45–90 min",
    startingPrice: 40,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    featured: true,
    benefits: ["Spa soak", "Cuticle care", "Gel options"],
  },
  {
    slug: "lashes",
    name: "Lash Services",
    category: "Lashes",
    description: "Stunning lash extensions and lifts for captivating eyes that frame your beauty.",
    longDescription:
      "Wake up beautiful with our lash services. From classic extensions to volume fans, lash lifts to tints, our lash artists customize every set to complement your eye shape and desired look.",
    duration: "1.5–3 hours",
    startingPrice: 85,
    image: "https://images.unsplash.com/photo-1583001939226-6b6d8f379f54?w=800&q=80",
    featured: true,
    benefits: ["Custom mapping", "Premium adhesives", "Aftercare kit"],
  },
  {
    slug: "facials",
    name: "Facial Treatments",
    category: "Skincare",
    description: "Rejuvenating facials and advanced skincare treatments for radiant, healthy skin.",
    longDescription:
      "Our estheticians deliver transformative skincare experiences using medical-grade products and advanced techniques. From hydrating facials to anti-aging treatments, each session is tailored to your skin's unique needs.",
    duration: "60–90 min",
    startingPrice: 95,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    featured: true,
    benefits: ["Skin analysis", "Custom treatment", "Home care plan"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}
