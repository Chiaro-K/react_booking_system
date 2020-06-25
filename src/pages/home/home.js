import React, { Component } from 'react';
import Nav from '../../components/nav/nav';
import BodyNav from '../../components/body-nav/body-nav';
import './home.scss';
import { withRouter } from 'react-router-dom';
import Paris from '../../assets/images/paris.jpg';
import LA from '../../assets/images/las-vegas.jpg';
import Brazil from '../../assets/images/brazil.jpg';


class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main>
                <Nav />
                
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active" style={{ backgroundImage: `url(${Paris})` }}>
                        </div>
                        <div className="carousel-item" style={{ backgroundImage: `url(${LA})` }}>
                        </div>
                        <div className="carousel-item" style={{ backgroundImage: `url(${Brazil})` }}>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </main>
        );
    }
}
export default withRouter(Home);
