import React, { Component } from 'react';
import SelectField from '../form-elements/SelectField';
import Checkbox from '../form-elements/Checkbox';
import DivAccommodation from './DivAccommodation';

const countries = ["Serbia", "USA", "France", "Belgium", "Spain", "China"];
const states = ["Alabama", "Arizona", "Ohio", "California", "Iowa", "Florida"];
const cities = ["Beograd", "Novi Sad", "Niš", "London", "Berlin", "Rome"];

class AccommParamount extends Component {
    state = {
        country: "",
        state: "",
        city: "",
        isHotel: false,
        isHostel: false,
        isApartment: false,
        isMotel: false
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
            <div id="paramount-accomm-div">
                <h1 className="h1-universal-text">Accommodation</h1>
                <form className="form-search">
                    <div className="selects-c-boxes-div">
                        <div className="selects-div">
                            <div className="div-select">
                                <SelectField
                                    name="country"
                                    value={this.state.country}
                                    defaultValue="Country..."
                                    title="Select country"
                                    required={true}
                                    onChangeHandler={this.onChangeHandler}
                                    options={countries}
                                />
                            </div>
                            <div className="div-select">
                                <SelectField
                                    name="state"
                                    value={this.state.state}
                                    defaultValue="State..."
                                    title="Select state"
                                    required={false}
                                    onChangeHandler={this.onChangeHandler}
                                    options={states}
                                />
                            </div>
                            <div className="div-select">
                                <SelectField
                                    name="city"
                                    value={this.state.city}
                                    defaultValue="City..."
                                    title="Select city"
                                    required={true}
                                    onChangeHandler={this.onChangeHandler}
                                    options={cities}
                                />
                            </div>
                        </div>

                        <div className="c-boxes-div">
                            <ul className="ul-c-boxes">
                                <li>
                                    <Checkbox
                                        label="Hotel"
                                        name="hotel"
                                        value={this.state.isHotel}
                                        onChangeHandler={this.onChangeHandler}
                                    />
                                </li>
                                <li>
                                    <Checkbox
                                        label="Hostel"
                                        name="hostel"
                                        value={this.state.isHostel}
                                        onChangeHandler={this.onChangeHandler}
                                    />
                                </li>
                                <li>
                                    <Checkbox
                                        label="Apartment"
                                        name="apartment"
                                        value={this.state.isApartment}
                                        onChangeHandler={this.onChangeHandler}
                                    />
                                </li>
                                <li>
                                    <Checkbox
                                        label="Motel"
                                        name="motel"
                                        value={this.state.isMotel}
                                        onChangeHandler={this.onChangeHandler}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </form>

                <div className="output-accommodation-div">
                    <div className="accommodations-div">
                        <DivAccommodation />
                        <DivAccommodation />
                        <DivAccommodation />
                        <DivAccommodation />
                        <DivAccommodation />
                        <DivAccommodation />
                        <DivAccommodation />
                        <DivAccommodation />
                        <DivAccommodation />
                    </div>
                </div>
            </div>
        );
    }
}

export default AccommParamount;
