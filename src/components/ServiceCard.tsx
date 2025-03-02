
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const ServiceCard = ({ title, description, icon: Icon, delay = 0 }: ServiceCardProps) => {
  const animationDelay = `${delay}ms`;

  return (
    <div 
      className="group relative px-6 py-8 rounded-2xl bg-white shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover-lift"
      style={{ 
        animationDelay,
        opacity: 0,
        transform: 'translateY(20px)'
      }}
      data-animate="true"
    >
      <div className="w-14 h-14 mb-6 rounded-xl flex items-center justify-center bg-alfatech-50 text-alfatech-600 group-hover:bg-alfatech-600 group-hover:text-white transition-colors duration-300">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-alfatech-950 group-hover:text-alfatech-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground">
        {description}
      </p>
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-alfatech-600 group-hover:w-full transition-all duration-300 rounded-b-2xl"></div>
    </div>
  );
};

export default ServiceCard;
