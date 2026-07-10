import Image from "next/image";
import Link from "next/link";
import { brandImages } from "@/constants/images";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  showLink?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "h-12 w-auto min-w-[140px] sm:h-14 sm:min-w-[170px]",
  md: "h-16 w-auto min-w-[180px] sm:h-[72px] sm:min-w-[220px]",
  lg: "h-20 w-auto min-w-[220px] sm:h-24 sm:min-w-[280px] md:h-28 md:min-w-[320px]",
  xl: "h-24 w-auto min-w-[260px] sm:h-28 sm:min-w-[300px] md:h-32 md:min-w-[380px] lg:h-36 lg:min-w-[420px]",
};

export function Logo({ variant = "default", size = "md", showLink = true, className }: LogoProps) {
  const image = (
    <Image
      src={brandImages.logo}
      alt={brandImages.logoAlt}
      width={600}
      height={200}
      className={cn(
        "object-contain object-left",
        sizeClasses[size],
        variant === "light" && "brightness-0 invert",
        className
      )}
      priority
    />
  );

  if (!showLink) return <div className={cn("flex items-center", className)}>{image}</div>;

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn("inline-flex items-center", className)}
    >
      {image}
    </Link>
  );
}
