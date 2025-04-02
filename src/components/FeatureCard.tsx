
import { cn } from "@/lib/utils";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const FeatureCard = ({ title, description, icon, className }: FeatureCardProps) => {
  return (
    <div className={cn("p-6 bg-white rounded-lg shadow-sm border border-gray-100 h-full", className)}>
      {icon && <div className="mb-4 text-meso-accent">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
