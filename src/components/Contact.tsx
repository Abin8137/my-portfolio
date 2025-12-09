import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Let’s Connect</h2>
      <p className="section-subtitle">
        Open to new ideas, good conversations, and exciting collaborations.
      </p>

      <div className="contact-container">
        {/* Left Content */}
        <div className="contact-info">
          <h3>
            Got a project in your mind?
            <br />
            Let’s talk.
          </h3>

          <div className="social-icons">
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Instagram"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Dribbble"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                alt="LinkedIn"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
              />
            </a>
          </div>
        </div>

        {/* Right Form */}
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Contact" />
          <textarea placeholder="Message"></textarea>
          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
