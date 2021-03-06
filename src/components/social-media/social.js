import React from 'react';
import './social.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const Social = () => {
    return (
        <div id="social" className="navbar-collapse">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/"><FacebookIcon/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/"><TwitterIcon/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/"><PinterestIcon/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/"><InstagramIcon/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/"><PhoneIcon/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/"><EmailIcon/></a>
                </li>
            </ul>
        </div>
    );
};
export default Social;