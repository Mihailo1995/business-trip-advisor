import React, { Component } from 'react';
import SelectField from '../form-elements/SelectField';
import Checkbox from '../form-elements/Checkbox';
import DivTransportation from './DivTransportation';

const countries = ["Serbia", "USA", "France", "Belgium", "Spain", "China"];
const cities = ["Beograd", "Novi Sad", "Niš", "London", "Berlin", "Rome"];
const providers = ["FedEx", "Union Pacific", "DHL", "NYK Group", "Canadian National", "MOL"];

export class TransParamount extends Component {
    state = {
        countryFrom: "",
        countryTo: "",
        cityFrom: "",
        cityTo: "",
        isAirplane: false,
        isBus: false,
        isCompanyCar: false,
        isRentACar: false,
        isTrain: false,
        isTaxi: false
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
            <div id="paramount-trans-div">
                <h1 className="h1-universal-text">Transportation</h1>
                <form className="form-search">
                    <div className="selects-c-boxes-div">
                        <div className="selects-div">
                            <div className="country-from-to-div">
                                <div className="div-select">
                                    <SelectField
                                        name="countryFrom"
                                        value={this.state.countryFrom}
                                        defaultValue="Country from..."
                                        title="Select country"
                                        required={true}
                                        onChangeHandler={this.onChangeHandler}
                                        options={countries}
                                    />
                                </div>
                                <div className="div-select">
                                    <SelectField
                                        name="countryTo"
                                        value={this.state.countryTo}
                                        defaultValue="Country to..."
                                        title="Select country"
                                        required={true}
                                        onChangeHandler={this.onChangeHandler}
                                        options={countries}
                                    />
                                </div>
                            </div>

                            <div className="city-from-to-div">
                                <div className="div-select">
                                    <SelectField
                                        name="cityFrom"
                                        value={this.state.cityFrom}
                                        defaultValue="City from..."
                                        title="Select city"
                                        required={true}
                                        onChangeHandler={this.onChangeHandler}
                                        options={cities}
                                    />
                                </div>
                                <div className="div-select">
                                    <SelectField
                                        name="cityTo"
                                        value={this.state.cityTo}
                                        defaultValue="City to..."
                                        title="Select city"
                                        required={true}
                                        onChangeHandler={this.onChangeHandler}
                                        options={cities}
                                    />
                                </div>
                            </div>

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
                        </div>

                        <div className="c-boxes-div">
                            <ul className="ul-c-boxes">
                                <li>
                                    <Checkbox
                                        label="Airplane"
                                        name="airplane"
                                        value={this.state.isAirplane}
                                        onChangeHandler={this.onChangeHandler}
                                    />
                                </li>
                                <li>
                                    <Checkbox
                                        label="Bus"
                                        name="bus"
                                        value={this.state.isBus}
                                        onChangeHandler={this.onChangeHandler}
                                    />
                                </li>
                                <li>
                                    <Checkbox
                                        label="Company Car"
                                        name="companyCar"
                                        value={this.state.isCompanyCar}
                                        onChangeHandler={this.onChangeHandler}
                                    />
                                </li>
                                <li>
                                    <Checkbox
                                        label="Rent a Car"
                                        name="rentACar"
                                        value={this.state.isRentACar}
                                        onChangeHandler={this.onChangeHandler}
                                    />
                                </li>
                                <li>
                                    <Checkbox
                                        label="Train"
                                        name="train"
                                        value={this.state.isTrain}
                                        onChangeHandler={this.onChangeHandler}
                                    />
                                </li>
                                <li>
                                    <Checkbox
                                        label="Taxi"
                                        name="taxi"
                                        value={this.state.isTaxi}
                                        onChangeHandler={this.onChangeHandler}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </form>

                <div className="output-transportation-div">
                    <div className="transportations-div">
                        <DivTransportation />
                        <DivTransportation />
                        <DivTransportation />
                    </div>
                </div>
            </div>
        );
    }
}

export default TransParamount;
