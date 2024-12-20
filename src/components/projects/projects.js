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
      title: "Movie Recommendation",
      content:
        "Built a content-based movie recommendation system using cosine similarity to suggest films based on tags, overviews, and other features of films the user has interacted with, providing personalized recommendations.",
      tools: [{ name: "Machine learning" }, { name: "Streamlit" }],
      url: "https://movierecommendation-6hjyaxfpmq2mpqzlrjr7za.streamlit.app/",
    },
  ];

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div
      id="projects"
      className="pt-24 py-16 scroll-mt-24" // Proper offset for fixed navbar
    >
      <div className="m-6 p-4 flex flex-row justify-center items-center text-center">
        <h1 className="text-2xl font-bold text-black flex items-center justify-center gap-2">
          PROJECTS
        </h1>
      </div>
      <div className="container -z-10 mx-auto px-4">
        <div className="grid grid-cols-1 z-0 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white z-0 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="p-6">
                <a href={project.url} target="_blank" rel="noreferrer">
                  <h5 className="mb-2 text-2xl font-bold text-gray-900 hover:text-blue-600">
                    {project.title}
                  </h5>
                </a>
                <p className="text-gray-600 text-justify text-sm h-[135px] line-clamp-3">
                  {project.content}
                </p>
                <div className="mt-4">
                  <p className="flex flex-wrap gap-2">
                    {project.tools.map((item, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-800 text-xs py-1 px-2 rounded-full"
                      >
                        {item.name}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <button
                    type="button"
                    role="link"
                    onClick={() => openInNewTab(project.url)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
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
