import React, { Component, Fragment } from 'react';
import Nav from '../../components/nav/nav';
import BodyNav from '../../components/body-nav/body-nav';
import './home.scss';
import { withRouter } from 'react-router-dom';
// import Paris from '../../assets/images/paris.jpg';
// import LA from '../../assets/images/las-vegas.jpg';
// import Brazil from '../../assets/images/brazil.jpg';


class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <Nav />
                <div class="clear"></div>
                <main style={{marginTop: '4%'}}>
                    <article>
                        <BodyNav/>
                    </article>
                </main>
            </Fragment>
        );
    }
}
export default withRouter(Home);
