// src/components/Projects.jsx
import React from "react";

const Projects = () => {
  return (
    <div className="container pt-5 about-section" id="projects">
      <div className="section-title underline-animated hover-pop">
        <span className="underline-target">Projects</span>
      </div>

      <div className="row g-4">
        {/* Project Card 1 */}
        <div className="col-md-6">
          <div className="card-section bg-dark text-light p-4 h-100 rounded-4 border border-danger-subtle">
            <h5 className="fw-bold mb-3 text-primary">💡 AI-Powered Personal Finance Management System</h5>
            <ul className="list-unstyled mb-0">
              <li className="mt-2">✅ Built a full-stack finance assistant using <strong>React.js</strong> & <strong>Node.js</strong> for personalized budgeting.</li>
              <li>🔍 Integrated <strong>Gemini API</strong> to generate tailored financial suggestions based on user profile.</li>
              <li>🔐 Implemented secure <strong>JWT authentication</strong> with <strong>role-based access</strong> & protected routes.</li>
            </ul>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="col-md-6">
          <div className="card-section bg-dark text-light p-4 h-100 rounded-4 border border-danger-subtle">
            <h5 className="fw-bold mb-3 text-success">🐞 Bug Tracker Application</h5>
            <ul className="list-unstyled mb-0">
              <li className="mt-2">✅ Developed a scalable bug tracking system using <strong>React.js</strong> & <strong>Node.js</strong>.</li>
              <li className="mt-2"  >🔐 Added <strong>JWT-based role authentication</strong> for testers, developers & admins.</li>
              <li className="mt-2">⚙️ Designed RESTful APIs to support bug creation, assignment, and live status tracking.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
