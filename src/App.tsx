import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ExperienceSection from "./components/ExperienceSection";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-dark-400 min-h-screen text-white">
      <Header />
      <Hero />
      <ExperienceSection />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
