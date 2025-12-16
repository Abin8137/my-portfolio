import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const toolsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="bg-black text-white">
      <Navbar refs={{ homeRef, aboutRef, toolsRef, projectsRef, contactRef }} />

      <section ref={homeRef} className="min-h-screen pt-20">
        <Hero />
      </section>

      <section ref={aboutRef} className="min-h-screen pt-20">
        <About />
      </section>

      <section ref={toolsRef} className="min-h-screen pt-20">
        <Tools />
      </section>

      <section ref={projectsRef} className="min-h-screen pt-20">
        <Projects />
      </section>

      <section ref={contactRef} className="min-h-screen pt-20">
        <Contact />
      </section>
    </div>
  );
};

export default App;
