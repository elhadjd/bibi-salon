import { Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Testimonial } from "@/types";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md";
}

export function StarRating({ rating, size = "md" }: StarRatingProps) {
  const sizeClass = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            sizeClass,
            i < rating ? "fill-secondary text-secondary" : "fill-border text-border"
          )}
        />
      ))}
    </div>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: "default" | "compact";
}

export function TestimonialCard({ testimonial, variant = "default" }: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-border/50 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg",
        variant === "compact" && "p-5"
      )}
    >
      <StarRating rating={testimonial.rating} size={variant === "compact" ? "sm" : "md"} />
      <blockquote className="mt-4 text-primary leading-relaxed">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>
      <footer className="mt-6 flex items-center gap-3">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <cite className="not-italic font-medium text-primary">{testimonial.name}</cite>
          {testimonial.service && (
            <p className="text-sm text-muted">{testimonial.service}</p>
          )}
        </div>
        {testimonial.verified && (
          <span className="ml-auto rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-medium text-secondary">
            Verified
          </span>
        )}
      </footer>
    </article>
  );
}
