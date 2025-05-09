import React from "react";
import { User, GraduationCap, Code2, Rocket } from "lucide-react";
import IMG from "./img.jpg";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white py-10 px-4 sm:px-8 flex flex-col items-center justify-center"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="inline-flex items-center text-2xl font-bold text-gray-900">
            <User className="mr-3 w-6 h-6 text-blue-600" />
            ABOUT ME
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              <img
                src={IMG}
                alt="Profile"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-xl object-cover border-4 border-white shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="order-2 lg:order-1 space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Hello! I'm{" "}
              <span className="font-semibold text-gray-900">Ajay Kumar</span>, a
              recent graduate in Artificial Intelligence with a passion for
              building innovative solutions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <GraduationCap className="w-5 h-5 mt-1 mr-3 text-blue-600 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Education:</span> Bachelor's
                  degree in Artificial Intelligence with hands-on experience in
                  modern web technologies.
                </p>
              </div>

              <div className="flex items-start">
                <Code2 className="w-5 h-5 mt-1 mr-3 text-blue-600 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Skills:</span> Proficient in{" "}
                  <span className="font-medium">
                    Java, JavaScript, React, Node.js, MongoDB, SQL
                  </span>
                  , and modern web development practices.
                </p>
              </div>

              <div className="flex items-start">
                <Rocket className="w-5 h-5 mt-1 mr-3 text-blue-600 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Goals:</span> Seeking
                  opportunities to contribute my skills to meaningful projects
                  while continuing to grow as a software engineer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
