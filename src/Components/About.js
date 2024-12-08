import React, { useState } from 'react'; 
import './About.css'; // Importing CSS for styling
import logoabout from './logoabout.jpg'; // Replace with your logo path
import about from './about.jpg'; // Replace with your herbal water image path

export const About = () => {
  // Hardcoded about information
  const aboutInfo = {
    description: "We are Hardik Herbals, committed to delivering the best quality herbal products. Our focus is on sustainability and purity, ensuring that each product contributes to a healthy and eco-friendly lifestyle."
  };

  return (
    <div className="about-us-container">
      <h1>ABOUT US</h1>
      <div className="about-us-header">
        <img src={logoabout} alt="Logo" className="logoabout" />
      </div>
      
      <div className="about-us-content">
        <div className="about-text">
          <p>
            {aboutInfo.description} {/* Display the hardcoded description */}
          </p>
        </div>
        <div className="about-image">
          <img src={about} alt="Herbal Water" />
        </div>
      </div>
      
      <div className="back-link">
        <a href="/home">BACK TO HOME</a>
      </div>
    </div>
  );
};
