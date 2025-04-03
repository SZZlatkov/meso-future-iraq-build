
import Section from "@/components/Section";

const AboutSection = () => {
  return (
    <Section 
      id="about" 
      title="About MESO" 
      subtitle="Unlocking Private Sector Potential"
      titleColor="#14213D"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg mb-8 text-meso-light">
          MESO targets economic transformation in Iraq by bridging global expertise, capital, and innovation with local talent and market needs. We empower entrepreneurs and build sustainable industries through a vertically integrated ecosystem.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
