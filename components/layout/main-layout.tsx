import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
