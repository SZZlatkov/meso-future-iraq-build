
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyIraqSection from "@/components/sections/WhyIraqSection";
import OurModelSection from "@/components/sections/OurModelSection";
import StrategicVerticalsSection from "@/components/sections/StrategicVerticalsSection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import TeamSection from "@/components/sections/TeamSection";
import JoinUsSection from "@/components/sections/JoinUsSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyIraqSection />
      <OurModelSection />
      <StrategicVerticalsSection />
      <HowWeWorkSection />
      <TeamSection />
      <JoinUsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
