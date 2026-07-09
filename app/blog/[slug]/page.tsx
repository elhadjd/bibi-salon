import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { FadeIn } from "@/animations/motion";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/sections/shared/cta-section";
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/schema";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { blogPosts, getBlogPostBySlug } from "@/constants/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return generateSEO({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        image={post.image}
        publishedAt={post.publishedAt}
        author={post.author}
        url={url}
      />

      <article>
        <div className="relative h-[40vh] min-h-[300px] w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        </div>

        <div className="container-wide -mt-20 relative z-10">
          <FadeIn>
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-xl md:p-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm text-muted hover:text-secondary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              <Badge variant="secondary" className="mt-4">{post.category}</Badge>
              <h1 className="mt-4 text-3xl font-medium text-primary sm:text-4xl lg:text-5xl text-balance">
                {post.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted">
                <span>By {post.author}</span>
                <span>•</span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>

              <div className="prose prose-lg mt-10 max-w-none text-muted">
                {post.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="mt-8 text-2xl font-medium text-primary">
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="mt-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </article>

      <div className="mt-16">
        <CTASection />
      </div>
    </>
  );
}
