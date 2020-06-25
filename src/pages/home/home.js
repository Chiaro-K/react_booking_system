import React, { Component } from 'react';
import Nav from '../../components/nav/nav';
import './home.scss';
import { withRouter } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main>
                <Nav />
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active" style={{ backgroundImage: "url('https://source.unsplash.com/LAaSoL0LrYs/1920x1080')" }}>
                        </div>
                        <div class="carousel-item" style={{ backgroundImage: "url('https://source.unsplash.com/bF2vsubyHcQ/1920x1080')" }}>
                        </div>
                        <div class="carousel-item" style={{ backgroundImage: "url('https://source.unsplash.com/szFUQoyvrxM/1920x1080')" }}>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </main>
        );
    }
}
export default withRouter(Home);
