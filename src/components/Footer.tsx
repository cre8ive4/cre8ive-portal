import {
  Instagram,
  Linkedin,
  Mail,
  Video,
  Image as ImageIcon,
  Headphones,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cre8ive-teal text-white py-12 mt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + About */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/a68cd7d8-94eb-4942-aab9-f73bcdd03448.png"
                alt="Cre8ive4 Logo"
                className="h-12 w-12 mr-2"
              />
              <span className="text-2xl font-bold">CRE8IVE4</span>
            </div>
            <p className="text-white/80 max-w-md mt-2">
              We craft digital experiences that elevate brands and businesses.
              Our team of creative professionals deliver high-quality web
              development, video editing, graphic design, and audio production
              services.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/cre8ive.4/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@cre8ive4.com"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li className="hover:translate-x-1 transition-transform">
                <Link to="/portfolio" className="flex items-center">
                  <Globe size={16} className="mr-2" />
                  <span>Web Development</span>
                </Link>
              </li>
              <li className="hover:translate-x-1 transition-transform">
                <Link to="/portfolio" className="flex items-center">
                  <Video size={16} className="mr-2" />
                  <span>Video Editing</span>
                </Link>
              </li>
              <li className="hover:translate-x-1 transition-transform">
                <Link to="/portfolio" className="flex items-center">
                  <ImageIcon size={16} className="mr-2" />
                  <span>Graphic Design</span>
                </Link>
              </li>
              <li className="hover:translate-x-1 transition-transform">
                <Link to="/portfolio" className="flex items-center">
                  <Headphones size={16} className="mr-2" />
                  <span>Audio Production</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li className="hover:translate-x-1 transition-transform">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:translate-x-1 transition-transform">
                <Link to="/about">About Us</Link>
              </li>
              <li className="hover:translate-x-1 transition-transform">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="hover:translate-x-1 transition-transform">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="hover:translate-x-1 transition-transform">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 text-white/70 text-center">
          <p>© {currentYear} Cre8ive4. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
