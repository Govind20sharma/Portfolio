// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <div className="container py-5" id="home">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <p className="text-primary text-uppercase mb-2 fw-bold">MERN Stack Developer</p>
          <h1 className="display-4 fw-bold mb-3 animate-text">
            Hi, I'm <span className="text-primary">Govind</span> Sharma
          </h1>
          <p className="lead text-light">
            Full-Stack Developer at Jio Platforms, building scalable, secure, and high-performance applications using MERN stack. Proven track record in improving system throughput by <strong>40%</strong> and reducing feature delivery time by <strong>15%</strong>. Proficient in RESTful APIs, Form.io integration, and enterprise-grade authentication (<strong>JWT</strong>, <strong>OAuth2</strong>, <strong>SAML</strong>). Strong focus on clean code, scalability, and cross-functional collaboration.
          </p>

          <div className="d-flex gap-4 mt-4">
            <div>
              <p className="mb-0 fw-semibold">10+ Projects</p>
            </div>
            <div>
              <p className="mb-0 fw-semibold">2+ Years Exp</p>
            </div>
            <div>
              <p className="mb-0 fw-semibold">2023–Present</p>
            </div>
          </div>

          <div className="mt-4 d-flex flex-wrap gap-2">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a
              href="/Govind_Sharma_Resume.pdf"
              className="btn"
              style={{ backgroundColor: "#dc3545", color: "white" }}
              download
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src="/Profile.jpeg"
            alt="Govind Sharma"
            className="img-fluid hero-img"
            style={{ maxWidth: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
