// src/components/Hero.jsx
import React from "react";

const About = () => {
  return (
    <div className="container pt-5" id="about">
      <div className="section-title">About Me</div>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card-section">
            <h5 className="fw-bold mb-2">👨‍💻 Journey</h5>
            <p className="mb-0">
              I'm a passionate developer currently working at Jio Platforms
              Limited, specialized in MERN Stack. My focus is to build scalable,
              modern and secure full-stack web applications using latest
              technologies like React, Node.js, and MongoDB.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-section">
            <h5 className="fw-bold mb-3">⚙️ Technologies</h5>
            <div className="d-flex flex-wrap">
              {["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "HTML", "CSS", "Bootstrap", "Git"].map((tech) => (
                <span key={tech} className="badge-tech">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
