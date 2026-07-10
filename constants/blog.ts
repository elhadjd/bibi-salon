import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "knotless-vs-box-braids-guide",
    title: "Knotless Braids vs. Box Braids: Which Is Right for You?",
    excerpt:
      "Not sure which braiding style to choose? Our Columbus braiding experts break down the differences between knotless and box braids.",
    content: `Choosing between knotless and box braids is one of the most common questions we get at Bb Salon SUITES. Both are beautiful protective styles, but they offer different benefits.

## Knotless Braids

Knotless braids start with your natural hair and feed in extension hair gradually. This technique is gentler on the scalp, creates a flatter, more natural look, and typically causes less tension and discomfort.

## Box Braids

Box braids are a classic protective style with a defined, uniform look. They're versatile, long-lasting, and can be styled in countless ways. They're often quicker to install than knotless braids.

## Which Should You Choose?

Choose knotless if you have a sensitive scalp or want the most natural finish. Choose box braids for a timeless look with great longevity. Both start at competitive prices — call us at (614) 622-4624 to book!`,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=1200&q=80",
    category: "Hair Braiding",
    author: "Bibiche",
    publishedAt: "2026-01-15",
    readTime: "4 min read",
  },
  {
    slug: "salon-suite-rental-columbus-150-week",
    title: "Salon Suites for $150/Week in Columbus — Everything Included",
    excerpt:
      "Looking for an affordable salon suite in Columbus? Bb Salon SUITES offers luxury suites at just $150/week with all materials and Wi-Fi included.",
    content: `Are you a beauty professional looking to go independent? Bb Salon SUITES on Livingston Avenue offers the perfect solution.

## What's Included for $150/Week

- Private salon suite
- Shampoo sink
- Air conditioning
- Free high-speed Wi-Fi
- All materials included
- Professional, clean environment
- Free parking
- Only 7 minutes from downtown Columbus

## Perfect For

Our suites are ideal for hairstylists, braiders, lash artists, makeup artists, estheticians, and other beauty professionals.

## How to Apply

Call (614) 622-4624 or WhatsApp +1 (380) 265-5069 to schedule a tour with Bibiche. Suites are available now!`,
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&q=80",
    category: "Salon Suites",
    author: "Bb Salon Team",
    publishedAt: "2026-02-20",
    readTime: "3 min read",
  },
  {
    slug: "protective-styles-care-tips",
    title: "How to Care for Your Braids & Protective Styles",
    excerpt:
      "Make your braids last longer with these expert care tips from the team at Bb Salon SUITES in Columbus, OH.",
    content: `You've invested in beautiful braids — here's how to keep them looking fresh for weeks.

## 1. Keep Your Scalp Clean

Use a diluted shampoo or scalp cleanser weekly. Focus on the scalp, not the braids themselves. Dry thoroughly to prevent odor and buildup.

## 2. Moisturize Regularly

Spray your scalp and braids with a light oil or braid spray. Avoid heavy products that cause buildup.

## 3. Sleep with a Satin Bonnet

Protect your braids at night with a satin bonnet or scarf to reduce frizz and extend the life of your style.

## 4. Don't Keep Them Too Long

Most protective styles should be worn for 6-8 weeks maximum. Keeping braids too long can cause breakage and scalp issues.

Book your next style at Bb Salon SUITES — services start at $100!`,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80",
    category: "Hair Care",
    author: "Bibiche",
    publishedAt: "2026-03-05",
    readTime: "5 min read",
  },
  {
    slug: "new-client-20-off-promotion",
    title: "$20 OFF Your First Service at Bb Salon SUITES",
    excerpt:
      "New to Bb Salon SUITES? Get $20 off your first braiding, lash, or makeup service. Book today at our Columbus location!",
    content: `We're excited to welcome new clients to Bb Salon SUITES! For a limited time, new clients receive $20 OFF their first service.

## Eligible Services

- Knotless Braids
- Box Braids
- Boho Braids
- Cornrows
- Faux Locs
- Twists
- Hair Extensions & Sew-Ins
- Eyebrows
- Lashes
- Makeup

## How to Claim

Mention the "$20 OFF" promotion when booking your appointment. Call (614) 622-4624 or message us on WhatsApp at +1 (380) 265-5069.

## Location

2177 E. Livingston Ave, Columbus, OH 43209 — only 7 minutes from downtown. Free parking available.

We can't wait to see you!`,
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=80",
    category: "Promotions",
    author: "Bb Salon Team",
    publishedAt: "2026-03-25",
    readTime: "2 min read",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
