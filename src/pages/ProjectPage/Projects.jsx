import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects({ darkMode }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: "Task Manager App",
      description: "Manage tasks efficiently using MERN stack.",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=800&q=80",
    },
    {
      title: "Personal Blog",
      description: "Responsive blog built with React and Markdown.",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?fit=crop&w=800&q=80",
    },
    {
      title: "E-commerce Store",
      description:
        "Laravel + MySQL based full-stack store with user auth and cart.",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?fit=crop&w=800&q=80",
    },
  ];

  const cardStyle = `w-full flex flex-col rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 group cursor-pointer relative overflow-hidden border-2 
    ${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black border-gray-200"}`;

  const glowOverlay = `absolute -inset-1 rounded-xl blur-md opacity-0 group-hover:opacity-40 transition 
    bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 z-0`;

  return (
    <section
      id="projects"
      className={`py-20 px-6 md:px-16 transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-white via-cyan-50 to-blue-100"
      }`}
    >
      <h2
        className={`text-3xl md:text-5xl font-extrabold text-center mb-14 tracking-tight ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
        data-aos="fade-up"
      >
        Featured{" "}
        <span className="text-cyan-500 animate-gradient">Projects</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} data-aos="zoom-in" className="relative group">
            {/* Glow border */}
            <div className={glowOverlay}></div>

            <div className={cardStyle}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-t-xl"
              />
              <div className="p-6 z-10 relative space-y-3">
                <h3 className="text-xl md:text-2xl font-semibold group-hover:underline text-cyan-500 dark:text-cyan-400">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
