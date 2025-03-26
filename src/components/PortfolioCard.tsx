
import { useState } from "react";
import { ExternalLink, Plus } from "lucide-react";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  link?: string;
}

const PortfolioCard = ({ image, title, category, description, link }: PortfolioCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative rounded-2xl overflow-hidden hover-scale cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-cre8ive-teal/80 flex flex-col justify-end p-6 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="text-sm font-medium text-cre8ive-yellow mb-2">
              {category}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/80 text-sm mb-4">{description}</p>
            
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-cre8ive-yellow transition-colors"
              >
                View Project <ExternalLink size={14} className="ml-1" />
              </a>
            )}
          </div>
        </div>
        
        {/* Quick View Button (Only visible when not hovered) */}
        <button 
          className={`absolute bottom-4 right-4 p-3 rounded-full bg-white text-cre8ive-teal transition-all duration-300 ${
            isHovered ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
