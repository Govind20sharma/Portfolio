// src/components/Experience.jsx
import React from "react";

const Experience = () => {
  return (
    <div className="container pt-5 about-section" id="experience">
      <div className="section-title underline-animated hover-pop">
        <span className="underline-target">Experience</span>
      </div>

      <div className="card-section">
        <h5 className="fw-bold mb-2 text-primary hover-pop"> 👨‍💻 Software Development Engineer 1</h5>
        <div className="d-flex justify-content-between align-items-center ms-4 me-2 underline-animated">
  <p className="fw-semibold mb-1 mb-md-0 underline-target ">JIO Platforms Limited</p>
  <p className="fw-semibold mb-1 mb-md-0">Dec 2023 – Present</p>
</div>

        <ul className="list-unstyled experience-list mt-4 mb-5">
          <li className="mb-3">
            🚀 Designed and developed scalable <strong>RESTful APIs</strong> using <strong>Node.js</strong> and <strong>Express.js</strong>, boosting system throughput by <strong>40%</strong> during peak loads.
          </li>
          <li className="mb-3">
            🧩 Integrated dynamic form-rendering using <strong>Form.io</strong>, enabling real-time data validation and secure submissions for internal workflows.
          </li>
          <li className="mb-3">
            💡 Built modular <strong>React.js components</strong> to enhance maintainability and reduce delivery time by <strong>15%</strong> via consistent UI patterns.
          </li>
          <li className="mb-3">
            🔐 Implemented secure authentication with <strong>JWT</strong>, <strong>Passport.js</strong>, and <strong>SAML</strong> (Oracle IDCS) to fortify login flows.
          </li>
          <li className="mb-3">
            🤝 Collaborated in cross-functional <strong>Agile teams</strong> to deliver robust full-stack solutions combining <strong>React UIs</strong> with <strong>Node REST APIs</strong> and protected routes.
          </li>
          <li>
            🌐 Engineered a secure <strong>Next.js</strong> application with <strong>SSO</strong> via Oracle IDCS and <strong>SAML</strong>, improving system-wide authentication.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
