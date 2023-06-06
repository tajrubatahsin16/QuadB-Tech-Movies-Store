import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import { BiCameraMovie } from "react-icons/bi";

const Header = () => {
    return (
        <div className="header">
            <div className="icon">
                <BiCameraMovie style={{fontSize: "1.8rem"}}></BiCameraMovie>
                <h1>QuadB Tech Movie Store</h1>
            </div>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/statistics">Booked Movies</Link>
            </nav>
        </div>
    );
}
export default Header;