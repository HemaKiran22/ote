import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-bottom">
          <div className="footer-logo">
            <span style={{ color: 'blue' }}>Mentor</span><span style={{ color: 'red' }}>Vista</span>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#contact">Contact Us</a>
            <a href="#about">About Us</a>
            <a href="#signup">Sign Up</a>
          </div>
        </div>
        <div className="social-media-section">
          <p >Follow Us:</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
