import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import the AuthContext
import './Logout.css'; // CSS for styling
import logo from './logo.jpg'; // Adjust path to logo

const Logout = () => {
  const navigate = useNavigate(); // React Router navigate hook
  const { user, logout } = useAuth(); // Access user and logout from AuthContext

  // Handle logout by clearing local state
  const handleLogout = () => {
    logout(); // Clear user state from AuthContext
    alert('Logged out successfully'); // Show success message
    navigate('/'); // Redirect to home or login page
  };

  return (
    <div className="logout-container">
      <div className="logout-box">
        <img src={logo} alt="Logo" className="logout-logo" />
        <p>Are you sure you want to logout, {user ? user.username : 'Guest'}?</p>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
        <a href="/" className="forgot-password">Forgot password?</a>
      </div>
      
      <button className="but" onClick={() => navigate("/home")} style={{ marginLeft: "10px" }}>
        Back to Home
      </button>
    </div>
  );
};

export default Logout;
