import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
   <footer className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 text-gray-800  shadow-2xl border-t border-indigo-200">
  <motion.div
        className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Name or Logo */}
        <h1 className="text-lg md:text-xl font-bold text-indigo-700 mb-4 md:mb-0 drop-shadow-sm">
          Monika Senger © {new Date().getFullYear()}
        </h1>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <motion.a
            href="https://github.com/monikasenger"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.25, rotate: 5 }}
            className="text-gray-700 hover:text-black transition duration-300"
            title="GitHub"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/monikasenger"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.25, rotate: -5 }}
            className="text-blue-600 hover:text-blue-800 transition duration-300"
            title="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="mailto:msenger054@gmail.com"
            whileHover={{ scale: 1.25, rotate: 3 }}
            className="text-red-500 hover:text-red-600 transition duration-300"
            title="Email"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </motion.div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-600 py-4 border-t border-indigo-200">
        Built with 💖 using <span className="font-medium text-purple-600">React</span> &{" "}
        <span className="font-medium text-blue-600">Tailwind CSS</span>
      </div>
    </footer>
  );
};

export default Footer;
