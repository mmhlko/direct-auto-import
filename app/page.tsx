import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Advantages from "@/components/Advantages";
import WorkStages from "@/components/WorkStages";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Advantages />
      <WorkStages />
      <Reviews />
      <FAQ />      
      <Contacts />
      <Footer />      
    </main>
  );
}
