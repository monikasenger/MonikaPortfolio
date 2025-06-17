import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow tracking-wide"
        >
          Monika Senger
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `relative font-semibold text-lg transition duration-300 tracking-wide px-2 py-1 
                ${
                  isActive
                    ? "text-pink-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-pink-500"
                    : "text-gray-800 hover:text-pink-500 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-gradient-to-r hover:after:from-pink-500 hover:after:to-purple-500"
                }`
              }
            >
              {item.name}
            </NavLink>
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
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 text-base font-medium rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-pink-100 text-pink-700"
                    : "text-gray-800 hover:bg-pink-50 hover:text-pink-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
