import React from "react";

function Projects() {
  const projects = [
    {
      title: "Weather App",
      content:
        "Developed the React.js Weather App that makes requests to the OpenWeatherMap API and retrieves real-time weather data for cities. Implemented a responsive design using React hooks and managed state.",
      tools: [
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "REST APIs" },
      ],
      url: "https://weather-app-9ysi.vercel.app/",
    },
    {
      title: "Expense Tracker",
      content:
        "It is a full-stack web application which helps users track their income and expenses efficiently. The project has been developed on the MERN Stack, and Zustand for state management. It has provided an easy-to-use and intuitive interface for daily transactions tracking.",
      tools: [{ name: "MERN Stack" }, { name: "Zustand" }],
      url: "https://spendly-qhpk.onrender.com",
    },
    {
      title: "Chat App",
      content:
        "The  project  is  a  real-time  chat  application  with  user  authentication,  private  messaging,  and  a  dynamic  user interface for safe and effective communication. It was developed using the MERN stack and Socket.io.",
      tools: [
        { name: "MERN Stack" },
        { name: "Zustand " },
        { name: "Tailwind CSS" },
        { name: "Socket.IO" },
      ],
      url: "https://chatease-15l6.onrender.com",
    },{
      title: "Social Media App",
      content:
        "Developed  a  user-friendly  social  media  platform  where  users  can  create  accounts,  post  tweets,  and  interact  with others' content in real-time.",
      tools: [{ name: "MERN Stack" },
        { name: "Zustand " },
        { name: "Tailwind CSS" },
        { name: "Daisy UI" }],
      url: "https://chirpnet.onrender.com",
    },
    {
      title: "Movie Recommendation",
      content:
        "Built a content-based movie recommendation system using cosine similarity to suggest films based on tags, overviews, and other features of films the user has interacted with, providing personalized recommendations.",
      tools: [{ name: "Machine learning" }, { name: "Streamlit" }],
      url: "https://mr-6hjyaxfpmq2mpqzlrjr7.streamlit.app/",
    },
    {
      title: "Customized Nutrition System",
      content:
        " Developed a machine learning model that provides users with a personalized diet plan for three meals: breakfast, lunch, and dinner.",
      tools: [{ name: "Machine learning" }, { name: "Streamlit" }],
      url: "https://cnrs-hcmk6dmcduazsmqbdh7mpj.streamlit.app/",
    },
  ];

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div id="projects" className="pt-12 min-h-screen scroll-mt-24 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl pt-6 font-bold text-gray-900">PROJECTS</h1>
          <p className="mt-2 text-lg text-gray-600">
            A collection of my recent projects
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="p-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <h5 className="mb-4 text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h5>
                </a>
                <p className="text-gray-600 text-justify text-sm min-h-[115px] line-clamp-3">
                  {project.content}
                </p>
                <div className="mt-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((item, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-800 text-xs py-1 px-3 rounded-full"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <button
                    type="button"
                    role="link"
                    onClick={() => openInNewTab(project.url)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
