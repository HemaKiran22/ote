import React from 'react';
import './Introduction.css';

function Introduction() {
  return (
    <section id="introduction" className="introduction">
      <h1 className="section-title">Our Features</h1>
      <div className="content">
        <div className="content-item">
          <img src="https://tse1.mm.bing.net/th?id=OIP.KZemM9TGpfMSxEB4Yj4kvQAAAA&pid=Api&P=0&h=180" alt="Project Collaboration" className="image" />
          <h2>Project Collaboration</h2>
          <p>
            Work with peers on innovative projects. We meticulously match projects with students' unique skill sets and mindsets, ensuring optimal alignment for success and growth.
          </p>
        </div>
        <div className="content-item">
          <img src="http://thementorvista.liveblog365.com/wp-content/uploads/2024/05/pexels-photo-6326378.jpeg" alt="Mentor Guidance" className="image" />
          <h2>Mentor Guidance</h2>
          <p>
            Gain insights from experienced mentors dedicated to your success. Our mentors provide personalized advice and support, helping you overcome challenges and achieve your goals.
          </p>
        </div>
        <div className="content-item">
          <img src="https://img.freepik.com/free-photo/progress-stock-figures-timeline-concept_53876-148029.jpg?t=st=1719162018~exp=1719165618~hmac=6abcda8598e0fd40b59175914d8c78d24686dca17f3b4e57281c004a544f4284&w=740" alt="Progress Tracking" className="image" />
          <h2>Progress Tracking</h2>
          <p>
            Track your project's progress with MentorVista. Stay updated on milestones, receive feedback, and ensure continuous improvement towards your goals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
