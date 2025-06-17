import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaLaptopCode,
  FaGraduationCap,
  FaProjectDiagram,
  FaGithub,
  FaFileDownload,
} from "react-icons/fa";
import profileImg from "../assets/profle1.jpg";

const About = () => {
  return (
    <section className="min-h-screen py-16 px-2 sm:px-4 pt-30 bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-800 text-center mb-12">
        🙋‍♀️ About Me
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.6fr_1fr] gap-10 items-start">
        {/* Text Section */}
        <motion.div
          className="w-full bg-white shadow-lg rounded-3xl p-4 sm:p-8 md:p-10 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Hello! I’m <span className="font-semibold text-indigo-700">Monika Senger</span>, an MCA graduate from the Institute of Management and Technology, MDU. I’m passionate about building real-world tech solutions and currently focusing on{" "}
            <span className="text-purple-600 font-medium">Full-Stack Development</span> — Java, Spring Boot, React.js, MongoDB & MySQL.
          </p>

          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><span className="text-indigo-700 font-medium">Inventory Management System</span> – Java + MySQL billing & stock tracking</li>
            <li><span className="text-indigo-700 font-medium">Doctor Appointment Booking System</span> – React & MongoDB</li>
            <li><span className="text-indigo-700 font-medium">Book Review App</span> – MERN stack (admin-only review management)</li>
            <li><span className="text-indigo-700 font-medium">Mini Projects</span> – ATM, Hotel Menu, Tic Tac Toe, and many more</li>
          </ul>

          <p>
            My journey has been filled with questions, confusion, and moments of doubt — but instead of giving up, I chose to learn consistently and improve with each challenge. Every solved bug and completed project has boosted my confidence and clarity in tech.
          </p>

          <div className="flex flex-wrap gap-4 text-sm sm:text-base font-medium mt-4">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full flex items-center gap-2">
              <FaLaptopCode /> Java & MERN Stack Enthusiast
            </span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full flex items-center gap-2">
              <FaGraduationCap /> MCA Graduate
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full flex items-center gap-2">
              <FaProjectDiagram /> Project-Oriented Learner
            </span>
            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full flex items-center gap-2">
              <FaHeart /> Emotionally Strong & Self-Motivated
            </span>
          </div>

          <p>
            I believe in <strong>learning by doing</strong> — every project adds a new skill and a stronger version of me as a developer.
          </p>

          <p className="text-indigo-700 font-semibold text-center mt-6 text-lg sm:text-xl">
            My goal is to contribute to impactful tech teams, grow professionally, and build with purpose. 💻✨
          </p>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/monikasenger"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition"
            >
              <FaGithub className="text-lg" />
              Visit GitHub
            </a>
            <a
              href="/monika.pdf"
              download
              className="flex items-center gap-2 px-5 py-2 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition"
            >
              <FaFileDownload className="text-lg" />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profileImg}
            alt="Monika Senger"
            className="w-64 sm:w-72 md:w-80 lg:w-96 object-cover rounded-3xl shadow-2xl border-4 border-indigo-300 hover:scale-105 transition duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
