import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="w-full h-14 bg-white z-50 flex justify-between items-center px-4 sm:px-8 lg:px-16 shadow-sm fixed top-0">
      {/* Logo or Name */}
      <div className="text-xl md:text-2xl cursor-pointer font-bold">
        <Link
          className="text-blue-600 hover:text-blue-700 transition-colors"
          to="home"
          smooth={true}
          duration={500}
        >
          AJAY KUMAR
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium">
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            activeClass="text-blue-600 border-b-2 border-blue-600"
            spy={true}
            className="text-gray-600 hover:text-blue-600 transition-colors py-1 px-1"
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            activeClass="text-blue-600 border-b-2 border-blue-600"
            spy={true}
            className="text-gray-600 hover:text-blue-600 transition-colors py-1 px-1"
          >
            SKILLS
          </Link>
        </li>
        <li>
          <Link
            to="education"
            smooth={true}
            duration={500}
            activeClass="text-blue-600 border-b-2 border-blue-600"
            spy={true}
            className="text-gray-600 hover:text-blue-600 transition-colors py-1 px-1"
          >
            EDUCATION
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            activeClass="text-blue-600 border-b-2 border-blue-600"
            spy={true}
            className="text-gray-600 hover:text-blue-600 transition-colors py-1 px-1"
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            activeClass="text-blue-600 border-b-2 border-blue-600"
            spy={true}
            className="text-gray-600 hover:text-blue-600 transition-colors py-1 px-1"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
