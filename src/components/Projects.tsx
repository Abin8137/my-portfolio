import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects & Case Studies</h2>
      <p className="section-subtitle">
        A selection of my recent design and product work.
      </p>

      <div className="project-grid">

        {/* Project Card 1 */}
        <div className="project-card">
          <img
            src="https://via.placeholder.com/600x380?text=Project+Preview"
            alt="Fintech Mobile App preview"
          />
          <div className="project-content">
            <h3>Fintech Mobile App</h3>
            <p>
              A modern cross-platform money transfer experience designed for global users.
            </p>

            <div className="tags">
              <span>UX Design</span>
              <span>Fintech</span>
              <span>Mobile</span>
            </div>

            <button className="view-btn">View Case Study</button>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="project-card">
          <img
            src="https://via.placeholder.com/600x380?text=Project+Preview"
            alt="E-commerce Dashboard preview"
          />
          <div className="project-content">
            <h3>E-commerce Dashboard</h3>
            <p>
              Designing an analytics dashboard for merchants to track performance and revenue.
            </p>

            <div className="tags">
              <span>UI Design</span>
              <span>Dashboard</span>
            </div>

            <button className="view-btn">View Case Study</button>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="project-card">
          <img
            src="https://via.placeholder.com/600x380?text=Project+Preview"
            alt="Social Community App preview"
          />
          <div className="project-content">
            <h3>Social Community App</h3>
            <p>
              A platform enabling people to connect, chat and share experiences in groups.
            </p>

            <div className="tags">
              <span>Product Design</span>
              <span>Social</span>
            </div>

            <button className="view-btn">View Case Study</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
