// src/components/Projects.jsx
import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio built with React and Bootstrap.",
    },
    {
      title: "Blog Platform",
      description: "MERN stack blog app with full CRUD functionality.",
    },
    {
      title: "Chat Application",
      description: "Real-time chat app using Socket.IO and Node.js.",
    },
  ];

  return (
    <div className="container py-5" id="projects">
      <div className="section-title">Projects</div>
      <div className="row g-4">
        {projectList.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card-section h-100">
              <h5 className="fw-bold mb-2">{project.title}</h5>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
