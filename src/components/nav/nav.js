import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <NavLink to="/home">HOME</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/home">FAQS</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/home">CONTACT</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/home">USD</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Nav;