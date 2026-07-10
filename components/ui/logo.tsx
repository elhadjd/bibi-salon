import Image from "next/image";
import Link from "next/link";
import { brandImages } from "@/constants/images";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  showLink?: boolean;
  className?: string;
}

const sizes = {
  sm: { width: 140, height: 56 },
  md: { width: 180, height: 72 },
  lg: { width: 280, height: 112 },
};

export function Logo({ variant = "default", size = "md", showLink = true, className }: LogoProps) {
  const { width, height } = sizes[size];

  const image = (
    <Image
      src={brandImages.logo}
      alt={brandImages.logoAlt}
      width={width}
      height={height}
      className={cn(
        "h-auto w-auto object-contain",
        variant === "light" && "brightness-0 invert",
        className
      )}
      priority={size === "lg"}
    />
  );

  if (!showLink) return <div className={className}>{image}</div>;

  return (
    <Link href="/" aria-label={`${siteConfig.name} home`} className={cn("inline-block", className)}>
      {image}
    </Link>
  );
}
