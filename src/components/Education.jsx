// src/components/Education.jsx
import React from "react";

const Education = () => {
  return (
    <div className="container pt-5 about-section" id="about">
      <div className="section-title underline-animated hover-pop">
        <span className="underline-target">Education</span>
      </div>
      <div className="row g-4">
        {/* Education Timeline */}
        <div className="col-md-6">
          <div className="card-section">
            <h5 className="fw-bold mb-3 underline-animated">
              <span className="underline-target hover-pop">Kendriya Vidyalaya</span>
            </h5>
            <ul className="list-unstyled">
              <li className="mt-2">
                🎓 <strong>Secondary School (10th)</strong>
              </li>
            </ul>
          </div>

          <div className="col-md-12 mt-4">
            <div className="card-section">
              <h5 className="fw-bold mb-3 underline-animated">
                <span className="underline-target hover-pop">Sharda Vidya Mandir School</span>
              </h5>
              <ul className="list-unstyled">
                <li className="mt-2">
                  🎓 <strong>Senior Secondary (12th)</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card-section">
            <h5 className="fw-bold mb-3 underline-animated">
              <span className="underline-target hover-pop">Poornima University</span>
            </h5>
            <ul className="mb-0 list-unstyled">
              <li className="mb-3">
                🎓 <strong>B.Tech in Computer Science</strong>
                <ul>
                  <li>📊 SGPA: <strong>8.01</strong></li>
                  <li>🛠️ Front-End: React, JavaScript, HTML, CSS</li>
                  <li>⚙️ Back-End: Node.js, Express.js</li>
                  <li>🔧 Tools: VS Code, Git</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
