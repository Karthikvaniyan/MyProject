import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import useAuth hook
import './login.css'; // External CSS for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Get login function from AuthContext
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you would typically perform some kind of validation
    // or dummy authentication for demonstration purposes.
    if (username === 'karthik' && password === '1') {
      const token = 'dummyToken'; // Replace with actual token logic
      login(username, token); // Store username and token via AuthContext
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);

      alert('Login successful!');
      navigate('/home'); // Navigate to Home page
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <span className="input-icon">👤</span>
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="input-icon">🔒</span>
          </div>
          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/" className="forgot-password">Forget password?</a>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="register-link">
          <p>Don't have an account?</p>
          <Link to="/register" className="register-link">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
