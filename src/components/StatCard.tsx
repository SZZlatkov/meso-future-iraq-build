
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  className?: string;
}

const StatCard = ({ title, value, description, className }: StatCardProps) => {
  return (
    <div className={cn("p-6 bg-white rounded-lg shadow-md border border-gray-100", className)}>
      <h3 className="text-lg font-medium text-gray-500 mb-1">{title}</h3>
      <p className="text-3xl font-bold text-meso-DEFAULT mb-2">{value}</p>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
  );
};

export default StatCard;
