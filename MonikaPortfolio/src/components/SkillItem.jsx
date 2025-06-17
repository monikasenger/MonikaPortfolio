// components/SkillItem.jsx
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { motion } from "framer-motion";

const SkillItem = ({ name, icon }) => {
  const IconComponent = FaIcons[icon] || SiIcons[icon] || FaIcons.FaLaptopCode;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white/80 backdrop-blur-sm shadow-md rounded-xl p-5 flex flex-col items-center justify-center hover:shadow-xl hover:bg-gradient-to-br from-indigo-100 to-purple-100 transition-all duration-300 ease-in-out"
    >
      <IconComponent className="text-4xl text-indigo-600 mb-3" />
      <p className="text-center text-sm sm:text-base font-semibold text-gray-800">{name}</p>
    </motion.div>
  );
};

export default SkillItem;
