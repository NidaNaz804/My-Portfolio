import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative bg-black shadow-md">
      {/* Container for logo and navigation */}
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo positioned in the top-left */}
        <div
          className="w-20 h-20 bg-no-repeat bg-contain"
          style={{ backgroundImage: "url('/logo.jpg')" }}
        ></div>

        {/* Desktop navigation links */}
        <ul className="hidden md:flex gap-8 lg:gap-12">
          <li><a href="#hero" className="menuLink text-lg text-white transition duration-300 hover:text-red-500">
              Home
            </a>
          </li>
          <li> <a href="#projects" className="menuLink text-lg text-white transition duration-300 hover:text-red-500">
              Projects
            </a>
          </li>
          <li><a href="#skills" className="menuLink text-lg text-white transition duration-300 hover:text-red-500">
              Skills
            </a>
          </li>
          <li><a href="#about" className="menuLink text-lg text-white transition duration-300 hover:text-red-500">
              About
            </a>
          </li>
          <li><a href="#contact" className="menuLink text-lg text-white transition duration-300 hover:text-red-500">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <FiX size={30} className="cursor-pointer text-white" onClick={toggleMenu} />
          ) : (
            <FiMenu size={30} className="cursor-pointer text-white" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black absolute top-full left-0 w-full shadow-md z-50 animate-slide-down">
          <ul className="flex flex-col items-center gap-6 py-6">
            <li>
              <a
                href="#hero"
                className="menuLink text-lg text-white transition duration-300 hover:text-red-500"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="menuLink text-lg text-white transition duration-300 hover:text-red-500"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="menuLink text-lg text-white transition duration-300 hover:text-red-500"
                onClick={toggleMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="menuLink text-lg text-white transition duration-300 hover:text-red-500"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="menuLink text-lg text-white transition duration-300 hover:text-red-500"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
