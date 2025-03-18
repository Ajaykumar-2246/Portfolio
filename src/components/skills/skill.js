import React from "react";
import ML from "./ml.png";

const skills = [
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
    name: "React Redux",
    logo: "https://cdn.worldvectorlogo.com/logos/redux.svg",
  },
  {
    name: "Zustand",
    logo: "https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560",
  },
  {
    name: "TailwindCSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Bootstrap",
    logo: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
  },
  {
    name: "React-Native (Expo)",
    logo: "https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7s19o0dhp2pu41gmoyr9.png",
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

  // Database
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

  // Programming Languages
  {
    name: "Java",
    logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
  },
  {
    name: "Streamlit",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGDKmSgL7UJ6sstMUQTtjI2iDN7ClN2jRZ5Q&s",
  },

  // Machine Learning
  { name: "Machine Learning (basic)", logo: ML },
];

function Skills() {
  return (
    <div id="skills" className="min-h-screen p-2 pb-0">
      {/* Heading Section */}
      <div className="text-center mb-6 pt-20">
        <h1 className="text-3xl font-bold text-gray-800">SKILLS</h1>
        <p className="text-gray-600 mt-2">Technologies I work with</p>
      </div>

      {/* Skills Grid */}
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{ width: "100px", height: "100px" }} // Set fixed width and height
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
