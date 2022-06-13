// import "./app.css";
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
            <div className="footer-center width-75">
                <div className="footer-inner-container">
                    <div className="footer-row-1 col-6">
                        <p className="footer-para">hello@haystackanalytics.in</p>
                        <div className="social-icon">
                            {/* <a href="#facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#instagram"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                            <a href="#linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="#youtube"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                            <a href="#twitter"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a> */}
                        </div>
                    </div>
                    <div className="footer-row-2 col-6 width-75">
                        <a href="#science-corner">SCIENCE CORNER</a>
                        <a href="#product">PRODUCT</a>
                        <a href="#about-us">ABOUT US</a>
                        <a href="#latest-news">LATEST NEWS</a>
                        <a href="#blog">BLOG</a>
                    </div>
                </div>
            </div>
    );
}

export default Footer;