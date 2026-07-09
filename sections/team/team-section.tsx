import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/animations/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { teamMembers } from "@/constants/team";

interface TeamSectionProps {
  limit?: number;
  showAll?: boolean;
}

export function TeamSection({ limit, showAll = false }: TeamSectionProps) {
  const displayed = limit ? teamMembers.slice(0, limit) : teamMembers;

  return (
    <section className="section-padding bg-background" aria-labelledby="team-heading">
      <div className="container-wide">
        <FadeIn>
          <SectionHeading
            eyebrow="Our Artists"
            title="Meet the Team"
            description="Talented professionals dedicated to bringing your beauty vision to life."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map((member) => (
            <StaggerItem key={member.id}>
              <article className="group overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-medium text-white">{member.name}</h3>
                    <p className="text-sm text-white/70">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="line-clamp-3 text-sm text-muted">{member.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.specialties.slice(0, 3).map((specialty) => (
                      <Badge key={specialty} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on Instagram`}
                        className="text-muted transition-colors hover:text-secondary"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    )}
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/book?professional=${member.id}`}>Book with {member.name.split(" ")[0]}</Link>
                    </Button>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {!showAll && limit && (
          <FadeIn className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/team">Meet the Full Team</Link>
            </Button>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
