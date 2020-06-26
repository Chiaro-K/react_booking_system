import React, { Component, Fragment } from 'react';
import './flight-info.scss';

const FlightInfo = () => {
    return (
        <div id="flight-info">
            <form>
                <header>
                    <h3>Book Your Flights</h3>
                    <div class="right">
                        <button className="btn active" type="button">Domestic</button>
                        <button className="btn" type="button">International</button>
                    </div>
                </header>
                <section className="flex-container">
                    <div class="form-group wide">
                        <label for="from">From</label>
                        <input type="text" class="form-control" id="from" aria-describedby="from" placeholder="Eg. Melbourne, Australia" required></input>
                    </div>
                    <div class="form-group wide">
                        <label for="to">To</label>
                        <input type="text" class="form-control" id="to" placeholder="Eg. New York, United States" required></input>
                    </div>
                </section>
                <section className="flex-container">
                    <div class="form-group short">
                        <label for="departure">Depature</label>
                        <input type="date" class="form-control" id="departure" aria-describedby="departure" required></input>
                    </div>
                    <div class="form-group short">
                        <label for="return">Return</label>
                        <input type="date" class="form-control" id="return" aria-describedby="return" required></input>
                    </div>
                    <div class="form-group short">
                        <label for="adults">Adults</label>
                        <input type="number" required class="form-control" id="adults" aria-describedby="adults" placeholder="2" required></input>
                    </div>
                </section>
                <section className="flex-container">
                    <div>
                        <button type="submit" className="btn btn-submit">Search Flights</button>
                    </div>
                    <div>
                        <a href="#">Advanced Search</a>
                    </div>
                </section>
            </form>
        </div>
    );
}
export default FlightInfo;
