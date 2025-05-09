import React from "react";
import Navbar from "./components/header/navbar";
import Home from "./components/homepage/home";
import About from "./components/aboutpage/about";
import Skills from "./components/skills/skill";
import Education from "./components/education/education";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="min-h-screen ">
      {/* Fixed Navbar at the top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main content with padding to account for fixed navbar */}
      <div className="pt-10">
        {" "}
        {/* Adjust this padding based on your navbar height */}
        <section id="home" className="min-h-screen bg-white">
          <Home />
        </section>
        <section id="about" className="min-h-screen py-15 bg-white">
          <About />
        </section>
        <section id="skills" className="min-h-screen py-20 bg-white">
          <Skills />
        </section>
        <section id="education" className="min-h-screen py-20 bg-white">
          <Education />
        </section>
        <section id="projects" className="min-h-screen py-17 bg-white">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen py-17 bg-white">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
