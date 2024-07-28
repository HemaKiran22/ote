import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>MentorVista</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Sign Up</li>
          </ul>
        </nav>
      </div>
      <div className="header-image">
        <img src="http://thementorvista.liveblog365.com/wp-content/uploads/2024/05/pexels-photo-6326378.jpeg" alt="Header Background" />
      </div>
      <div className="header-text">
        <h2>Get in Touch</h2>
        <p>Reach out to the MentorVista team for any inquiries or feedback</p>
      </div>
    </header>
  );
};

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h2>Contact Us Today</h2>
      <form>
        <div className="form-group">
          <label>Name *</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>Message *</label>
          <textarea required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <h2>Contact Us Today</h2>
      <p>Find our contact details below for any questions or collaboration opportunities.</p>
      <p><strong>Phone:</strong> 07204810084</p>
      <p><strong>Email:</strong> gokulcs122002@gmail.com</p>
      <p><strong>Address:</strong> Vijayanagar 4th stage 1st phase</p>
      <div className="social-media">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">YouTube</a>
      </div>
    </div>
  );
};

const ContactUS = () => {
  return (
    <div>
      <Header />
      <ContactForm />
      <ContactDetails />
    </div>
  );
};

export default ContactUS;
