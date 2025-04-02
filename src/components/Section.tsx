
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  dark?: boolean;
}

const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className, 
  noPadding = false,
  dark = false
}: SectionProps) => {
  return (
    <section 
      id={id} 
      className={cn(
        noPadding ? "py-0" : "py-16 md:py-24", 
        dark ? "bg-meso-DEFAULT text-white" : "bg-white",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", dark ? "text-white" : "text-meso-DEFAULT")}>{title}</h2>
          {subtitle && <p className={cn("text-lg max-w-3xl mx-auto", dark ? "text-gray-300" : "text-meso-light")}>{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
