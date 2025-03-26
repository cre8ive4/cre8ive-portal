
import { useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";

// Project categories
type Category = "All" | "Web Development" | "Video Editing" | "Graphic Design" | "Audio Production";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  
  // Portfolio projects data
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      title: "Oceanview Resort Website",
      category: "Web Development",
      description: "Modern, responsive website for a luxury beach resort.",
    },
    {
      image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=2064&auto=format&fit=crop",
      title: "Fitness App UI",
      category: "Web Development",
      description: "Mobile fitness application interface design and implementation.",
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Full-featured online store with payment integration.",
    },
    {
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2070&auto=format&fit=crop",
      title: "Corporate Video Series",
      category: "Video Editing",
      description: "Series of promotional videos for a tech company.",
    },
    {
      image: "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?q=80&w=2064&auto=format&fit=crop",
      title: "Product Launch Video",
      category: "Video Editing",
      description: "Cinematic product reveal for a smartphone launch.",
    },
    {
      image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=2044&auto=format&fit=crop",
      title: "Travel Documentary",
      category: "Video Editing",
      description: "Short documentary about sustainable tourism.",
    },
    {
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
      title: "Eco Brand Identity",
      category: "Graphic Design",
      description: "Complete brand identity for an eco-friendly product line.",
    },
    {
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
      title: "Magazine Layout",
      category: "Graphic Design",
      description: "Editorial design for a lifestyle magazine.",
    },
    {
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop",
      title: "Product Packaging",
      category: "Graphic Design",
      description: "Packaging design for a premium coffee brand.",
    },
    {
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop",
      title: "Podcast Production",
      category: "Audio Production",
      description: "Full audio production for a business leadership podcast.",
    },
    {
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop",
      title: "Commercial Voice-over",
      category: "Audio Production",
      description: "Professional voice-over for a nationwide TV commercial.",
    },
    {
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
      title: "Music Production",
      category: "Audio Production",
      description: "Original soundtrack composition for a short film.",
    },
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  // Categories for filter
  const categories: Category[] = ["All", "Web Development", "Video Editing", "Graphic Design", "Audio Production"];
  
  return (
    <main className="pt-20">
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block bg-cre8ive-yellow/20 text-cre8ive-teal text-sm font-medium py-1 px-3 rounded-full mb-3">
              Our Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-cre8ive-teal mb-4">Our Creative Works</h1>
            <p className="text-lg text-gray-600">
              Browse through our portfolio to see the range of projects we've delivered for our clients.
            </p>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-cre8ive-teal text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.title} {...project} />
            ))}
          </div>
          
          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
