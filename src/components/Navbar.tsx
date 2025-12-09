import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="logo">Λ</div>

      <div className="menu">
        <a href="#" className="home-pill">Home</a>
        <a href="#">About me</a>
        <a href="#">Case studies</a>
        <a href="#">Experiments</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
