import React from 'react';
import './Contact.css'; // Import the CSS file
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons
import { Link } from 'react-router-dom';

export const Contact = () => {
  // Static contact information
  const contactInfo = {
    address: "123 Warehouse St, Cityville, State",
    phone: "+1 (123) 456-7890",
    email1: "info@warehouse.com",
    email2: "support@warehouse.com"
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>CONTACT US</h2>
        <div className="contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>{contactInfo.address}</p>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <p>{contactInfo.phone}</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>
              <a href={`mailto:${contactInfo.email1}`}>{contactInfo.email1}</a><br />
              <a href={`mailto:${contactInfo.email2}`}>{contactInfo.email2}</a>
            </p>
          </div>
        </div>
      </div>
      <footer>
        <Link to="/Home" className="back-to-home">BACK TO HOME</Link>
      </footer>
    </div>
  );
};
