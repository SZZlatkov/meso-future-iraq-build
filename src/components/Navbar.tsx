
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ContactDialog from "./ContactDialog";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {scrolled ? (
              <img 
                src="/lovable-uploads/c0796615-e88a-4583-82d3-7dc24887fede.png" 
                alt="MESO Capital" 
                className="h-10"
              />
            ) : (
              <img 
                src="/lovable-uploads/77f2a257-cadc-4548-9462-4a291e1feedc.png" 
                alt="MESO Capital" 
                className="h-10"
              />
            )}
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className={`hover:text-meso-accent ${scrolled ? 'text-meso-DEFAULT' : 'text-white'}`}>About</a>
            <a href="#why-iraq" className={`hover:text-meso-accent ${scrolled ? 'text-meso-DEFAULT' : 'text-white'}`}>Why Iraq</a>
            <a href="#model" className={`hover:text-meso-accent ${scrolled ? 'text-meso-DEFAULT' : 'text-white'}`}>Our Model</a>
            <a href="#verticals" className={`hover:text-meso-accent ${scrolled ? 'text-meso-DEFAULT' : 'text-white'}`}>Verticals</a>
            <a href="#team" className={`hover:text-meso-accent ${scrolled ? 'text-meso-DEFAULT' : 'text-white'}`}>Team</a>
          </nav>
          <div className="flex items-center">
            <ContactDialog>
              <Button 
                variant="ghost" 
                className={`hover:text-meso-accent ${scrolled ? 'text-meso-DEFAULT' : 'text-white'}`}
              >
                Contact
              </Button>
            </ContactDialog>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
