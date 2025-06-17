// pages/Skills.jsx
import React from "react";
import SkillItem from "../components/SkillItem";
import { motion } from "framer-motion";
import {
  technicalSkills,
  tools,
  softSkills,
  otherSkills,
} from "../assets/assets";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  // Categorize technical skills into subgroups
  const categorizedTechSkills = [
    {
      title: "👨‍💻 Programming Languages",
      data: technicalSkills.filter((s) =>
        ["Java", "JavaScript"].includes(s.name)
      ),
    },
    {
      title: "🧩 Frameworks & Libraries",
      data: technicalSkills.filter((s) =>
        ["React.js", "Spring Boot", "Java Swing"].includes(s.name)
      ),
    },
    {
      title: "⚙️ Backend & Database",
      data: technicalSkills.filter((s) =>
        [
          "Node.js",
          "Express.js",
          "Java JDBC",
          "MySQL",
          "MongoDB",
        ].includes(s.name)
      ),
    },
    {
      title: "🔐 Authentication & Access",
      data: technicalSkills.filter((s) =>
        ["Session-based Login", "Role-Based Access Control"].includes(s.name)
      ),
    },
    {
      title: "🌐 Web Technologies",
      data: technicalSkills.filter((s) => ["HTML5", "CSS3"].includes(s.name)),
    },
    {
      title: "📁 Version Control & Deployment",
      data: technicalSkills.filter((s) =>
        ["Git", "GitHub", "Render"].includes(s.name)
      ),
    },
  ];

  const skillSections = [
    ...categorizedTechSkills,
    { title: "🛠️ Tools & IDEs", data: tools },
    { title: "🤝 Soft Skills", data: softSkills },
    { title: "🌟 Other Skills", data: otherSkills },
  ];

  return (
    <section className="min-h-screen py-16 px-6  pt-30 bg-gradient-to-br from-white via-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center text-indigo-800 mb-14 drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          💼 Skills & Tools
        </motion.h2>

        {skillSections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-6 pl-2 border-l-4 border-indigo-400">
              {section.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {section.data.map((skill, i) => (
                <SkillItem key={i} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </motion.div>
        ))}

        <motion.p
          className="mt-16 text-center text-indigo-700 text-lg font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I'm constantly learning and evolving to become a world-class Full-Stack Developer 👩‍💻✨
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;