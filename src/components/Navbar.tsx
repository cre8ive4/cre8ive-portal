
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-white/80 backdrop-blur-lg shadow-md"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/a68cd7d8-94eb-4942-aab9-f73bcdd03448.png" 
            alt="Cre8ive4 Logo" 
            className="h-12 w-12 md:h-14 md:w-14"
          />
          <span className="text-cre8ive-teal text-xl ml-2 font-bold">CRE8IVE4</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-2 rounded-md transition-all text-sm font-medium ${
                location.pathname === link.path
                  ? "text-cre8ive-teal bg-cre8ive-teal/10"
                  : "text-gray-600 hover:text-cre8ive-teal hover:bg-gray-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 btn-primary text-sm"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 flex flex-col space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-3 rounded-md ${
                location.pathname === link.path
                  ? "text-cre8ive-teal bg-cre8ive-teal/10"
                  : "text-gray-600 hover:text-cre8ive-teal hover:bg-gray-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary text-center mt-4"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
