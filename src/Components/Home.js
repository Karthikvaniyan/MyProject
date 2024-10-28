import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';
import './Home.css';
import NavBar from './Navbar';
import Footer from './Footer';

const Home = () => {
    // Optionally, you can provide a fallback if the username is not found
    const username = localStorage.getItem('username') || 'Guest';

    return (
        <div>
            <NavBar />
            <div className="content">
                <h1>
                    <img src={logo} alt="Hardik Herbals Logo" className="logo" />
                </h1>
                <div className="text-container">
                    <p>Welcome {username}!</p>
                    <p>TO</p>
                    <p>HARDIK HERBALS</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
