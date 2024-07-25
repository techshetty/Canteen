import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">Your Future Campus</h2>
          <p className="about-description">
            Welcome to Sahyadri Cafe, the heart of our college campus! We take pride in providing a variety of delicious and healthy meal options for our students, faculty, and staff. Our goal is to offer an inviting and comfortable space where everyone can enjoy a meal, relax, and socialize.
          </p>
          <button 
            className="about-button" 
            onClick={() => window.location.href='https://www.sahyadri.edu.in/'}
          >
            View More
          </button>
        </div>
        <div className="about-image">
          <img src="https://campus-live.s3.us-east-2.amazonaws.com/college/image-56" alt="College Campus" />
        </div>
      </div>
    </div>
  );
};

export default About;
