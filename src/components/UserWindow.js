import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserWindow extends Component {
    render() {
        let firstName = localStorage.getItem('firstName');
        let lastName = localStorage.getItem('lastName');
        let email = localStorage.getItem('email');

        return (
            <div id="user-window-div">
                <div className="user-info-div">
                    <div className="user-name-div">
                        <span id="span-firstName">{firstName}</span>
                        <span id="span-lastName">{lastName}</span>
                    </div>
                    <h4 className="h4-user-email">{email}</h4>
                </div>
                <Link to="/log-in">
                    <button id="btn-log-out">Log out</button>
                </Link>
            </div>
        );
    }
}

export default UserWindow;
