
import Section from "@/components/Section";
import { Users } from "lucide-react";

const TeamSection = () => {
  return (
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
  );
};

export default TeamSection;
