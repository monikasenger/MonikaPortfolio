import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImg from "../assets/profile.jpg";

const Home = () => {
  const [hovered, setHovered] = useState(false);

const menuItems = [
  { label: "About", path: "/about", x: -180, y: -150, color: "bg-gradient-to-br from-pink-400 to-purple-500" },
  { label: "Skills", path: "/skills", x: -110, y: -200, color: "bg-gradient-to-br from-yellow-400 to-red-500" },
  { label: "Projects", path: "/projects", x: -20, y: -210, color: "bg-gradient-to-br from-green-400 to-blue-500" },
  { label: "Contact", path: "/contact", x: 65, y: -170, color: "bg-gradient-to-br from-indigo-400 to-cyan-500" },
];



  return (
    <section className="relative min-h-screen py-20  pt-40 flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f8f9ff] px-4">
      {/* Animated Blobs */}
      <div className="absolute w-[300px] h-[300px] bg-purple-300 opacity-30 rounded-full -top-20 -left-20 animate-ping" />
      <div className="absolute w-[250px] h-[250px] bg-indigo-400 opacity-20 rounded-full top-40 right-10 animate-pulse" />

      {/* Profile Circle */}
      <div
        className="relative group w-70 h-70 rounded-full border-4 border-indigo-500 bg-white/20 backdrop-blur-md shadow-xl hover:scale-105 transition-all duration-500 flex items-center justify-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={profileImg}
          alt="Monika"
          className="w-60 h-60 rounded-full object-cover border-4 border-white"
        />

        {/* Glowing ring */}
        <motion.div
          className="absolute w-full h-full rounded-full border-2 border-indigo-400 animate-spin-slow"
          style={{ borderStyle: "dashed" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Orbiting Buttons */}
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute w-24 h-24 flex items-center justify-center text-white font-semibold rounded-full shadow-xl transform hover:scale-110 transition-all duration-300 ${item.color}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              hovered
                ? { opacity: 1, scale: 1, x: item.x, y: item.y }
                : { opacity: 0, scale: 0, x: 0, y: 0 }
            }
            transition={{ delay: index * 0.1, duration: 0.5 }}
           style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
>
            <Link to={item.path}>{item.label}</Link>
          </motion.div>
        ))}
      </div>

      {/* Intro Text */}
      <motion.h1
        className="text-4xl sm:text-5xl text-indigo-800 font-extrabold mt-12 text-center shine-text"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Hi, I'm Monika Senger
      </motion.h1>

      <p className="text-center text-gray-600 max-w-xl mt-4 leading-relaxed">
        MCA Graduate | Full-Stack Developer (Java & MERN) | I love turning ideas into scalable, beautiful software.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex gap-4">
        <a
          href="/monika.pdf"
          download
          className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-indigo-700 transition"
        >
          📄 Download Resume
        </a>
        <Link
          to="/contact"
          className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition"
        >
          ✉️ Contact Me
        </Link>
      </div>
    </section>
  );
};

export default Home;  