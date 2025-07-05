// src/pages/Projects.jsx

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projectList } from "../assets/assets";


const Projects = () => {
  const majorProjects = projectList.filter(project => project.category === "Major");
  const miniProjects = projectList.filter(project => project.category === "Mini");

  return (
    <section id="projects" className="min-h-screen pt-20 py-16 px-6 bg-gradient-to-br from-white via-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-indigo-800 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 My Projects
        </motion.h2>

        {/* Major Projects Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-6 border-b border-indigo-200 pb-2">
            🧠 Major Projects
          </h3>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {majorProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

        {/* Mini Projects Section */}
        <div>
          <h3 className="text-2xl font-semibold text-purple-700 mb-6 border-b border-purple-200 pb-2">
            ⚙️ Mini Projects
          </h3>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {miniProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
