import React from "react";
import { Code } from "lucide-react";

const skills = [
  // Programming Languages
  {
    name: "Java",
    logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
  },

  // Frontend Skills
  {
    name: "HTML",
    logo: "https://images.vexels.com/media/users/3/166383/isolated/preview/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.png",
  },
  {
    name: "CSS",
    logo: "https://www.mvps.net/docs/wp-content/uploads/2019/10/css.png",
  },
  {
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "ReactJS",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    name: "React-Native (Expo)",
    logo: "https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7s19o0dhp2pu41gmoyr9.png",
  },
  {
    name: "Zustand",
    logo: "https://awesomedevin.github.io/zustand-vue/en/img/bear.png",
  },
  {
    name: "TailwindCSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Bootstrap",
    logo: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
  },

  // Backend Skills
  {
    name: "NodeJS",
    logo: "https://www.pixelbird.com.au/wp-content/uploads/2020/02/nodejs-image.png",
  },
  {
    name: "ExpressJS",
    logo: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
  },
  {
    name: "Convex (BaaS)",
    logo: "https://www.convex.dev/_next/image?url=https%3A%2F%2Fpleasant-albatross-666.convex.cloud%2Fapi%2Fstorage%2F51662301-1a43-400c-8052-f2375a185e56&w=1536&q=75",
  },

  // Databases
  {
    name: "MongoDB",
    logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    name: "MySQL",
    logo: "https://dev.mysql.com/common/logos/logo-mysql-170x115.png",
  },

  // Tools & Version Control
  {
    name: "Git",
    logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    name: "GitHub",
    logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
  },
  {
    name: "Postman",
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
];

function Skills() {
  return (
    <div id="skills" className="min-h-screen p-2 pb-0">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-flex items-center justify-center gap-3">
          <Code className="w-8 h-8 text-blue-600" />
          MY SKILLS
        </h2>
        <p className="text-gray-600 mt-1 max-w-2xl mx-auto text-lg">
          Technologies I'm proficient with
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Skills Grid */}
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 object-contain mb-2"
              />
              <p className="text-sm font-semibold text-gray-700 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
