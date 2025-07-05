import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
   { name: "Projects", href: "#projects" },
   {name:"Certificates", href:"#certificates"},
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow tracking-wide"
        >
          Monika Senger
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative font-semibold text-lg text-gray-800 hover:text-pink-600 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-pink-600"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-in-down bg-white/80 backdrop-blur-xl border-t border-pink-200 px-5 py-4 rounded-b-xl shadow-md">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 text-base font-medium rounded-md text-gray-800 hover:bg-pink-50 hover:text-pink-600 transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
