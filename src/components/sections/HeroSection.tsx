
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative bg-meso-gradient text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/77f2a257-cadc-4548-9462-4a291e1feedc.png" 
              alt="MESO Capital" 
              className="h-16 md:h-20"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Building the Future Economy of Iraq</h1>
          <p className="text-xl mb-12 text-gray-200">MESO is an investment holding and venture builder focusing on high-growth sectors to create enduring value and empower the next generation of business leaders.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ContactDialog>
              <Button className="bg-meso-accent hover:bg-meso-accent/90 text-white px-8 py-6 text-lg">
                Join Our Mission <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </ContactDialog>
            <ContactDialog buttonText="Request Pitch Deck">
              <Button variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white px-8 py-6 text-lg">
                Request Pitch Deck
              </Button>
            </ContactDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
