import Link from "next/link";
import { Button } from "@/components/ui/button";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center section-padding">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">404</p>
        <h1 className="mt-4 text-4xl font-medium text-primary sm:text-5xl">Page Not Found</h1>
        <p className="mt-4 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="secondary" asChild>
            <Link href="/">Return Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/book">Book Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
