import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header class="header">
    <div class="header-top">
      <div class="brand">
        <h1>MentorVista</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#signup">Sign Up</a></li>
          <li><a href="#login" class="login-button">Login</a></li>
        </ul>
      </nav>
    </div>
    <div class="hero-content">
      <h2>Empowering Future Leaders<br />Through Expert Guidance</h2>
      <a href="#learn-more" class="learn-more-button">Learn More</a>
    </div>
  </header>
  
  );
}

export default Header;
