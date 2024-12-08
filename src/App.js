import './App.css';
import Home from './Components/Home';

import Admin from './Components/Admin';
import {About} from './Components/About';
import {Contact} from './Components/Contact';
import Logout from './Components/Logout';
import Register from './Components/Registration';
import { Routes, Route } from 'react-router-dom';
import BranchShipping from './Components/BranchShipping';

import Login from './Components/login';
import AdminLogout from './Components/AdminLogout';

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path="/" element={<Login/>} /> {/* Default route */}
      <Route path="login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/register" element={<Register/>} />
        
        <Route path="Admin" element={<Admin />} />
        <Route path="/branch-shipping" element={<BranchShipping />} />
        <Route path="About" element={<About />} />
        <Route path="AdminLogout" element={<AdminLogout/>}/>
        <Route path="Contact" element={<Contact />} />
        <Route path="Logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
