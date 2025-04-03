
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
          MESO drives economic transformation in Iraq by connecting global expertise and capital with local talent to build sustainable industries and empower entrepreneurs through a vertically integrated ecosystem.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
