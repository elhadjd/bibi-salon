import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { allKeywords } from "@/config/keywords";

type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  keywords?: string;
};

export function generateSEO({
  title,
  description = siteConfig.description,
  path = "",
  image = "/images/hero-portrait.jpg",
  noIndex = false,
  type = "website",
  keywords = allKeywords,
}: SEOProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;
  const url = `${siteConfig.url}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteConfig.url}${image}`;

  return {
    title: pageTitle,
    description,
    keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    other: {
      "geo.region": "US-OH",
      "geo.placename": "Columbus",
      "geo.position": `${siteConfig.address.coordinates.lat};${siteConfig.address.coordinates.lng}`,
      ICBM: `${siteConfig.address.coordinates.lat}, ${siteConfig.address.coordinates.lng}`,
    },
    category: "Beauty Salon",
  };
}
