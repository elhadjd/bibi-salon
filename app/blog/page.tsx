import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/animations/motion";
import { PageHero } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/sections/shared/cta-section";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { generateSEO } from "@/lib/seo";
import { blogPosts } from "@/constants/blog";

export const metadata = generateSEO({
  title: "Beauty Blog",
  description:
    "Beauty tips, braiding advice, salon news, and promotions from Bb Salon SUITES in Columbus, OH.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />
      <PageHero
        eyebrow="Beauty Insights"
        title="The Bb Salon Blog"
        description="Expert tips, trends, and news from Columbus's premier beauty destination."
      />

      <section className="section-padding">
        <div className="container-wide">
          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <StaggerItem key={post.slug}>
                <article
                  className={`group overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
                    index === 0 ? "md:col-span-2 md:grid md:grid-cols-2" : ""
                  }`}
                >
                  <div className={`relative overflow-hidden ${index === 0 ? "aspect-[16/10] md:aspect-auto md:min-h-[300px]" : "aspect-[16/10]"}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 50vw"}
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 md:p-8">
                    <Badge variant="secondary">{post.category}</Badge>
                    <h2 className="mt-3 text-xl font-medium text-primary group-hover:text-secondary md:text-2xl">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm text-muted">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary hover:underline"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
