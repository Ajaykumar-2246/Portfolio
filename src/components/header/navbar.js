// import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

function Navbar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <nav className="navbar w-full h-14 z-10 flex justify-between items-center px-4 sm:px-8 lg:px-16 shadow-md bg-white fixed top-0">
      {/* Logo or Name */}
      <div className="text-2xl cursor-pointer font-bold">
        <Link
          className="text-blue-500 hover:text-blue-500 transition-colors"
          to="home"
          smooth={true}
          duration={500}
        >
          AJAY KUMAR
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      {/* <div className="md:hidden">
        <button
          className="text-blue-500 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            // X icon for when the menu is open
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            // Hamburger icon for when the menu is closed
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div> */}

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm font-semibold">
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            activeClass="active-link"
            spy={true}
            className="text-gray-700 hover:text-blue-500 transition-colors"
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            activeClass="active-link"
            spy={true}
            className="text-gray-700 hover:text-blue-500 transition-colors"
          >
            SKILLS
          </Link>
        </li>
        <li>
          <Link
            to="education"
            smooth={true}
            duration={500}
            activeClass="active-link"
            spy={true}
            className="text-gray-700 hover:text-blue-500 transition-colors"
          >
            EDUCATION
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            activeClass="active-link"
            spy={true}
            className="text-gray-700 hover:text-blue-500 transition-colors"
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            activeClass="active-link"
            spy={true}
            className="text-gray-700 hover:text-blue-500 transition-colors"
          >
            CONTACT
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Dropdown */}
      {/* {isMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2">
              <Link
                to="about"
                smooth={true}
                duration={500}
                activeClass="active-link"
                spy={true}
                className="text-gray-700 hover:text-blue-500 transition-colors"
                onClick={toggleMenu}
              >
                ABOUT
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                activeClass="active-link"
                spy={true}
                className="text-gray-700 hover:text-blue-500 transition-colors"
                onClick={toggleMenu}
              >
                SKILLS
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="education"
                smooth={true}
                duration={500}
                activeClass="active-link"
                spy={true}
                className="text-gray-700 hover:text-blue-500 transition-colors"
                onClick={toggleMenu}
              >
                EDUCATION
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                activeClass="active-link"
                spy={true}
                className="text-gray-700 hover:text-blue-500 transition-colors"
                onClick={toggleMenu}
              >
                PROJECTS
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                activeClass="active-link"
                spy={true}
                className="text-gray-700 hover:text-blue-500 transition-colors"
                onClick={toggleMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )} */}
    </nav>
  );
}

export default Navbar;
