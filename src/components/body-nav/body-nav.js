import React from 'react';
import { NavLink } from 'react-router-dom';
import './body-nav.scss';
import HomeIcon from '@material-ui/icons/Home';
import FlightIcon from '@material-ui/icons/Flight';
import ApartmentIcon from '@material-ui/icons/Apartment';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import CreateIcon from '@material-ui/icons/Create';
import PhoneIcon from '@material-ui/icons/Phone';

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
                            <NavLink to="/home" className="nav-link"><span><HomeIcon/></span>HOME</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/home" className="nav-link"><span><FlightIcon/></span>FLIGHTS</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/home" className="nav-link"><span><ApartmentIcon/></span>HOTELS</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/home" className="nav-link"><span><BeachAccessIcon/></span>HOLIDAYS</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/home" className="nav-link"><span><CreateIcon/></span>BLOG</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/home" className="nav-link" style={{ marginRight: '0pt' }}><span><PhoneIcon/></span>1800 105 2541</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};
export default BodyNav;