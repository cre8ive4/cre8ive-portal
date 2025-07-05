import { useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import { link } from "fs";

// Project categories
type Category =
  | "All"
  | "Web Development"
  | "Video Editing"
  | "Graphic Design"
  | "Content Writing";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  // Portfolio projects data
  const projects = [
    {
      image: "/portfolio/importify.png",
      link: "https://importifygroup.com/",
      title: "Importify Group",
      category: "Web Development",
      description: "Modern, responsive website for Importify Group.",
    },
    {
      image: "/portfolio/nextgenworld.png",
      link: "https://thenextgenworld.vercel.app/",
      title: "NextGen World",
      category: "Web Development",
      description: "Modern, responsive website of Education institute.",
    },
    {
      image: "/portfolio/paramboyshostel.png",
      link: "https://paramboyshostel.vercel.app/",
      title: "Param Boys Hostel",
      category: "Web Development",
      description: "Modern, responsive website for HOstel.",
    },
    {
      image: "/portfolio/avadhautoagency.png",
      link: "https://avadh-auto-parts.vercel.app/",
      title: "Avadha Auto Agency",
      category: "Web Development",
      description: "Modern, responsive website for an auto parts agency.",
    },
    {
      image: "/portfolio/startup.png",
      link: "https://startup-ltd-demo.vercel.app/",
      title: "startup ltd",
      category: "Web Development",
      description: "Modern, responsive website for startup ideas.",
    },
    {
      image: "/portfolio/starter.png",
      link: "https://insight-spark-blog.vercel.app/",
      title: "Insight Spark",
      category: "Web Development",
      description: "Modern, responsive website for Blog.",
    },

    {
      image:
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2070&auto=format&fit=crop",
      title: "Catchy Video Ad",
      link: "https://www.instagram.com/cre8ive.4",
      category: "Video Editing",
      description: "Series of promotional videos for a new product launch.",
    },

    {
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
      title: "Eco Brand Identity",
      link: "https://www.instagram.com/cre8ive.4",
      category: "Graphic Design",
      description: "Complete brand identity for an eco-friendly product line.",
    },

    {
      image:
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Content Writing",
      link: "https://www.instagram.com/cre8ive.4",
      category: "Content Writing",
      description: "Engaging blog posts and articles for a tech startup.",
    },
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Categories for filter
  const categories: Category[] = [
    "All",
    "Web Development",
    "Video Editing",
    "Graphic Design",
    "Content Writing",
  ];

  return (
    <main className="pt-20">
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block bg-cre8ive-yellow/20 text-cre8ive-teal text-sm font-medium py-1 px-3 rounded-full mb-3">
              Our Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-cre8ive-teal mb-4">
              Our Creative Works
            </h1>
            <p className="text-lg text-gray-600">
              Browse through our portfolio to see the range of projects we've
              delivered for our clients.
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
              <p className="text-gray-500">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
