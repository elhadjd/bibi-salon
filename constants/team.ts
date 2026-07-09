import { TeamMember } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: "sophia-martinez",
    name: "Sophia Martinez",
    role: "Master Colorist & Salon Director",
    bio: "With over 15 years of experience, Sophia has trained with top color houses in New York and Paris. She specializes in dimensional color and balayage techniques that have earned her a loyal following across Columbus.",
    experience: "15+ years",
    specialties: ["Balayage", "Color Correction", "Blonding"],
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80",
    social: { instagram: "https://instagram.com", tiktok: "https://tiktok.com" },
  },
  {
    id: "james-williams",
    name: "James Williams",
    role: "Lead Barber & Grooming Specialist",
    bio: "James brings precision and artistry to every fade and cut. A former competition barber, he creates sharp, polished looks while ensuring every client feels relaxed and valued.",
    experience: "10+ years",
    specialties: ["Skin Fades", "Beard Sculpting", "Hot Towel Shaves"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    social: { instagram: "https://instagram.com" },
  },
  {
    id: "aisha-johnson",
    name: "Aisha Johnson",
    role: "Braiding & Natural Hair Specialist",
    bio: "Aisha is celebrated for her intricate braiding artistry and commitment to hair health. She creates stunning protective styles that celebrate natural texture and cultural heritage.",
    experience: "12+ years",
    specialties: ["Knotless Braids", "Cornrows", "Loc Styling"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    social: { instagram: "https://instagram.com", tiktok: "https://tiktok.com" },
  },
  {
    id: "emily-chen",
    name: "Emily Chen",
    role: "Lash & Brow Artist",
    bio: "Emily's meticulous approach to lash extensions has made her one of Columbus's most sought-after lash artists. She creates customized looks from natural enhancement to dramatic glamour.",
    experience: "8+ years",
    specialties: ["Volume Lashes", "Lash Lifts", "Brow Lamination"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
    social: { instagram: "https://instagram.com" },
  },
  {
    id: "maria-rodriguez",
    name: "Maria Rodriguez",
    role: "Senior Esthetician",
    bio: "Maria combines advanced skincare knowledge with a nurturing touch. Her facials leave clients glowing, with personalized treatment plans that address concerns from aging to acne.",
    experience: "11+ years",
    specialties: ["Anti-Aging", "Hydrafacial", "Chemical Peels"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    social: { instagram: "https://instagram.com" },
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "Hair Stylist & Extension Specialist",
    bio: "David excels at precision cutting and seamless extension work. His ability to understand client vision and translate it into wearable, beautiful styles sets him apart.",
    experience: "9+ years",
    specialties: ["Precision Cuts", "Tape-In Extensions", "Men's Styling"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    social: { instagram: "https://instagram.com" },
  },
];

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find((m) => m.id === id);
}
