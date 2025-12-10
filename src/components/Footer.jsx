import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://github.com/kabirpatil12676"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/kabir-patil-7a2a9b30b/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;