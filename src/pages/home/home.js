import React, { Component } from 'react';
import Nav from '../../components/nav/nav';
import './home.scss';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="HomePage">
                <Nav />
            </div>
        );
    }
}
export default withRouter(Home);
