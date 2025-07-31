// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="container pt-5 about-section" id="about">
      <div className="section-title underline-animated hover-pop">
      <span className="underline-target">About</span>
      </div>
      <div className="row g-4">
        {/* Journey Section */}
        <div className="col-md-6">
          <div className="card-section">
            <h5 className="fw-bold mb-3 underline-animated">
               <span className="underline-target hover-pop">Journey</span>
            </h5>            <ul className="mb-0 list-unstyled">
              <li className="mb-3">
                👨‍💻 <strong>Software Engineer at Jio Platforms Limited</strong> — Building scalable, high-performance web applications using <strong>Node.js</strong> and <strong>React</strong>. Passionate about seamless user experiences and business impact.
              </li>
              <li className="mb-3 ">
                <strong className="underline-animated">
                  <span className="underline-target hover-pop">Skills & Expertise</span>
                </strong>
                <ul>
                  <li>🛠️ Front-End: React</li>
                  <li>⚙️ Back-End: Node.js, Express.js, Next.js</li>
                  <li>📦 CMS: Symfony, Drupal</li>
                  <li>🔧 Tools: VS Code, Git</li>
                </ul>
              </li>
              <li className="mb-3">
                <strong className="underline-animated">
                  <span className="underline-target hover-pop">Achievements</span>
                </strong>
                <ul>
                  <li>✅ Maintained high-traffic apps ensuring reliability & scale</li>
                  <li>✅ Boosted performance & engagement via UI improvements</li>
                  <li>✅ Delivered cross-team projects on-time and in-scope</li>
                </ul>
              </li>
              <li>
                🤝 Looking for new full-stack opportunities. Let’s connect!
              </li>
            </ul>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="col-md-6">
          <div className="card-section">
            <h5 className="fw-bold mb-3 underline-animated">
              ⚙️ <span className="underline-target hover-pop">Technologies</span>
            </h5>            <div className="d-flex flex-wrap gap-2">
              {["JavaScript", "React", "Node.js", "MongoDB", "Express.js"].map((tech) => (
                <span key={tech} className="badge-tech">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="col-md-12" style={{ marginTop: "1rem" }}>
            <div className="card-section">
              <h5 className="fw-bold mb-3 underline-animated">
                🔧 <span className="underline-target hover-pop" >Tools</span>
              </h5>            <div className="d-flex flex-wrap gap-2">
                {[
                  "Git",
                  "GitHub",
                  "VS Code",
                  "Postman",
                  "MongoDB Compass",]
                  .map((tech) => (
                    <span key={tech} className="badge-tech bg-success-subtle text-success-emphasis">
                      {tech}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
