import React from "react";
import "./skills.css";
import tailwind from './tailwind.png';
import ML from './ml.png';

const skills = [
  // Frontend Skills
  {
    name: "ReactJS",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    name: "React Redux",
    logo: "https://cdn.worldvectorlogo.com/logos/redux.svg",
  },
  {
    name: "TailwindCSS",
    logo: tailwind ,
  },
  {
    name: "Bootstrap",
    logo: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
  },
  {
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
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

  // Machine Learning
  {
    name: "Machine Learning",
    logo: ML,
  },

  // Java
  {
    name: "Java",
    logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
  },
];

function Skills() {
  return (
    <div id="skills" className="skills-container">
      <div className="m-1 p-0 flex pagename-div flex-row justify-center items-center text-center">
        <span className="font-bold  w-fit text-black p-2 px-5 text-2xl rounded-3xl">
          SKILLS
        </span>
      </div>
      <div className="skills-grid justify-center flex flex-wrap">
        {skills.map((skill, index) => (
          <div className="skill-item  shadow-md" key={index}>
            <img src={skill.logo} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
