import React from 'react';
import { NavLink } from 'react-router-dom';
import './body-nav.scss';

const BodyNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <NavLink to="/home" className="nav-item nav-link active">HOME</NavLink>
            <NavLink to="#" className="nav-item nav-link">FLIGHTS</NavLink>
            <NavLink to="#" className="nav-item nav-link">HOTELS</NavLink>
            <NavLink to="/home" className="nav-item nav-link active">HOLIDAYS</NavLink>
            <NavLink to="#" className="nav-item nav-link">BLOG</NavLink>
            <NavLink to="#" className="nav-item nav-link">1800 105 2541</NavLink>
        </nav>

    );
};
export default BodyNav;