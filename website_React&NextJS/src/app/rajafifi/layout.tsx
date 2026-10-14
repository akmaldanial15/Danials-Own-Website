import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import PageTransition from "@/components/layout/PageTransition";

export const metadata = {
  title: "Danial's Web & Systems | Premium Custom Systems & Websites",
  description: "Kami membina sistem perniagaan kustom, aplikasi web/Android, dan laman web korporat premium berprestasi tinggi di Malaysia.",
};

export default function RajaFifiLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </LanguageProvider>
  );
}
