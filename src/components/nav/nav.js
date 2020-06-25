import React from 'react';
import { NavLink } from 'react-router-dom';
import Social from '../social-media/social';
import './nav.scss';

const Nav = () => {
    return (
        <nav id="main-nav" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <NavLink to="/home" className="nav-item nav-link border-right">HOME</NavLink>
                <NavLink to="#" className="nav-item nav-link border-right">FAQS</NavLink>
                <NavLink to="#" className="nav-item nav-link border-right">CONTACT</NavLink>
                <span style={{cursor: 'pointer'}} to="#" className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">USD</a>
                    <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Option 2</a>
                        <a className="dropdown-item" href="#">Option 3</a>
                        <a className="dropdown-item" href="#">Option 4</a>
                    </div>
                </span>
               
                <Social/>
            </div>
        </nav>

    );
};
export default Nav;