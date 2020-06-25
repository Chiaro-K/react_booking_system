import React from 'react';
import { NavLink } from 'react-router-dom';
import './body-nav.scss';

const BodyNav = () => {
    return (
        <nav id="body-nav" class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">canvas</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <NavLink to="/home" className="nav-link">HOME</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/home" className="nav-link">FLIGHTS</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/home" className="nav-link">HOTELS</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/home" className="nav-link">HOLIDAYS</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/home" className="nav-link">BLOG</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/home" className="nav-link" style={{ marginRight: '0pt' }}>1800 105 2541</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};
export default BodyNav;