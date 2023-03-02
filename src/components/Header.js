import "./Header.css";
import logo from './../images/logo.png';

import { Link } from "react-router-dom";
import Login from "./Login";

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li> <img src={logo} alt="logo" /> </li>
                    <li>Travel</li>
                    <li>Hotels</li>
                    <li>Places</li>
                    <li>Weather</li>
                    <li>To Do's</li>
                    <li>Uploads</li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Header;