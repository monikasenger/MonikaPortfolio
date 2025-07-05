import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "AINCAT 2025, Naukri Campus",
    desc: "Certified for aptitude & IT skills",
    date: "May 2025",
  },
  {
    title: "CodeClash & AlgoQuiz, Unstop",
    desc: "DSA & logic competitions",
    date: "May 2025",
  },
  {
    title: "Project Nimaya, Escorts Kubota",
    desc: "Corporate project experience",
    date: "Feb 2024",
  },
  {
    title: "Java Full Stack (Angular), Anudip Foundation",
    desc: "435 hrs training",
    date: "Oct 2023 – Jan 2024",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-indigo-100 py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center text-indigo-800 mb-14 drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🏆 Certifications & Achievements
        </motion.h2>

        <div className="space-y-10">
          {certifications.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-start sm:justify-between border-b pb-4"
            >
              <div className="mb-2 sm:mb-0">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
              </div>
              <div className="text-sm sm:text-base font-semibold text-gray-900 whitespace-nowrap">
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
