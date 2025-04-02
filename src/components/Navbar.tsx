
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
            <span className="text-xl font-bold text-meso-DEFAULT">MESO</span>
            <span className="ml-2 text-xl font-light text-meso-accent">Capital</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-meso-accent">About</a>
            <a href="#why-iraq" className="text-gray-700 hover:text-meso-accent">Why Iraq</a>
            <a href="#model" className="text-gray-700 hover:text-meso-accent">Our Model</a>
            <a href="#verticals" className="text-gray-700 hover:text-meso-accent">Verticals</a>
            <a href="#team" className="text-gray-700 hover:text-meso-accent">Team</a>
          </nav>
          <div className="flex items-center">
            <ContactDialog>
              <Button variant="ghost" className="text-gray-700 hover:text-meso-accent">
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
