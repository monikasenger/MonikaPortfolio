import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

const Home = () => {
  const [hovered, setHovered] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 const getPosition = (label) => {
  if (screenWidth < 640) {
    // 📱 Mobile Layout
    switch (label) {
      case "About": return { x: -160, y: -100 };
      case "Education": return { x: -120, y: -150 };
      case "Skills": return { x: -60, y: -180 };
      case "Projects": return { x: 10, y: -170 };
      case "Contact": return { x: 65, y: -130 };
      case "Certificates": return { x: 95, y: -70 };
      default: return { x: 0, y: 0 };
    }
  } else if (screenWidth < 1024) {
    // 💻 Tablet Layout
    switch (label) {
      case "About": return { x: -200, y: -100 };
      case "Education": return { x: -160, y: -170 };
      case "Skills": return { x: -80, y: -210 };
      case "Projects": return { x: 10, y: -210 };
      case "Contact": return { x: 70, y: -160 };
      case "Certificates": return { x: 110, y: -90 };
      default: return { x: 0, y: 0 };
    }
  } else {
    // 🖥️ Desktop Layout
    switch (label) {
      case "About": return { x: -210, y: -80 };
      case "Education": return { x: -180, y: -150 };
      case "Skills": return { x: -120, y: -200 };
      case "Projects": return { x: -40, y: -210 };
      case "Contact": return { x: 40, y: -180 };
      case "Certificates": return { x: 100, y: -120 };
      default: return { x: 0, y: 0 };
    }
  }
};



  const menuItems = [
    { label: "About", path: "/about", color: "bg-gradient-to-br from-pink-400 to-purple-500" },
    { label: "Education", path: "/education", color: "bg-gradient-to-br from-purple-400 to-indigo-500" },
    { label: "Skills", path: "/skills", color: "bg-gradient-to-br from-yellow-400 to-red-500" },
    { label: "Projects", path: "/projects", color: "bg-gradient-to-br from-green-400 to-blue-500" },
    { label: "Contact", path: "/contact", color: "bg-gradient-to-br from-indigo-400 to-cyan-500" },
    { label: "Certificates", path: "/certifications", color: "bg-gradient-to-br from-fuchsia-500 to-rose-500" },
  ];

  return (
    <section className="relative min-h-screen py-20 pt-40 px-4 flex flex-col items-center overflow-hidden bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f8f9ff]">
      {/* Background blobs */}
      <div className="absolute rounded-full animate-ping opacity-30 bg-purple-300 w-40 h-40 -top-10 -left-10 sm:w-60 sm:h-60 sm:-top-20 sm:-left-20 lg:w-72 lg:h-72" />
      <div className="absolute rounded-full animate-pulse opacity-20 bg-indigo-400 w-36 h-36 top-32 right-4 sm:w-52 sm:h-52 sm:top-40 sm:right-10 lg:w-64 lg:h-64" />

      {/* Profile Circle */}
      <div
        className="relative group w-60 sm:w-64 md:w-72 h-60 sm:h-64 md:h-72 rounded-full border-4 border-indigo-500 bg-white/20 backdrop-blur-md shadow-xl hover:scale-105 transition-all duration-500 flex items-center justify-center"
        onMouseEnter={() => screenWidth >= 640 && setHovered(true)}
        onMouseLeave={() => screenWidth >= 640 && setHovered(false)}
        onClick={() => screenWidth < 640 && setHovered((prev) => !prev)}
      >
        <img
          src={profileImg}
          alt="Monika"
          className="w-48 sm:w-52 md:w-60 h-48 sm:h-52 md:h-60 rounded-full object-cover object-[center_30%] border-4 border-white"
        />

        {/* Spinning dashed ring */}
        <motion.div
          className="absolute w-full h-full rounded-full border-2 border-indigo-400 animate-spin-slow"
          style={{ borderStyle: "dashed" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Orbiting buttons */}
        {menuItems.map((item, index) => {
          const { x, y } = getPosition(item.label);
          return (
            <motion.a
              key={index}
              href={item.path}
              onClick={() => setHovered(false)}
              className={`absolute w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center text-sm sm:text-base text-white font-semibold rounded-full shadow-xl transform hover:scale-110 transition-all duration-300 ${item.color}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={hovered ? { opacity: 1, scale: 1, x, y } : { opacity: 0, scale: 0, x: 0, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            >
              {item.label}
            </motion.a>
          );
        })}
      </div>

      {/* Intro Text */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl text-indigo-800 font-extrabold mt-10 text-center shine-text"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Hi, I'm Monika Senger
      </motion.h1>

      <p className="text-center text-gray-600 max-w-lg sm:max-w-xl mt-4 leading-relaxed px-2 text-sm sm:text-base">
        MCA Graduate (final exams completed, result awaited) | Full-Stack Developer (Java & MERN) | I love turning ideas into scalable, beautiful software.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a
          href="/monika.pdf"
          download
          className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-indigo-700 transition text-center"
        >
          📄 Download Resume
        </a>
        <a
          href="/contact"
          className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition text-center"
        >
          ✉️ Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;
