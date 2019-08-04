import React, { Component } from 'react';
import SelectField from '../form-elements/SelectField';
import Header from '../Header';
import Footer from '../Footer';

const providers = ["FedEx", "Union Pacific", "DHL", "NYK Group", "Canadian National", "MOL"];

class Providers extends Component {
    state = {
        provider: ""
    }

    componentDidMount() {
        document.title = "BTA | Providers";
    }

    onChangeHandler = (e) => {
        const { type, name, value, checked } = e.target;
        if (type === "checkbox") {
            this.setState({
                [name]: checked
            });
        } else {
            this.setState({
                [name]: value
            });
        }
    }

    render() {
        return (
            <div id="body-universal">
                <Header />
                <main id="main-universal">
                    <section id="section-providers">
                        <h1 className="h1-universal-text">Providers</h1>
                        <div className="div-select">
                            <SelectField
                                name="provider"
                                value={this.state.provider}
                                defaultValue="Provider..."
                                title="Select provider"
                                required={false}
                                onChangeHandler={this.onChangeHandler}
                                options={providers}
                            />
                        </div>

                        <div className="output-providers-div">
                            <div className="providers-div">
                                <div className="div-provider">
                                    <div className="div-prov-name">
                                        <span className="span-left-prov">Name:</span>
                                        <span className="span-right-prov">Qatart Airways</span>
                                    </div>
                                    <div className="div-prov-type">
                                        <span className="span-left-prov">Type:</span>
                                        <span className="span-right-prov">Airplane</span>
                                    </div>
                                    <div className="div-country-prov">
                                        <span className="span-left-prov">Country:</span>
                                        <span className="span-right-prov">Qatar</span>
                                    </div>
                                    <div className="div-city-prov">
                                        <span className="span-left-prov">City:</span>
                                        <span className="span-right-prov">Doha</span>
                                    </div>
                                    <div className="div-address-prov">
                                        <span className="span-left-prov">Address:</span>
                                        <span className="span-right-prov">Kneza Mihaila 30</span>
                                    </div>
                                    <div className="div-phone-prov">
                                        <span className="span-left-prov">Phone:</span>
                                        <span className="span-right-prov">+974 4022 5336</span>
                                    </div>
                                    <div className="div-email-prov">
                                        <span className="span-left-prov">Email:</span>
                                        <span className="span-right-prov">qatar.airways@gmail.com</span>
                                    </div>
                                </div>

                                <div className="div-provider">
                                    <div className="div-prov-name">
                                        <span className="span-left-prov">Name:</span>
                                        <span className="span-right-prov">Qatart Airways</span>
                                    </div>
                                    <div className="div-prov-type">
                                        <span className="span-left-prov">Type:</span>
                                        <span className="span-right-prov">Airplane</span>
                                    </div>
                                    <div className="div-country-prov">
                                        <span className="span-left-prov">Country:</span>
                                        <span className="span-right-prov">Qatar</span>
                                    </div>
                                    <div className="div-city-prov">
                                        <span className="span-left-prov">City:</span>
                                        <span className="span-right-prov">Doha</span>
                                    </div>
                                    <div className="div-address-prov">
                                        <span className="span-left-prov">Address:</span>
                                        <span className="span-right-prov">Kneza Mihaila 30</span>
                                    </div>
                                    <div className="div-phone-prov">
                                        <span className="span-left-prov">Phone:</span>
                                        <span className="span-right-prov">+974 4022 5336</span>
                                    </div>
                                    <div className="div-email-prov">
                                        <span className="span-left-prov">Email:</span>
                                        <span className="span-right-prov">qatar.airways@gmail.com</span>
                                    </div>
                                </div>
                                <div className="div-provider">
                                    <div className="div-prov-name">
                                        <span className="span-left-prov">Name:</span>
                                        <span className="span-right-prov">Qatart Airways</span>
                                    </div>
                                    <div className="div-prov-type">
                                        <span className="span-left-prov">Type:</span>
                                        <span className="span-right-prov">Airplane</span>
                                    </div>
                                    <div className="div-country-prov">
                                        <span className="span-left-prov">Country:</span>
                                        <span className="span-right-prov">Qatar</span>
                                    </div>
                                    <div className="div-city-prov">
                                        <span className="span-left-prov">City:</span>
                                        <span className="span-right-prov">Doha</span>
                                    </div>
                                    <div className="div-address-prov">
                                        <span className="span-left-prov">Address:</span>
                                        <span className="span-right-prov">Kneza Mihaila 30</span>
                                    </div>
                                    <div className="div-phone-prov">
                                        <span className="span-left-prov">Phone:</span>
                                        <span className="span-right-prov">+974 4022 5336</span>
                                    </div>
                                    <div className="div-email-prov">
                                        <span className="span-left-prov">Email:</span>
                                        <span className="span-right-prov">qatar.airways@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Providers;
