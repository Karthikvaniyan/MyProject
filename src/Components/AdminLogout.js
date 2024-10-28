import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MessageContext } from './MessageContext';
import './AdminLogout.css';
import logo from './logo.jpg';

const AdminLogout = () => {
  const { message } = useContext(MessageContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogout = () => {
    // Directly handle logout logic without fetch
    alert('Logout successful');
    // Clear session storage or tokens if needed
    sessionStorage.clear();
    navigate('/admin'); // Redirect to the admin login page
  };

  return (
    <div className="admin-logout-container">
      {message && (
        <div className="success-message">
          <p>{message}</p>
        </div>
      )}

      <div className="navigation-links">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/branches" className="nav-link">Branches</Link>
      </div>

      <div className="admin-logout-box">
        <img src={logo} alt="Logo" className="admin-logo" />

        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className="input-icon">👤</span>
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="input-icon">🔒</span>
        </div>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>

        <Link to="/forgot-password" className="forgot-password">
          Forgot password?
        </Link>
      </div>
    </div>
  );
};

export default AdminLogout;
