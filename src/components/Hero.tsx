import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div>
        <h1>Hi there! I’m ABIN RAJ.</h1>
        <p>
          I’m a Product Designer with 10+ years of experience delivering
          user-centric and scalable design solutions
        </p>

        <button className="learn-btn">Learn more</button>
      </div>

      <div className="location">
        CURRENT LOCATION: INDIA <br />
        LOCAL TIME: 5:01 PM
      </div>
    </section>
  );
};

export default Hero;
