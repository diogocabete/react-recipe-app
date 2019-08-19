import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className="home">
                <Link to="/">Home</Link>
            </h1>
            <h1 className="about">
                <Link to="/about">About</Link>
            </h1>
        </nav>
    );
}
 
export default NavBar;