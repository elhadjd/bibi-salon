"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ZoomIn, Instagram } from "lucide-react";
import { FadeIn } from "@/animations/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { galleryImages, galleryCategories } from "@/constants/gallery";
import { GalleryCategory } from "@/types";
import { cn } from "@/lib/utils";

interface GallerySectionProps {
  limit?: number;
  showFilters?: boolean;
  showHeading?: boolean;
}

export function GallerySection({
  limit,
  showFilters = false,
  showHeading = true,
}: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="section-padding" aria-labelledby="gallery-heading">
      <div className="container-wide">
        {showHeading && (
          <FadeIn>
            <SectionHeading
              eyebrow="Our Work"
              title="Gallery of Transformations"
              description="Browse our portfolio of stunning hair, color, nails, and beauty transformations."
            />
          </FadeIn>
        )}

        {showFilters && (
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as GalleryCategory)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-muted hover:bg-background hover:text-primary"
                )}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {displayed.map((image, index) => (
            <FadeIn key={image.id} delay={index * 0.05}>
              <button
                className="group relative mb-4 block w-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                onClick={() => setLightboxImage(image.src)}
                aria-label={`View ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-all duration-300 group-hover:bg-primary/40">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                {image.beforeAfter && (
                  <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                    Before & After
                  </span>
                )}
              </button>
            </FadeIn>
          ))}
        </div>

        {limit && (
          <FadeIn className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </FadeIn>
        )}

        <FadeIn className="mt-12 rounded-2xl border border-border/50 bg-white p-8 text-center">
          <Instagram className="mx-auto h-8 w-8 text-secondary" />
          <h3 className="mt-4 text-xl font-medium text-primary">Follow Us on Instagram</h3>
          <p className="mt-2 text-muted">
            See daily transformations and behind-the-scenes at @lumierebeautystudio
          </p>
          <Button variant="secondary" className="mt-6" asChild>
            <a
              href="https://instagram.com/lumierebeautystudio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on Instagram
            </a>
          </Button>
        </FadeIn>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <Image
            src={lightboxImage}
            alt="Gallery image enlarged view"
            width={1200}
            height={800}
            className="max-h-[90vh] w-auto rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
