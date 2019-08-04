import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserWindow from './UserWindow';

class Header extends Component {
    state = {
        userWindowShown: false
    }

    onUserIconClick = () => {
        this.setState({
            userWindowShown: !this.state.userWindowShown
        });
    }

    render() {
        return (
            <header>
                <div className="upper-header-div">
                    <Link to="/home" className="header-logo-link">
                        <span className="logo-text">Business Trip Advisor</span>
                    </Link>
                    <button onClick={this.onUserIconClick} id="btn-user" title="Current user">
                        <i className="fas fa-user-circle"></i>
                    </button>
                    {/* {this.state.userWindowShown ? <UserWindow /> : null} */}
                    {this.state.userWindowShown && <UserWindow />}
                </div>
                <div className="lower-header-div">
                    <nav className="nav-header">
                        <div className="page-div"><Link to="/home">Home</Link></div>
                        <div className="page-div"><Link to="/life">Life in different countries</Link></div>
                        <div className="page-div"><Link to="/accommodation">Accommodation</Link></div>
                        <div className="page-div"><Link to="/transportation">Transportation</Link></div>
                        <div className="page-div"><Link to="/feedbacks">Feedbacks</Link></div>
                        <div className="page-div"><Link to="/providers">Providers</Link></div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
