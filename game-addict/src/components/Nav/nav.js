import React from 'react';
// import './nav.css'
import { NavLink } from 'react-router-dom';

function Nav(props) {
    return (
        <nav>
        <ul id="nav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/games">Games</NavLink></li>
            <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
        </nav>
    )
}

export default Nav;