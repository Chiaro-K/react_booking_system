import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
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
                </div>
            </div>
        </nav>
    );
};
export default Nav;