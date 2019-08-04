import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer>
                <nav className="nav-footer">
                    <div className="link-div"><Link to="#">About</Link></div>
                    <div className="link-div"><Link to="#">Contact</Link></div>
                    <div className="link-div"><Link to="#">Careers</Link></div>
                    <div className="link-div"><Link to="#">Privacy policy</Link></div>
                    <div className="link-div"><Link to="#">Terms</Link></div>
                </nav>
                <div className="lower-footer-div">
                    <Link to="/home" className="footer-logo-link">
                        <span className="logo-text">BTA</span>
                    </Link>
                    <p className="p-copyright">
                        &copy; Copyright 2019 BTA. All rights reserved.
                        </p>
                    <div className="social-div">
                        <i className="fab fa-linkedin" title="Linkedin"></i>
                        <i className="fab fa-facebook-square" title="Facebook"></i>
                        <i className="fab fa-instagram" title="Instagram"></i>
                        <i className="fab fa-twitter-square" title="Twitter"></i>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;