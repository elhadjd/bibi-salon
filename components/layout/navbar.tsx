"use client";

import { Menu, Phone, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { navigation, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    if (!isHome) setIsScrolled(true);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="container-wide" aria-label="Main navigation">
        <div className="flex h-24 items-center justify-between sm:h-28">
          <div
            className={cn(
              "shrink-0 rounded-xl transition-all",
              !isScrolled && isHome ? "bg-white px-3 py-2 shadow-md sm:px-4 sm:py-2.5" : "py-1"
            )}
          >
            <Logo size="md" showLink />
          </div>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.main.map((item) =>
              item.name === "Services" ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      isScrolled
                        ? "text-primary hover:text-secondary"
                        : "text-white/90 hover:text-white",
                      pathname.startsWith("/services") && "text-secondary"
                    )}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    Services
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 pt-2">
                      <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-xl">
                        <div className="grid grid-cols-3 gap-4">
                          {navigation.services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="group rounded-xl p-3 transition-colors hover:bg-background"
                            >
                              <p className="text-sm font-medium text-primary group-hover:text-secondary">
                                {service.name}
                              </p>
                              <p className="mt-1 text-xs text-muted">{service.description}</p>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 border-t border-border/50 pt-4">
                          <Link
                            href="/services"
                            className="text-sm font-medium text-secondary hover:underline"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isScrolled
                      ? "text-primary hover:text-secondary"
                      : "text-white/90 hover:text-white",
                    pathname === item.href && "text-secondary"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="ghost" size="sm" asChild>
              <a href={`tel:${siteConfig.phoneRaw}`} aria-label="Call us">
                <Phone className="h-4 w-4" />
                <span className={cn(isScrolled ? "text-primary" : "text-white")}>
                  {siteConfig.phone}
                </span>
              </a>
            </Button>
            <Button variant="secondary" size="sm" asChild>
              <Link href="/book">Book Now</Link>
            </Button>
          </div>

          <button
            className={cn(
              "rounded-lg p-2 lg:hidden",
              isScrolled ? "text-primary" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-border/20 bg-white px-4 py-6 shadow-lg lg:hidden">
            <div className="flex flex-col gap-1">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-background",
                    pathname === item.href ? "text-secondary" : "text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-border/50 pt-4">
                <Button variant="outline" asChild>
                  <a href={`tel:${siteConfig.phoneRaw}`}>
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/book">Book Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
