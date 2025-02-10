import React from "react";
import { FaUser } from "react-icons/fa";
import IMG from "./img.jpg";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center min-h-screen py-4 p-8"
    >
      {/* Heading Section */}
      <div className="w-full pt-4 max-w-4xl text-center mb-12">
        <h1 className="inline-flex py-5 items-center text-2xl font-bold ">
          <FaUser className="mr-2 text-gray-700" />
          ABOUT ME
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <img
            src={IMG}
            alt="Profile"
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-2xl hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="order-2 text-justify lg:order-1">
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
            Hello! I'm <span className="font-semibold">AJAY KUMAR</span>, a
            recent graduate in Artificial Intelligence. I have a strong interest
            in exploring new technologies and applying them to real-world
            projects. A quick learner, I enhance my skills through hands-on
            experience. During my bachelor's, I worked with{" "}
            <span className="font-semibold">
              Java, HTML, CSS, JavaScript, React, Node.js, MongoDB, and SQL
            </span>
            . My focus is on developing user interfaces and building engaging
            web applications. I am now seeking a job opportunity where I can
            contribute my skills to exciting projects and continue growing in
            the field of engineering.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
