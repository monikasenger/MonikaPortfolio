import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, tech, liveLinks = {}, githubLink, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl p-6 space-y-4 border border-indigo-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300"
    >
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={`Screenshot of ${title} project`}
          className="rounded-xl w-full h-48 object-cover shadow-lg mb-3"
          loading="lazy"
        />
      )}

      {/* Project Title */}
      <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent bg-clip-text drop-shadow-md">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed">{description}</p>

      {/* Technologies Used */}
      <div className="flex flex-wrap gap-2 text-sm mt-2" aria-label="Technologies used">
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium shadow-sm hover:bg-indigo-200 transition"
          >
            🚀 {item}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-6 pt-3 items-center">
        {githubLink && (
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition"
            aria-label={`GitHub repository for ${title}`}
          >
            <FaGithub /> Code
          </motion.a>
        )}

        {Object.entries(liveLinks).map(([label, url], idx) => (
          <motion.a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition"
            aria-label={`Live demo link for ${title} - ${label}`}
          >
            <FaExternalLinkAlt /> {label}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
