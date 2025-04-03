
import Section from "@/components/Section";

const StrategicVerticalsSection = () => {
  return (
    <Section 
      id="verticals" 
      title="Strategic Verticals" 
      subtitle="We invest in sectors with high growth and ecosystem synergy"
      className="bg-meso-secondary"
      titleColor="#14213D"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-meso-DEFAULT">Banking & Insurance</h3>
          <div className="h-1 w-16 bg-meso-accent mb-4"></div>
          <p className="text-meso-light">Modernizing financial services with digital-first solutions</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-meso-DEFAULT">E-Commerce & Logistics</h3>
          <div className="h-1 w-16 bg-meso-accent mb-4"></div>
          <p className="text-meso-light">Building retail infrastructure for the digital economy</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-meso-DEFAULT">Technology</h3>
          <div className="h-1 w-16 bg-meso-accent mb-4"></div>
          <p className="text-meso-light">Driving the digital transformation with AI-powered tools</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-meso-DEFAULT">Venture Builder</h3>
          <div className="h-1 w-16 bg-meso-accent mb-4"></div>
          <p className="text-meso-light">Building high-impact start-ups from the ground up</p>
        </div>
      </div>
      <div className="text-center max-w-3xl mx-auto mt-12">
        <p className="text-lg italic text-meso-light">Our tech powers our bank. Our bank funds our ventures. Our ventures build the future.</p>
      </div>
    </Section>
  );
};

export default StrategicVerticalsSection;
