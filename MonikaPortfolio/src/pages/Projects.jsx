// src/pages/Projects.jsx

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projectList } from "../assets/assets";


const Projects = () => {
  return (
    <section className="min-h-screen pt-30 py-16 px-6 bg-gradient-to-br from-white via-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-indigo-800 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 My Projects
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
