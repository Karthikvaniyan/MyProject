import {NavLink} from 'react-router-dom';
import './Navbar.css';

const NavBar =() => {
   
    return(
        <div className="container">
            <NavLink to="http://localhost:3000/Home">HOME</NavLink>
            <NavLink to="http://localhost:3000/Admin"> ADMIN</NavLink>
            <NavLink to="http://localhost:3000/About"> ABOUT</NavLink>
            <NavLink to="http://localhost:3000/Contact"> CONTACT</NavLink>
            <NavLink to="http://localhost:3000/Logout"> LOGOUT</NavLink>
            </div>
    )
}
export default NavBar;