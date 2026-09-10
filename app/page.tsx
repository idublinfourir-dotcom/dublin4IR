import ImpactStats from "@/components/ImpactStats";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import HowWeWork from "@/components/HowWeWork";
import OurWorks from "@/components/OurWorks";
import ServicesSection from "@/components/ServicesSection";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <ServicesSection />
      <OurWorks />
      <TechStack />
      <HowWeWork />
      <ContactSection />
    </>
  );
}
