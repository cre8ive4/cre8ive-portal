import {
  Globe,
  Video,
  Image as ImageIcon,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";

const Index = () => {
  // Services data
  const services = [
    {
      icon: <Globe size={24} />,
      title: "Web Development",
      description:
        "We create responsive, user-friendly websites and web applications tailored to your business needs.",
      link: "/portfolio",
    },
    {
      icon: <Video size={24} />,
      title: "Video Editing",
      description:
        "Professional video editing services to help you tell your story in the most engaging way possible.",
      link: "/portfolio",
    },
    {
      icon: <ImageIcon size={24} />,
      title: "Graphic Design",
      description:
        "Eye-catching graphics and visuals that communicate your brand's message effectively.",
      link: "/portfolio",
    },
    {
      icon: <Headphones size={24} />,
      title: "Audio Production",
      description:
        "High-quality audio production and dubbing services to enhance your content.",
      link: "/portfolio",
    },
  ];

  // Featured portfolio data
  const featuredProjects = [
    {
      image: "/portfolio/nextgenworld.png",
      link: "https://nextgen-kids-learning.lovable.app/",
      title: "NextGen World",
      category: "Web Development",
      description: "Modern, responsive website of Education institute.",
    },
    {
      image: "/portfolio/avadhautoagency.png",
      link: "https://avadh-auto-parts.vercel.app/",
      title: "Avadha Auto Agency",
      category: "Web Development",
      description: "Modern, responsive website for an auto parts agency.",
    },
    {
      image: "/portfolio/paramboyshostel.png",
      link: "https://hostelconnective.lovable.app/",
      title: "Param Boys Hostel",
      category: "Web Development",
      description: "Modern, responsive website for HOstel.",
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="section-padding" id="services">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block bg-cre8ive-yellow/20 text-cre8ive-teal text-sm font-medium py-1 px-3 rounded-full mb-3">
              Our Services
            </div>
            <h2 className="section-title">What We Do Best</h2>
            <p className="text-lg text-gray-600">
              We offer a range of creative services to help your business stand
              out in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 stagger-animation">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block bg-cre8ive-yellow/20 text-cre8ive-teal text-sm font-medium py-1 px-3 rounded-full mb-3">
              Our Work
            </div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="text-lg text-gray-600">
              Take a look at some of our recent work across various creative
              disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {featuredProjects.map((project) => (
              <PortfolioCard key={project.title} {...project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="btn-primary inline-flex items-center"
            >
              View All Projects
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div className="inline-block bg-cre8ive-yellow/20 text-cre8ive-teal text-sm font-medium py-1 px-3 rounded-full mb-2">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-cre8ive-teal">
                Creative Solutions Tailored to Your Needs
              </h2>
              <p className="text-gray-600">
                We combine creativity with technical expertise to deliver
                solutions that not only look great but also achieve your
                business objectives.
              </p>

              <div className="space-y-4 pt-4">
                {/* Feature 1 */}
                <div className="flex items-start">
                  <div className="bg-cre8ive-teal/10 text-cre8ive-teal p-2 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-cre8ive-teal">
                      Creative Expertise
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Our team of creative professionals brings years of
                      experience across various disciplines.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start">
                  <div className="bg-cre8ive-teal/10 text-cre8ive-teal p-2 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-cre8ive-teal">
                      Tailored Approach
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We don't believe in one-size-fits-all solutions. Each
                      project is customized to your specific needs.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start">
                  <div className="bg-cre8ive-teal/10 text-cre8ive-teal p-2 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-cre8ive-teal">
                      Client-Focused
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We prioritize understanding your goals and maintain clear
                      communication throughout the process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center"
                >
                  Get Started Today
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cre8ive-teal/20 to-cre8ive-yellow/20 rounded-2xl blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Creative team working together"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cre8ive-teal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's work together to create something amazing. Contact us today to
            discuss your project needs.
          </p>
          <Link
            to="/contact"
            className="btn-secondary inline-flex items-center"
          >
            Get in Touch
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
