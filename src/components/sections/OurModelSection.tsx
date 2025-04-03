
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import { Building2, TrendingUp, Briefcase, Activity } from "lucide-react";

const OurModelSection = () => {
  return (
    <Section 
      id="model" 
      title="Our Model" 
      subtitle="Build. Borrow. Buy."
      titleColor="#14213D"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <FeatureCard 
          title="Tech" 
          description="AI, LLM, NLP, proprietary tools" 
          icon={<Building2 size={24} />} 
        />
        <FeatureCard 
          title="Finance" 
          description="Digital bank license secured" 
          icon={<TrendingUp size={24} />} 
        />
        <FeatureCard 
          title="Infrastructure" 
          description="Acquiring white-label banking, insurance & payment platforms" 
          icon={<Briefcase size={24} />} 
        />
        <FeatureCard 
          title="Content & Research" 
          description="Data-driven market analysis and execution" 
          icon={<Activity size={24} />} 
        />
      </div>
    </Section>
  );
};

export default OurModelSection;
