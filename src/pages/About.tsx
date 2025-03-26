
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TeamMember from "@/components/TeamMember";

const About = () => {
  // Team members data
  const teamMembers = [
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
      name: "Alex Morgan",
      role: "Creative Director",
      bio: "Alex leads our creative vision with over 10 years of experience in design and digital strategy.",
      socials: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        email: "alex@cre8ive4.com",
      },
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      name: "Sarah Chen",
      role: "Web Developer",
      bio: "Sarah specializes in front-end development, creating responsive and interactive web experiences.",
      socials: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        email: "sarah@cre8ive4.com",
      },
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      name: "David Wilson",
      role: "Video Producer",
      bio: "David brings stories to life through compelling videography and expert editing techniques.",
      socials: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        email: "david@cre8ive4.com",
      },
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      name: "Emma Johnson",
      role: "Graphic Designer",
      bio: "Emma creates stunning visual identities and graphics that help brands stand out from the crowd.",
      socials: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        email: "emma@cre8ive4.com",
      },
    },
  ];
  
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block bg-cre8ive-yellow/20 text-cre8ive-teal text-sm font-medium py-1 px-3 rounded-full mb-2">
                About Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-cre8ive-teal leading-tight">
                We Craft Digital Experiences That Inspire
              </h1>
              <p className="text-lg text-gray-600">
                Founded in 2018, Cre8ive4 is a team of passionate creatives dedicated to helping businesses and individuals bring their visions to life through digital media.
              </p>
              <p className="text-gray-600">
                We combine technical expertise with creative flair to deliver web development, video editing, graphic design, and audio production services that exceed expectations and help our clients achieve their goals.
              </p>
              <div className="pt-4">
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Work With Us
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cre8ive-teal/20 to-cre8ive-yellow/20 rounded-2xl blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop" 
                  alt="Creative team working together" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left - Image */}
            <div className="order-2 md:order-1">
              <div className="relative h-96">
                <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-cre8ive-teal rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                    alt="Web development project" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-[60%] h-[65%] bg-cre8ive-yellow rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=2064&auto=format&fit=crop" 
                    alt="Digital design project" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-block bg-cre8ive-teal/10 text-cre8ive-teal text-sm font-medium py-1 px-3 rounded-full mb-2">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-cre8ive-teal">
                Bringing Creative Visions to Life
              </h2>
              <p className="text-gray-600">
                Our mission is to empower businesses and individuals with digital solutions that are not only visually stunning but also functional and effective in meeting their objectives.
              </p>
              <p className="text-gray-600">
                We believe in the power of creativity to transform ideas into impactful digital experiences that resonate with audiences and drive results.
              </p>
              
              {/* Values */}
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-cre8ive-teal mb-1">Creativity</h3>
                  <p className="text-sm text-gray-600">We approach every project with fresh ideas and innovative thinking.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-cre8ive-teal mb-1">Quality</h3>
                  <p className="text-sm text-gray-600">We maintain the highest standards in everything we create.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-cre8ive-teal mb-1">Collaboration</h3>
                  <p className="text-sm text-gray-600">We work closely with clients to ensure their vision is realized.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-cre8ive-teal mb-1">Innovation</h3>
                  <p className="text-sm text-gray-600">We stay ahead of the curve with current technologies and trends.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block bg-cre8ive-yellow/20 text-cre8ive-teal text-sm font-medium py-1 px-3 rounded-full mb-3">
              Our Team
            </div>
            <h2 className="section-title">Meet the Creatives</h2>
            <p className="text-lg text-gray-600">
              We're a team of passionate individuals dedicated to helping you bring your vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-cre8ive-teal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's collaborate to create something amazing that achieves your goals and exceeds your expectations.
          </p>
          <Link to="/contact" className="btn-secondary inline-flex items-center">
            Start a Project
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
