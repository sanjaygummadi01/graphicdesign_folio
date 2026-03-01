
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <span>Portfolio</span>
          </div>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/sanjaygummadi-dev" className="social-icon">LinkedIn</a>
            <a href="https://github.com/sanjaygummadi01" className="social-icon">Github</a>
            <a href="https://www.instagram.com/the_mzic?igsh=MTdhazR0bHVydnJidg==" className="social-icon">Instagram</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Sanjay Gummadi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
