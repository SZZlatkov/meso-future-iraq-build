
import Section from "@/components/Section";
import { Building2, ShoppingBag, Repeat } from "lucide-react";

const OurModelSection = () => {
  return (
    <Section 
      id="model" 
      title="Our Model" 
      subtitle="Build. Buy. Borrow."
      titleColor="#14213D"
    >
      <div className="max-w-3xl mx-auto mb-10">
        <p className="text-center text-lg text-meso-light">
          At MESO, we take a pragmatic, execution-first approach to venture building by combining strategic acquisitions, in-house innovation, and cutting-edge technology.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-meso-secondary rounded-full mr-3">
              <Building2 size={24} className="text-meso-accent" />
            </div>
            <h3 className="text-xl font-bold text-meso-DEFAULT">Build</h3>
          </div>
          <p className="text-meso-light mb-4">We create high-impact ventures from the ground up:</p>
          <ul className="space-y-2 text-sm text-meso-light">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Launching a Digital Bank with Central Bank licensing</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Building proprietary AI tools (LLMs, NLP, data engines, chatbots)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Developing new tech-enabled businesses in underdeveloped verticals</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-meso-secondary rounded-full mr-3">
              <ShoppingBag size={24} className="text-meso-accent" />
            </div>
            <h3 className="text-xl font-bold text-meso-DEFAULT">Buy</h3>
          </div>
          <p className="text-meso-light mb-4">We acquire proven platforms and infrastructure to accelerate ecosystem development:</p>
          <ul className="space-y-2 text-sm text-meso-light">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>White-label banking, insurance, and payment tech</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Equity in digital marketing and market research firms</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>M&A agreements with B2B and B2G tech companies</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-meso-secondary rounded-full mr-3">
              <Repeat size={24} className="text-meso-accent" />
            </div>
            <h3 className="text-xl font-bold text-meso-DEFAULT">Borrow</h3>
          </div>
          <p className="text-meso-light mb-4">We integrate best-in-class global technologies and adapt them for the local context:</p>
          <ul className="space-y-2 text-sm text-meso-light">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Licensing scalable tech infrastructure</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Embedding AI and automation in financial, logistics, and e-commerce solutions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Applying international business practices to local markets</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center max-w-3xl mx-auto mt-12">
        <p className="text-lg italic text-meso-light">By combining these three pillars, MESO delivers speed, scalability, and systemic impact—creating entire industries where none existed.</p>
      </div>
    </Section>
  );
};

export default OurModelSection;
