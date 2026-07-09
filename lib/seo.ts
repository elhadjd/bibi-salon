import { Metadata } from "next";
import { siteConfig } from "@/config/site";

type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
};

export function generateSEO({
  title,
  description = siteConfig.description,
  path = "",
  image = "/og-image.svg",
  noIndex = false,
  type = "website",
}: SEOProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;
  const url = `${siteConfig.url}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteConfig.url}${image}`;

  return {
    title: pageTitle,
    description,
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
      : { index: true, follow: true },
    other: {
      "geo.region": "US-OH",
      "geo.placename": "Columbus",
      "geo.position": `${siteConfig.address.coordinates.lat};${siteConfig.address.coordinates.lng}`,
      ICBM: `${siteConfig.address.coordinates.lat}, ${siteConfig.address.coordinates.lng}`,
    },
  };
}
