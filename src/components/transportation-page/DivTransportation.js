import React, { Component } from 'react';

export class DivTransportation extends Component {
    render() {
        return (
            <div className="div-transportation">
                <div className="div-trans-type">
                    <span className="span-left-trans">Type:</span>
                    <span className="span-right-trans">Airplane</span>
                </div>
                <div className="div-cc-from">
                    <span className="span-left-trans">City (Country) from:</span>
                    <span className="span-right-trans">Doha (Qatar)</span>
                </div>
                <div className="div-cc-to">
                    <span className="span-left-trans">City (Country) to:</span>
                    <span className="span-right-trans">Paris (France)</span>
                </div>
                <div className="div-provider-name">
                    <span className="span-left-trans">Provider:</span>
                    <span className="span-right-trans">Qatar Airways</span>
                </div>
                <button className="btn-details-trans btn-add-universal">Details</button>
            </div>
        );
    }
}

export default DivTransportation;
