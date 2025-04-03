
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";

const JoinUsSection = () => {
  return (
    <Section 
      id="join-us" 
      title="Join Us" 
      className="bg-[#14213D]"
      titleColor="white"
      dark={true}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center gap-12 mb-8">
          <div className="bg-[#1c2c4d] p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-meso-accent mb-2">$72M</h3>
            <p className="text-gray-300">Raising</p>
          </div>
        </div>
        <p className="mb-8 text-white text-lg">
          Through our ADGM-based HoldCo, MESO invests via a licensed digital bank and local entities to maximize offshore asset value.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <ContactDialog>
            <Button className="bg-meso-accent hover:bg-meso-accent/90 text-white px-8 py-6 text-lg">
              Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </ContactDialog>
          <ContactDialog buttonText="Download Executive Summary">
            <Button variant="outline" className="bg-transparent hover:bg-white/20 text-white border-white px-8 py-6 text-lg">
              Download Executive Summary
            </Button>
          </ContactDialog>
        </div>
      </div>
    </Section>
  );
};

export default JoinUsSection;
