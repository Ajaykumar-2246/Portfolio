import React from "react";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-8 bg-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        {/* Left Section - Content */}
        <div className="w-full md:w-1/2 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Hello, I'm <span className="text-blue-600">Ajay Kumar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
              Professional{" "}
              <span className="text-teal-600">Software Developer</span>
            </h2>
            <p className="text-gray-600 max-w-lg">
              Passionate about building modern web applications with React,
              Node.js, and cutting-edge technologies.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Ajaykumar-2246"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-50 hover:bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all hover:text-gray-900 text-gray-700"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-kumar-1a679126a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-50 hover:bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all hover:text-blue-700 text-blue-600"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Link>
            <a
              href="https://drive.google.com/file/d/13PT61Ky1NgWZTgV8QiMpBS56Nhz4X28T/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all shadow-sm hover:shadow-md"
            >
              <FileText className="w-5 h-5" />
              Get Resume
            </a>
          </div>
        </div>

        {/* Right Section - Code Card */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            {/* Window Controls */}
            <div className="flex p-4 gap-2 items-center bg-gray-50 border-b">
              <span className="bg-red-500 w-3 h-3 rounded-full"></span>
              <span className="bg-yellow-500 w-3 h-3 rounded-full"></span>
              <span className="bg-green-500 w-3 h-3 rounded-full"></span>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm md:text-base">
              <div className="text-gray-400">// About me</div>
              <div className="text-blue-600 mt-2">const</div>
              <div className="text-purple-600 ml-4">developer</div>
              <div className="text-gray-800">= {"{"}</div>
              <div className="ml-8">
                <span className="text-purple-600">name</span>:
                <span className="text-green-600"> 'Ajay Kumar'</span>,
              </div>
              <div className="ml-8">
                <span className="text-purple-600">role</span>:
                <span className="text-green-600"> 'Software Developer'</span>,
              </div>
              <div className="ml-8">
                <span className="text-purple-600">skills</span>:
                <span className="text-gray-800"> [</span>
                <div className="ml-8 text-green-600">
                  'React', 'Node.js', 'JavaScript',
                  <br />
                  'Tailwind CSS', 'MongoDB', 'Express',
                  <br />
                  'Redux', 'Git', 'Java'
                </div>
                <div className="ml-4 text-gray-800">],</div>
              </div>
              <div className="ml-8">
                <span className="text-purple-600">passionate</span>:
                <span className="text-blue-600"> true</span>,
              </div>
              <div className="ml-8">
                <span className="text-purple-600">available</span>:
                <span className="text-blue-600"> true</span>
              </div>
              <div className="text-gray-800">{"}"};</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
