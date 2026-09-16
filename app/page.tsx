import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import PopularDestinations from "@/components/PopularDestinations";
import PromoSplit from "@/components/PromoSplit";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        <PopularDestinations />
        <PromoSplit />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
