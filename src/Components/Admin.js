import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css'; // Importing CSS for styling

const Admin = () => {
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple dummy authentication logic
    if (adminName === 'karthik' && password === '1') {
      alert('Login successful!');
      navigate('/branch-shipping'); // Redirect on success
    } else {
      alert('Invalid admin name or password');
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-box">
        <h2 className="admin-title">ADMIN</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <span className="input-label-center">Admin Name</span>
            <input
              type="text"
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
              className="admin-input"
              required
            />
          </div>
          <div className="input-group">
            <span className="input-label-center">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="admin-input"
              required
            />
          </div>
          <button type="submit" className="admin-login-button">
            Login
          </button>
        </form>
      </div>
      <footer className="admin-footer">
        <a href="/Home" className="back-link" onClick={() => navigate("/Home")}>
          BACK TO HOME
        </a>
      </footer>
    </div>
  );
};

export default Admin;
