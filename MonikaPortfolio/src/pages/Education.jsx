import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-[#f9f9ff] via-[#eef1fa] to-[#f0f4ff]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center text-indigo-800 mb-16 drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎓 Education
        </motion.h2>

        {/* MCA */}
        <motion.div
          className="relative border-l-4 border-indigo-400 pl-6 space-y-14 ml-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* MCA Block */}
          <div className="relative">
            <div className="absolute -left-6 top-2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-md" />
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-1">
                Master of Computer Application (MCA)
              </h3>
              <p className="text-gray-700">
                <span className="font-medium text-indigo-600">
                  Institute of Management and Technology (IMT)
                </span>{" "}
                – Affiliated with MDU, Rohtak
              </p>
              <p className="text-sm text-indigo-500 font-medium mt-2">
                Aug 2023 – <span className="italic">Result Awaited</span>
              </p>
              <ul className="list-disc pl-5 mt-3 text-gray-600 text-sm leading-relaxed">
                <li>Focused on Full-Stack Development using Java, and React.js</li>
                <li>Academic exposure to Android Development and PHP for lab practicals</li>
                <li>Built academic & real-world projects like Doctor Booking System, Inventory Manager</li>
                <li>Hands-on experience with MySQL, MongoDB, Git, and deployment on Vercel/Render</li>
              </ul>
            </div>
          </div>

          {/* BCA Block */}
          <div className="relative">
            <div className="absolute -left-6 top-2 w-4 h-4 rounded-full bg-pink-500 border-4 border-white shadow-md" />
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
              <h3 className="text-2xl font-semibold text-pink-700 mb-1">
                Bachelor of Computer Application (BCA)
              </h3>
              <p className="text-gray-700">
                <span className="font-medium text-pink-600">
                  JB Knowledge Park
                </span>{" "}
                – Affiliated with MDU, Rohtak
              </p>
              <p className="text-sm text-pink-500 font-medium mt-2">
                Aug 2019 – Aug 2022
              </p>
              <ul className="list-disc pl-5 mt-3 text-gray-600 text-sm leading-relaxed">
                <li>Learned fundamentals of HTML, CSS, C#, .NET, and DBMS</li>
                <li>Started learning Java in final year and gained interest in backend development</li>
                <li>Completed console-based projects for practical assignments (e.g., ATM, Student System)</li>
                <li>Actively participated in lab work and internal assessments</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
