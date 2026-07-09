import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "winter-hair-care-tips-columbus",
    title: "5 Essential Winter Hair Care Tips for Columbus Weather",
    excerpt:
      "Ohio winters can be harsh on your hair. Discover expert tips from our stylists to keep your locks healthy, hydrated, and beautiful all season long.",
    content: `Winter in Columbus brings dry air, cold winds, and indoor heating — all of which can wreak havoc on your hair. Here are five essential tips from our master stylists to protect your investment and maintain gorgeous, healthy hair throughout the season.

## 1. Deep Condition Weekly

Switch to a richer, more nourishing conditioner during winter months. Our stylists recommend a weekly deep conditioning treatment to combat dryness and prevent breakage.

## 2. Reduce Heat Styling

Give your hair a break from daily blow-drying and flat ironing. Embrace air-drying when possible, and always use a heat protectant when heat styling is necessary.

## 3. Invest in a Humidifier

Indoor heating strips moisture from the air and your hair. A bedroom humidifier can make a significant difference in maintaining hair hydration overnight.

## 4. Trim Regularly

Don't skip your trim appointments in winter. Removing split ends prevents damage from traveling up the hair shaft and keeps your style looking fresh.

## 5. Protect Your Color

If you've invested in color services, winter is when fading can accelerate. Use color-safe, sulfate-free products and consider a gloss treatment to refresh your tone between appointments.

Book a winter wellness consultation with our team to create a personalized hair care plan.`,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
    category: "Hair Care",
    author: "Sophia Martinez",
    publishedAt: "2026-01-15",
    readTime: "5 min read",
  },
  {
    slug: "balayage-vs-highlights-guide",
    title: "Balayage vs. Highlights: Which Is Right for You?",
    excerpt:
      "Confused about the difference between balayage and traditional highlights? Our color experts break down both techniques to help you choose your perfect look.",
    content: `Choosing between balayage and traditional highlights is one of the most common questions we receive at Lumière. Both techniques create beautiful dimension, but they achieve different effects and suit different lifestyles.

## Traditional Highlights

Foil highlights create uniform, defined streaks of color throughout the hair. They're perfect for clients who want noticeable contrast and a polished, salon-fresh look that lasts 6-8 weeks before noticeable regrowth.

## Balayage

Balayage is a freehand painting technique that creates softer, more natural-looking highlights. The color is applied to the surface of hair sections, resulting in a sun-kissed, dimensional effect with softer regrowth lines.

## Which Should You Choose?

Choose highlights if you want defined, uniform color with maximum brightness. Choose balayage if you prefer a natural, low-maintenance look with seamless grow-out.

Schedule a complimentary color consultation to discuss which technique best suits your hair goals.`,
    image: "https://images.unsplash.com/photo-1595476108010-b7d1a01996aa?w=1200&q=80",
    category: "Hair Color",
    author: "Sophia Martinez",
    publishedAt: "2026-02-20",
    readTime: "4 min read",
  },
  {
    slug: "salon-suite-rental-guide-columbus",
    title: "Why Beauty Professionals Are Choosing Salon Suites in Columbus",
    excerpt:
      "Thinking about going independent? Learn why salon suite rental is transforming careers for stylists, estheticians, and beauty professionals in Columbus.",
    content: `The beauty industry is evolving, and Columbus professionals are leading the charge toward independence. Salon suite rental offers a compelling alternative to traditional commission-based salon employment.

## Benefits of Suite Rental

**Financial Freedom**: Keep more of what you earn. No commission splits means your income directly reflects your hard work and client relationships.

**Schedule Control**: Set your own hours, take vacations when you want, and build a schedule that supports your lifestyle.

**Brand Building**: Create your own identity within a premium environment. Your suite becomes an extension of your personal brand.

**Premium Amenities**: At Lumière, suites include utilities, WiFi, laundry, a reception area, and marketing support — everything you need to focus on your craft.

## Is Suite Rental Right for You?

If you're an established professional with a loyal clientele, suite rental can accelerate your career growth. We offer flexible lease terms starting at $1,200/month.

Tour our available suites and meet our community of successful independent professionals.`,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
    category: "Salon News",
    author: "Lumière Team",
    publishedAt: "2026-03-05",
    readTime: "6 min read",
  },
  {
    slug: "spring-promotion-luxury-packages",
    title: "Spring Refresh: Exclusive Luxury Beauty Packages",
    excerpt:
      "Celebrate spring with our limited-time beauty packages combining our most popular services at special pricing. Book before April 30th.",
    content: `Spring is the season of renewal, and there's no better time to refresh your look. For a limited time, Lumière Beauty Studio is offering exclusive packages that combine our most beloved services.

## The Glow Package — $275 (Save $45)

- Signature Facial with Maria
- Gel Manicure
- Complimentary champagne

## The Transformation Package — $425 (Save $75)

- Haircut & Blowout with David
- Partial Balayage with Sophia
- Deep Conditioning Treatment

## The Complete Gentleman — $120 (Save $25)

- Executive Haircut
- Beard Sculpting
- Hot Towel Treatment with James

All packages must be booked by April 30, 2026. Appointments available through May 31, 2026. Cannot be combined with other offers.

Call or book online to secure your spring transformation.`,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80",
    category: "Promotions",
    author: "Lumière Team",
    publishedAt: "2026-03-25",
    readTime: "3 min read",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
