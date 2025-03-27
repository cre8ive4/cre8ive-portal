import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
const HeroSection = () => {
  const shellRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!shellRef.current) return;
      const {
        clientX,
        clientY
      } = e;
      const {
        left,
        top,
        width,
        height
      } = shellRef.current.getBoundingClientRect();
      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;
      shellRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${x / 2}deg)`;
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <section className="min-h-screen pt-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-cre8ive-yellow/20 via-transparent to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cre8ive-teal/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cre8ive-yellow/10 rounded-full filter blur-3xl animate-pulse-soft"></div>
      </div>

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-10 md:pt-12">
        {/* Hero Content */}
        <div className="space-y-6 md:space-y-8 order-2 lg:order-1 animate-slide-up">
          <div className="inline-block bg-cre8ive-teal/10 text-cre8ive-teal text-sm font-medium py-1 px-3 rounded-full mb-2">
            We craft digital experience
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cre8ive-teal leading-tight">
            Bring Your{" "}
            <span className="relative text-cre8ive-yellow">Creative</span> Vision
            To Life
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-xl">
            Web development, video editing, graphic design, and audio production
            services for businesses and individuals.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/portfolio" className="btn-primary flex items-center">
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center items-center order-1 lg:order-2 animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-cre8ive-teal to-cre8ive-yellow opacity-20 rounded-full blur-2xl animate-pulse-soft"></div>
            <div className="relative z-10 bg-cre8ive-teal rounded-full p-6 shadow-2xl">
              <div className="bg-cre8ive-teal rounded-full p-4 relative">
                <div
                  ref={shellRef}
                  className="w-52 h-52 md:w-72 md:h-72 relative transition-transform duration-200 ease-out"
                >
                  <img
                    src="/lovable-uploads/a68cd7d8-94eb-4942-aab9-f73bcdd03448.png"
                    alt="Cre8ive4 Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
};
export default HeroSection;