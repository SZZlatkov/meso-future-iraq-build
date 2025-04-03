
import { Mail } from "lucide-react";

const FooterSection = () => {
  return (
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
              An investment holding and venture builder focusing on high-growth sectors to create enduring value and empower the next generation of business leaders.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex items-center text-gray-400 mb-2">
              <Mail size={16} className="mr-2" /> 
              <a href="mailto:info@mesocap.com" className="hover:text-meso-accent">info@mesocap.com</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MESO Capital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
