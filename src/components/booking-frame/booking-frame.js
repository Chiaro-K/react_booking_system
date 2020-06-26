import React, { Component, Fragment } from 'react';
import './booking-frame.scss';
import FlightInfo from '../flight-info/flight-info';
import FlightIcon from '@material-ui/icons/Flight';
import ApartmentIcon from '@material-ui/icons/Apartment';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const BookingFrame = () => {
    return (
        <Fragment>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><span className="booking-icon"><FlightIcon /></span>Flights</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><span className="booking-icon"><ApartmentIcon /></span>Hotels</a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Flights + Hotels<small className="save">Save</small></a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><span className="booking-icon"><BeachAccessIcon /></span>Holidays</a>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><FlightInfo /></div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
            </div>
        </Fragment>
    );
}
export default BookingFrame;
