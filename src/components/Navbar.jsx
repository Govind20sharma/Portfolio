// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">Govind</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { to: "home", label: "Home" },
              { to: "about", label: "About" },
              { to: "projects", label: "Projects" },
              { to: "contact", label: "Contact" },
            ].map((item) => (
              <li className="nav-item" key={item.to}>
                <Link
                  activeClass="active"
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
