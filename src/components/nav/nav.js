import React from 'react';
import { NavLink } from 'react-router-dom';
import Social from '../social-media/social';
import './nav.scss';

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container">
                <NavLink to="/home" className="nav-item nav-link active">HOME</NavLink>
                <NavLink to="#" className="nav-item nav-link">FAQS</NavLink>
                <NavLink to="#" className="nav-item nav-link">CONTACT</NavLink>
                <NavLink to="#" className="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">USD</a>
                    <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Option 2</a>
                        <a class="dropdown-item" href="#">Option 3</a>
                        <a class="dropdown-item" href="#">Option 4</a>
                    </div>
                </NavLink>
               
                <Social/>
            </div>
        </nav>

    );
};
export default Nav;