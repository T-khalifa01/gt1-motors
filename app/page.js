import dynamic from "next/dynamic";

// Standard imports for above-the-fold and non-heavy components
import Navigation from "@/components/sections/Nav";
import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ReviewsSection from "@/components/sections/Reviews";
import LocationsSection from "@/components/sections/Location";
import FaqSection from "@/components/sections/Faqs";
import SocialSection from "@/components/sections/Socials";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

// Dynamically import GSAP-heavy components to reduce initial JS payload.
const JourneySection = dynamic(() => import("@/components/sections/Journey"));

const StorySection = dynamic(() => import("@/components/sections/Story"));


export default function DealershipPage() {
  return (
    <>
      <Navigation />
      <main className="relative bg-background">
        
        {/* --- ACT 1: Hero reveals About --- */}
        <HeroSection />
        <AboutSection />

        {/* --- ACT 2: Journey covers About, then reveals Story --- */}
        
        <div className="sticky top-0 z-0 flex h-[100vh] w-full flex-col justify-center overflow-hidden bg-background">
          <StorySection />
        </div>

        <div className="relative z-10 mt-[-100vh] w-full bg-background">
          <JourneySection />
        </div>

        {/* This invisible spacer is the trigger for the Story text animation. 
            200vh gives time for the GSAP text to fade in, hold, and fade out. */}
        <div id="story-trigger" className="pointer-events-none h-[200vh] w-full" />


        {/* --- ACT 3: Reviews cover Story, everything else scrolls normally --- */}
        
        <div className="relative z-20 w-full bg-secondary">
          <ReviewsSection />
          
          <div className="bg-background">
            <LocationsSection />
            <FaqSection />
            <Contact />
            <SocialSection />
          </div>
        </div>

      </main>
      <FloatingWhatsApp/>

      <Footer />
    </>
  );
}