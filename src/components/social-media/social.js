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
        <div id="social" class="navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#"><FacebookIcon/></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><TwitterIcon/></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><PinterestIcon/></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><InstagramIcon/></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><PhoneIcon/></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><EmailIcon/></a>
                </li>
            </ul>
        </div>
    );
};
export default Social;