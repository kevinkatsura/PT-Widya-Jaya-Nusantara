import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import Advantages from "@/components/Advantages";
import TargetAudience from "@/components/TargetAudience";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
import SpecialOffer from "@/components/SpecialOffer";
import Cta from "@/components/Cta";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Advantages />
        <TargetAudience />
        <Impact />
        <Testimonials />
        <SpecialOffer />
        <Cta />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
