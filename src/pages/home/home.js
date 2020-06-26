import React, { Component, Fragment } from 'react';
import Nav from '../../components/nav/nav';
import BodyNav from '../../components/body-nav/body-nav';
import BookingFrame from '../../components/booking-frame/booking-frame';
import './home.scss';
import { withRouter } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <Nav />
                </header>
                <main style={{ marginTop: '3%' }}>
                    <header>
                        <BodyNav />
                    </header>
                    <div class="clear"></div>
                    <section className="booking">
                        <BookingFrame />
                    </section>
                </main>
            </Fragment>
        );
    }
}
export default withRouter(Home);
