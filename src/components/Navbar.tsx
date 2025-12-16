import React from "react";

type SectionRefs = {
  homeRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  toolsRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
};

interface NavbarProps {
  refs: SectionRefs;
}

const Navbar: React.FC<NavbarProps> = ({ refs }) => {
  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-800">
    
        <div className="logo">Λ</div>

        <ul className="menu">
          <li>
            <button onClick={() => scrollTo(refs.homeRef)}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollTo(refs.aboutRef)}>About</button>
          </li>
          <li>
            <button onClick={() => scrollTo(refs.toolsRef)}>Tools</button>
          </li>
          <li>
            <button onClick={() => scrollTo(refs.projectsRef)}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollTo(refs.contactRef)}>Contact</button>
          </li>
        </ul>
      
    </nav>
  );
};

export default Navbar;
