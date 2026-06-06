import Hero from "@/components/Hero";
import WhyBrewHaven from "@/components/WhyBrewHaven";
import Facilities from "@/components/Facilities";
import CoffeeExperience from "@/components/CoffeeExperience";
import SpaceGallery from "@/components/SpaceGallery";
import CustomerReviews from "@/components/CustomerReviews";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      {/* 1. Header is in layout.tsx */}

      {/* 2. Hero */}
      <Hero />

      {/* 3. Why Brew Haven */}
      <WhyBrewHaven />

      {/* 4. Productivity Facilities */}
      <Facilities />

      {/* 5. Coffee Experience */}
      <CoffeeExperience />

      {/* 6. Space & Atmosphere */}
      <SpaceGallery />

      {/* 7. Customer Reviews */}
      <CustomerReviews />

      {/* 8. FAQ */}
      <FAQ />

      {/* 9. Location & Visit Information */}
      <Location />

      {/* 10. Final CTA */}
      <FinalCTA />

      {/* 11. Footer is in layout.tsx */}
    </>
  );
}
