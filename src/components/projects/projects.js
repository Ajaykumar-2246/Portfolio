import React from "react";
import { Code, ExternalLink } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Expense Tracker",
      content:
        "A full-stack web application for tracking income and expenses with an intuitive interface. Built with MERN Stack and Zustand for state management.",
      tools: ["MERN Stack", "Zustand"],
      url: "https://spendly-qhpk.onrender.com",
    },
    {
      title: "Chat App",
      content:
        "Real-time chat application with user authentication and private messaging. Developed using MERN stack and Socket.io for instant communication.",
      tools: ["MERN Stack", "Zustand", "Tailwind CSS", "Socket.IO"],
      url: "https://chatease-15l6.onrender.com",
    },
    {
      title: "Social Media App",
      content:
        "User-friendly platform where users can create accounts, post tweets, and interact with others' content in real-time.",
      tools: ["MERN Stack", "Zustand", "Tailwind CSS", "Daisy UI"],
      url: "https://linkup-zlqw.onrender.com",
    },
    {
      title: "E-commerce",
      content:
        "Developed a full-stack e-commerce platform supporting product listing, shopping cart, order placement, and Stripe-based payment integration. Ensured responsive and intuitive user experience using Zustand for state management and Tailwind CSS/DaisyUI for styling.",
        tools: ["MERN Stack", "Zustand", "Tailwind CSS", "Daisy UI"],
      url: "https://urbancharm.onrender.com",
    },
    {
      title: "Customized Nutrition System",
      content:
        "Machine learning model that provides personalized diet plans for three daily meals based on user preferences and requirements.",
      tools: ["Machine Learning", "Streamlit"],
      url: "https://cnrs-hcmk6dmcduazsmqbdh7mpj.streamlit.app/",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-white py-16 px-4 sm:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12 pt-3">
          <h2 className="text-2xl font-bold text-gray-900 inline-flex items-center justify-center gap-3">
            <Code className="w-8 h-8 text-blue-600" />
            MY PROJECTS
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-1 rounded-full"></div>
          <p className="text-gray-600 mt-1">Some of my recent work</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 mb-4 flex-grow text-justify">
                  {project.content}
                </p>

                {/* Tech Stack */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
