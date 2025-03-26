
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, link, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="glass-panel rounded-2xl p-6 md:p-8 hover-scale group overflow-hidden relative"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cre8ive-teal to-cre8ive-yellow opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300 rounded-2xl"></div>
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="bg-cre8ive-teal/10 text-cre8ive-teal p-3 rounded-xl inline-block mb-4">
          {icon}
        </div>
        
        {/* Content */}
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-cre8ive-teal">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        {/* Link */}
        <Link 
          to={link} 
          className="text-cre8ive-teal font-medium flex items-center group-hover:underline"
        >
          Learn More 
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
