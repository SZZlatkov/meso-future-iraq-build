
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, TrendingUp, Briefcase, Activity, Users, Mail, Phone } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import Section from "@/components/Section";
import StatCard from "@/components/StatCard";
import FeatureCard from "@/components/FeatureCard";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
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
            <p className="text-xl mb-12 text-gray-200">MESO is a venture builder investing in high-growth sectors to create enduring value and empower the next generation of business leaders.</p>
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
      
      {/* About MESO */}
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
      
      {/* Why Iraq, Why Now */}
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
      
      {/* Our Model */}
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
      
      {/* Strategic Verticals */}
      <Section 
        id="verticals" 
        title="Strategic Verticals" 
        subtitle="We invest in sectors with high growth and ecosystem synergy"
        className="bg-meso-secondary"
        titleColor="#14213D"
      >
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
            <h3 className="text-xl font-bold mb-4 text-meso-DEFAULT">Healthcare & Technology</h3>
            <div className="h-1 w-16 bg-meso-accent mb-4"></div>
            <p className="text-meso-light">Enhancing healthcare delivery through innovative technology</p>
          </div>
        </div>
        <div className="text-center max-w-3xl mx-auto mt-12">
          <p className="text-lg italic text-meso-light">Our tech powers our bank. Our bank funds our ventures. Our ventures build the future.</p>
        </div>
      </Section>
      
      {/* How We Work */}
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
      
      {/* Team & Advisors */}
      <Section 
        id="team" 
        title="Team & Advisors" 
        subtitle="Led by regional insiders and global experts"
        className="bg-meso-secondary"
        titleColor="#14213D"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Users size={48} className="text-meso-accent" />
          </div>
          <ul className="space-y-3 text-left mx-auto max-w-lg mb-8">
            <li className="flex items-start">
              <span className="text-meso-accent mr-2">•</span>
              <span className="text-meso-light">Ex-MENA VC & PE leaders</span>
            </li>
            <li className="flex items-start">
              <span className="text-meso-accent mr-2">•</span>
              <span className="text-meso-light">Silicon Valley tech veterans</span>
            </li>
            <li className="flex items-start">
              <span className="text-meso-accent mr-2">•</span>
              <span className="text-meso-light">On-ground team in Baghdad with government and academic influence</span>
            </li>
          </ul>
        </div>
      </Section>
      
      {/* Join Us */}
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
            <div className="bg-[#1c2c4d] p-6 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-meso-accent mb-2">+30%</h3>
              <p className="text-gray-300">Target IRR</p>
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
      
      {/* Footer */}
      <footer className="bg-meso-DEFAULT text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/c0796615-e88a-4583-82d3-7dc24887fede.png" 
                  alt="MESO Capital" 
                  className="h-12"
                />
              </div>
              <p className="max-w-md text-gray-400">
                A venture builder investing in high-growth sectors to create enduring value and empower the next generation of business leaders.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">Revand Bamarni</p>
              <div className="flex items-center text-gray-400 mb-2">
                <Mail size={16} className="mr-2" /> 
                <a href="mailto:revand@mesocap.com" className="hover:text-meso-accent">revand@mesocap.com</a>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" /> 
                <a href="tel:+17037440887" className="hover:text-meso-accent">+1 703 744 0887</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} MESO Capital. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
