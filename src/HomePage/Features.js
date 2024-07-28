import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features">
       <h1 className="section-title">Collaborate with peers and mentors to turn your project ideas into reality!</h1>
      <div className="feature-container">
        <div className="feature-left">
          <div className="feature-content">
            <h2>About MentorVista</h2>
            <p>
              MentorVista is an innovative online mentoring platform designed to connect mentees with mentors
              in a personalized learning environment. By leveraging advanced matching algorithms, MentorVista
              pairs students with mentors based on their skills and interests, fostering a collaborative space
              for growth and development.
            </p>
            <p>
              Our mission is to revolutionize education by empowering students and mentors to work together
              on projects that could lead to transformative startup ideas.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
        <div className="feature-right">
          <img src="http://thementorvista.liveblog365.com/wp-content/uploads/2024/05/pexels-photo-6326378.jpeg" alt="Mentor Vista" />
        </div>
      </div>
    </section>
  );
}

export default Features;
