import EnhancedTechStack from "@/components/main/tecnologies-section";
import Diagram from "../components/main/diagram";
import PortfolioHero from "../components/main/hero";
import ContactSection from "@/components/main/contact";


export default function Home() {
  return (
    <main>
      <PortfolioHero />
      <Diagram />
      <EnhancedTechStack/>    
      <ContactSection />
    </main>
  );
}