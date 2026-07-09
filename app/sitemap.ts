import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/constants/services";
import { blogPosts } from "@/constants/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/gallery",
    "/team",
    "/book",
    "/salon-suites",
    "/testimonials",
    "/blog",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ];

  const servicePages = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const staticSitemap = staticPages.map((page) => ({
    url: `${siteConfig.url}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? ("daily" as const) : ("weekly" as const),
    priority: page === "" ? 1 : page === "/salon-suites" || page === "/book" ? 0.9 : 0.8,
  }));

  return [...staticSitemap, ...servicePages, ...blogPages];
}
