import React from "react";

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>About Me</h2>

        <p>
          I’m passionate about creating intuitive and beautifully functional digital
          experiences. Throughout my career, I have worked with global product teams
          designing solutions in fintech, enterprise SaaS, and e-commerce domains.
        </p>

        <p>
          My process blends design thinking, research-based decisions,
          and attention to visual detail—ensuring that each product is purposeful and
          meaningful for its users.
        </p>

        <h3
          style={{
            marginTop: "50px",
            fontSize: "28px",
            fontWeight: 600
          }}
        >
          What I do.
        </h3>

        <div className="skills-box">
          <div className="skill-pill">Mobile App Design</div>
          <div className="skill-pill">Web Design</div>
          <div className="skill-pill">Wireframing</div>
          <div className="skill-pill">Prototyping</div>
          <div className="skill-pill">Graphics Design</div>
          <div className="skill-pill">Product Design</div>
          <div className="skill-pill">Icons</div>
        </div>

        <h3
          style={{
            marginTop: "60px",
            fontSize: "28px",
            fontWeight: 600
          }}
        >
          My creative process and tools I use
        </h3>

        <div className="process-grid">
          <div className="card">
            <h4>Market Research</h4>
            <p>
              For understanding project goals & user motivations to create a meaningful experience.
            </p>
          </div>

          <div className="card">
            <h4>Roadmap</h4>
            <p>
              Clear roadmap of design strategy aligned to product vision & user needs.
            </p>
          </div>

          <div className="card">
            <h4>Wireframing</h4>
            <p>
              Strategic layout planning using sketches and low-fidelity wireframes.
            </p>
          </div>

          <div className="card">
            <h4>Prototyping</h4>
            <p>
              Interactive prototype to visualize flows & finalize UX direction.
            </p>
          </div>

          <div className="card">
            <h4>User Testing</h4>
            <p>
              Testing and feedback collection to ensure real-world usability.
            </p>
          </div>

          <div className="card">
            <h4>Design Completion</h4>
            <p>
              High-fidelity visuals, interaction polish & developer-ready handoff.
            </p>
          </div>
        </div>

        <h3
          style={{
            marginTop: "60px",
            fontSize: "28px",
            fontWeight: 600
          }}
        >
          Tools
        </h3>

        <div className="tools-icons">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="Figma" />
          <img src="https://cdn-icons-png.flaticon.com/512/888/888874.png" alt="Photoshop" />
          <img src="https://cdn-icons-png.flaticon.com/512/888/888879.png" alt="Illustrator" />
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="VSCode" />
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" />
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="CSS" />
        </div>
      </div>
    </section>
  );
};

export default About;
