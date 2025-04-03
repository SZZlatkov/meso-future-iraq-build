
import Section from "@/components/Section";

const HowWeWorkSection = () => {
  return (
    <Section 
      id="how-we-work" 
      title="How We Work" 
      subtitle="From Idea to Industry"
      titleColor="#14213D"
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="flex gap-6">
            <div className="flex-shrink-0 mt-1">
              <div className="bg-meso-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-meso-DEFAULT">Pipeline Creation</h3>
              <p className="text-meso-light">Six Sigma-driven market analysis to identify opportunities</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 mt-1">
              <div className="bg-meso-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-meso-DEFAULT">Entrepreneurship Development</h3>
              <p className="text-meso-light">In-house training, MVP support to build strong founding teams</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 mt-1">
              <div className="bg-meso-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-meso-DEFAULT">Ecosystem Building</h3>
              <p className="text-meso-light">Regulatory support, public-private partnerships to enable growth</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 mt-1">
              <div className="bg-meso-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-meso-DEFAULT">Operational Execution</h3>
              <p className="text-meso-light">End-to-end support from capital to scale for sustainable growth</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowWeWorkSection;
