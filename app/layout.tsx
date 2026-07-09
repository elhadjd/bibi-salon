import { Cormorant_Garamond, Inter } from "next/font/google";
import { Providers } from "@/providers/query-provider";
import { MainLayout } from "@/components/layout/main-layout";
import { LocalBusinessSchema } from "@/components/seo/schema";
import { generateSEO } from "@/lib/seo";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  ...generateSEO(),
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-secondary focus:px-4 focus:py-2 focus:text-primary"
        >
          Skip to main content
        </a>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
