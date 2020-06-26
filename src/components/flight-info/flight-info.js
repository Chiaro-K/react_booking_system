import React, { Component } from 'react';
import './flight-info.scss';

class FlightInfo extends Component {

    handleTypeClick = (e) => {
        this.props.onClick(e);
    }
    render() {
        return (
            <div id="flight-info">
                <form>
                    <header>
                        <h3>Book Your Flights</h3>
                        <div className="right">
                            <button className={"btn " + (this.props.flightType === 1 ? 'active' : '')} type="button" onClick={this.handleTypeClick}>Domestic</button>
                            <button className={"btn " + (this.props.flightType === 0 ? 'active' : '')} type="button" onClick={this.handleTypeClick}>International</button>
                        </div>
                    </header>
                    <section className="flex-container">
                        <div className="form-group wide">
                            <label htmlFor="from">From</label>
                            <input type="text" className="form-control" id="from" aria-describedby="from" placeholder="Eg. Melbourne, Australia" required></input>
                        </div>
                        <div className="form-group wide">
                            <label htmlFor="to">To</label>
                            <input type="text" className="form-control" id="to" placeholder="Eg. New York, United States" required></input>
                        </div>
                    </section>
                    <section className="flex-container">
                        <div className="form-group short">
                            <label htmlFor="departure">Depature</label>
                            <input type="date" className="form-control" id="departure" aria-describedby="departure" required></input>
                        </div>
                        <div className="form-group short">
                            <label htmlFor="return">Return</label>
                            <input type="date" className="form-control" id="return" aria-describedby="return" required></input>
                        </div>
                        <div className="form-group short">
                            <label htmlFor="adults">Adults</label>
                            <input type="number" className="form-control" id="adults" aria-describedby="adults" placeholder="2" required></input>
                        </div>
                    </section>
                    <section className="flex-container">
                        <div>
                            <button type="submit" className="btn btn-submit">Search Flights</button>
                        </div>
                        <div>
                            <a href="/">Advanced Search</a>
                        </div>
                    </section>
                </form>
            </div>
        );
    }
}
export default FlightInfo;
