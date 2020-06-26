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
        <nav id="body-nav" className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">canvas</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink to="/home" className="nav-link active"><span><HomeIcon/></span>HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link"><span><FlightIcon/></span>FLIGHTS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link"><span><ApartmentIcon/></span>HOTELS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link"><span><BeachAccessIcon/></span>HOLIDAYS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link"><span><CreateIcon/></span>BLOG</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link nav-tel"><span><PhoneIcon/></span>1800 105 2541</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};
export default BodyNav;