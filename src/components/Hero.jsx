// src/components/Hero.jsx
import React from "react";
import "../index.css";

const Hero = () => {
  return (
    <div className="container py-5 hero-section" id="home">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 mb-4 mb-md-0 text-light">
        <p className="text-danger text-uppercase mb-2 fw-bold fade-in hover-pop underline-animated">
  <span className="underline-target">MERN Stack Developer</span>
</p>
          <h1 className="display-5 fw-bold mb-3 name-flow">
            Hi, I'm <span className="text-primary">Govind</span> Sharma
          </h1>
          <p className="lead intro-text">
            Full-Stack Developer at Jio Platforms, building scalable, secure, and high-performance applications using MERN stack. Proven track record in improving system throughput by <strong>40%</strong> and reducing feature delivery time by <strong>15%</strong>. Proficient in RESTful APIs, Form.io integration, and enterprise-grade authentication (<strong>JWT</strong>, <strong>OAuth2</strong>, <strong>SAML</strong>). Strong focus on clean code, scalability, and cross-functional collaboration.
          </p>

          <div className="d-flex gap-4 mt-4 stats fade-in ms-4 ">
            <div>
              <p className="mb-0 fw-semibold hover-pop">3+ Projects</p>
            </div>
            <div>
              <p className="mb-0 fw-semibold hover-pop">2+ Years Exp</p>
            </div>
            {/* <div>
              <p className="mb-0 fw-semibold">2023–Present</p>
            </div> */}
          </div>

          <div className="mt-4 d-flex flex-wrap gap-2 fade-in ">
            <a href="#projects" className="btn btn-primary fw-semibold px-4 hover-pop">
              View Projects
            </a>
            <a
              href="/Govind_Sharma_Resume.pdf"
              className="btn fw-semibold px-4 hover-pop"  
              style={{ backgroundColor: "#dc3545", color: "white" }}
              download
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center fade-in">
          <img
            src="/Profile.jpeg"
            alt="Govind Sharma"
            className="img-fluid pop-img"
            style={{ maxWidth: "400px",     borderRadius: "30% 70% 70% 30% / 20% 30% 90% 90%"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
