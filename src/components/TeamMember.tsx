
import { Instagram, Linkedin, Mail } from "lucide-react";

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
}

const TeamMember = ({ image, name, role, bio, socials }: TeamMemberProps) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl hover-scale">
        {/* Image */}
        <div className="aspect-[3/4] overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-cre8ive-teal/90 via-transparent to-transparent opacity-90"></div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="text-cre8ive-yellow font-medium text-sm mb-3">{role}</div>
          
          {/* Bio (Only shows on hover) */}
          <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden group-hover:overflow-visible">
            {bio}
          </p>
          
          {/* Social links */}
          {socials && (
            <div className="flex space-x-3 mt-2">
              {socials.instagram && (
                <a 
                  href={socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                >
                  <Instagram size={16} />
                </a>
              )}
              
              {socials.linkedin && (
                <a 
                  href={socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                >
                  <Linkedin size={16} />
                </a>
              )}
              
              {socials.email && (
                <a 
                  href={`mailto:${socials.email}`}
                  className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                >
                  <Mail size={16} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
