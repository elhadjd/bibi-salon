import { TeamMember } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: "bibiche",
    name: "Bibiche",
    role: "Owner & Master Braider",
    bio: "Bibiche founded Bb Salon SUITES with a passion for braiding artistry and empowering beauty professionals. Her expert technique and warm hospitality have made the salon a trusted destination in Columbus.",
    experience: "10+ years",
    specialties: ["Knotless Braids", "Box Braids", "Cornrows", "Sew-Ins"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    social: { instagram: "https://instagram.com/bbsalonsuites" },
  },
  {
    id: "aisha-johnson",
    name: "Aisha Johnson",
    role: "Braiding Specialist",
    bio: "Aisha specializes in knotless braids, boho styles, and faux locs. Known for her speed and precision, she creates stunning protective styles that last.",
    experience: "8+ years",
    specialties: ["Knotless Braids", "Boho Braids", "Faux Locs"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    social: { instagram: "https://instagram.com" },
  },
  {
    id: "emily-chen",
    name: "Emily Chen",
    role: "Lash & Brow Artist",
    bio: "Emily delivers flawless lash extensions and perfectly shaped brows. Her attention to detail ensures every client leaves feeling confident and beautiful.",
    experience: "6+ years",
    specialties: ["Lash Extensions", "Lash Lifts", "Eyebrow Shaping"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
    social: { instagram: "https://instagram.com" },
  },
  {
    id: "maria-rodriguez",
    name: "Maria Rodriguez",
    role: "Makeup Artist",
    bio: "Maria creates stunning makeup looks for weddings, events, and photoshoots. From soft glam to full beat, she makes every client camera-ready.",
    experience: "7+ years",
    specialties: ["Bridal Makeup", "Glam Looks", "Special Events"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    social: { instagram: "https://instagram.com" },
  },
];

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find((m) => m.id === id);
}
