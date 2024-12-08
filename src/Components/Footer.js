import React from "react";
import './Footer.css'; // Import your CSS file for styles
import icon from './icon.jpg'; // Ensure the correct path for the icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="image-container">
        {/* Wrap the image with an anchor tag to make it clickable */}
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src={icon} alt="Footer" className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
