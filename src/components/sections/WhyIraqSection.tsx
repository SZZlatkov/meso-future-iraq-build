
import Section from "@/components/Section";
import StatCard from "@/components/StatCard";

const WhyIraqSection = () => {
  return (
    <Section 
      id="why-iraq" 
      title="Why Iraq, Why Now?" 
      className="bg-meso-secondary"
      titleColor="#14213D"
    >
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <StatCard 
          title="GDP" 
          value="$270B" 
          description="42% from fossil fuels, 88% public income" 
        />
        <StatCard 
          title="Public Sector" 
          value="30%+" 
          description="Employment in public sector, low private sector competition" 
        />
        <StatCard 
          title="Market Gaps" 
          value="Critical" 
          description="Gaps in talent, innovation, and infrastructure" 
        />
      </div>
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-xl font-semibold mb-8 text-[#14213D]">→ MESO is here to fix that.</p>
        <p className="text-lg text-meso-light">We deploy capital and expertise to create new industries and sustainable jobs beyond oil.</p>
      </div>
    </Section>
  );
};

export default WhyIraqSection;
