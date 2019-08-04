import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Page404 extends Component {
    componentDidMount() {
        document.title = "BTA | Not Found";
    }

    render() {
        return (
            <div id="body-page404">
                <div class="div-page404">
                    <h2 className="h1-page404">Page Not Found</h2>
                    <p className="p-page404">The requested URL was not found on this server.</p>
                    <Link to="/home" className="footer-logo-link">
                        <span className="logo-text-page404">BTA</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Page404;
