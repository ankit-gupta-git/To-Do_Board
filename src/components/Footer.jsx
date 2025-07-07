import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} Your Name. All rights reserved.</span>
        <div className="footer-links">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
          {/* Add more links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 