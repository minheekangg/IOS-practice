import React from 'react'
import { Link } from "react-router-dom";
const NavBar = () => {
    return <nav>
        <div className="nav-wrapper">
            <Link to="/" className="brand-logo center">Chef Jonah</Link>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><Link to="/fridge">My Fridge</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
            </ul>
        </div>
    </nav>
}

export default NavBar