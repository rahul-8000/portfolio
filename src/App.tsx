import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";

function App() {
  return (
    <div className="bg-dark-400 min-h-screen text-white">
      <Header />
      <Hero />
      <ExperienceSection />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
