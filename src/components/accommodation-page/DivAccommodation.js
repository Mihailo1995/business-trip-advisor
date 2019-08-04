import React, { Component } from 'react';

class DivAccommodation extends Component {
    render() {
        return (
            <div className="div-accommodation">
                <div>
                    <img src={require("../../resources/images/hotel.jpg")} className="img-hotel" alt="Hotel image" />
                </div>
                <div className="div-accomm-data">
                    <h3 className="h3-accomm-name">Hotel Capri</h3>
                    <div className="div-type-stars" title="Category">
                        <i className="fas fa-hotel"></i>
                        <span className="span-type">Hotel</span>
                        <span className="span-stars">&#9733;&#9733;&#9733;&#9733;</span>
                    </div>
                    <div className="div-address" title="Address">
                        <i className="fas fa-map-marked-alt"></i>
                        <span className="span-address">Calle 21, La Habana, Cuba</span>
                    </div>
                    <div className="div-email" title="Email">
                        <i className="fas fa-envelope"></i>
                        <span className="span-email">capri.hotel@gmail.com</span>
                    </div>
                    <div className="div-phone" title="Phone">
                        <i className="fas fa-phone-square"></i>
                        <span className="span-phone">+53 7 8397200</span>
                    </div>
                </div>
                <button className="btn-details-accomm btn-add-universal">Details</button>
            </div>
        );
    }
}

export default DivAccommodation;
