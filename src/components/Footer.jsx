// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center py-6 text-sm text-gray-600 dark:text-gray-300">
      <div className="flex justify-center gap-6 mb-2 text-xl">
        <a
          href="https://github.com/govindsharma20"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/govind-sharma20"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:govindsharma5768@gmail.com"
          className="hover:text-blue-500 transition"
        >
          <FaEnvelope />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Govind Sharma. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
