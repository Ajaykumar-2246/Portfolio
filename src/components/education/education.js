import React from "react";
import { GraduationCap } from "lucide-react";

function Education() {
  const educationData = [
    {
      title: "Bachelor of Technology",
      institution: "Anurag University",
      duration: "2021-2025",
      status: "Pursuing",
      image:
        "https://www.excelbee.com/images/university/anurag-university-logo.png", // Replace with actual image URL
    },
    {
      title: "Intermediate",
      institution: "Narayana Jr. College",
      duration: "2019-2021",
      status: "Completed",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.5d9NXL1WbGlLQNzxmjTz5wHaHa&pid=Api&P=0&h=180", // Replace with actual image URL
    },
  ];

  return (
    <div
      id="education"
      className="p-2 pb-0 min-h-screen flex flex-col items-center bg-white"
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 inline-flex items-center justify-center gap-3">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          EDUCATION
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-1 rounded-full"></div>
        <p className="text-gray-600 mt-1">My academic journey</p>
      </div>

      {/* Education Cards */}
      <div className="flex flex-col items-center gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center md:flex-row w-full max-w-[600px]"
          >
            <div className="w-full md:w-1/3 object-cover  h-52 md:h-auto">
              <img
                src={edu.image}
                alt={edu.institution}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-1 text-center">
              <h2 className="text-xl font-bold text-[#1a237e]">{edu.title}</h2>
              <p className="text-gray-700">{edu.institution}</p>
              <p className="text-sm text-gray-500 mt-2">{edu.duration}</p>
              <span
                className={`mt-4 inline-block px-4 py-1 text-sm font-medium rounded-full ${
                  edu.status === "Pursuing"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {edu.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
