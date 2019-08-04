import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import InputField from '../form-elements/InputField';
import SelectField from '../form-elements/SelectField';

const countries = ["Serbia", "USA", "France", "Belgium", "Spain", "China"];
const cities = ["Beograd", "Novi Sad", "Niš", "London", "Berlin", "Rome"];

class Signup extends Component {
    state = {
        // objekat fields u kom skladistim podatke iz input polja
        fields: {},
        // objekat errors u kom skladistim error poruke
        errors: {},
        // uslov za redirekciju
        redirect: false
    }

    componentDidMount() {
        document.title = "BTA | Sign up";
    }

    onChangeHandler = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    // metoda koja se poziva submitovanjem forme
    submitSignUpForm = (e) => {
        // dohvatam iz localStorage vrednost za email i smestam u promenljivu
        let storedEmail = localStorage.getItem('email');

        e.preventDefault();
        // ispitujem validaciju pozivom metode validateForm()
        if (this.validateForm()) {
            let fields = {};
            fields["firstName"] = "";
            fields["lastName"] = "";
            fields["email"] = "";
            fields["phone1"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });
            localStorage.setItem('firstName', this.state.fields.firstName);
            localStorage.setItem('lastName', this.state.fields.lastName);
            localStorage.setItem('password', this.state.fields.password);
            // provera postojeceg i unetog emaila
            if (storedEmail !== this.state.fields.email) {
                localStorage.setItem('email', this.state.fields.email);
                this.setState({
                    // ako je postojeci, dozvoli mu redirect
                    redirect: true
                })
                // alert("Form submitted");
            }
        }
    }

    // validacija inputa register forme
    validateForm = () => {
        let storedEmail = localStorage.getItem('email');
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["firstName"]) {
            formIsValid = false;
            errors["firstName"] = "* Please enter your First name.";
        }

        if (typeof fields["firstName"] !== "undefined") {
            if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["firstName"] = "* Please enter alphabet characters only.";
            }
        }

        if (!fields["lastName"]) {
            formIsValid = false;
            errors["lastName"] = "* Please enter your Last name.";
        }

        if (typeof fields["lastName"] !== "undefined") {
            if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["lastName"] = "* Please enter alphabet characters only.";
            }
        }

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "* Please enter your email.";
        }

        if (typeof fields["email"] !== "undefined") {
            //reg exp za email 
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "* Please enter valid email.";
            }
        }

        if (storedEmail === this.state.fields.email) {
            formIsValid = false;
            errors["email"] = "* Email already taken.";
        }

        if (!fields["phone1"]) {
            formIsValid = false;
            errors["phone1"] = "* Please enter your phone number.";
        }

        // if (typeof fields["phone1"] !== "undefined") {
        //     if (!fields["phone1"].match(/^[0-9]{10}$/)) {
        //         formIsValid = false;
        //         errors["phone1"] = "* Please enter valid phone number.";
        //     }
        // }

        if (!fields["address1"] || !fields["country1"] || !fields["city1"]) {
            formIsValid = false;
            errors["address1"] = "* Please enter your address, country and city.";
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "* Please enter your password.";
        }

        // if (typeof fields["password"] !== "undefined") {
        //     if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        //         formIsValid = false;
        //         errors["password"] = "* Please enter secure and strong password.";
        //     }
        // }

        if (fields["confirmPassword"] !== fields["password"]) {
            formIsValid = false;
            errors["confirmPassword"] = "* Passwords do not match.";
        }

        this.setState({
            errors: errors
        });

        return formIsValid;
    }

    render() {
        return (
            <div id="body-index">
                <div id="sign-up-div">
                    <h2 className="h2-index">Create Account</h2>
                    <form onSubmit={this.submitSignUpForm} id="sign-up-form" className="form-index">
                        <InputField
                            label="First name"
                            star="*"
                            type="text"
                            name="firstName"
                            value={this.state.fields.firstName}
                            onChangeHandler={this.onChangeHandler}
                        />
                        {/* error poruka je sakrivena sve dok uslov nije ispunjen */}
                        {this.state.errors &&
                            <p className="p-error">{this.state.errors.firstName}</p>}

                        <InputField
                            label="Last name"
                            star="*"
                            type="text"
                            name="lastName"
                            value={this.state.fields.lastName}
                            onChangeHandler={this.onChangeHandler}
                        />
                        {this.state.errors &&
                            <p className="p-error">{this.state.errors.lastName}</p>}

                        <InputField
                            label="Email"
                            star="*"
                            type="email"
                            name="email"
                            value={this.state.fields.email}
                            onChangeHandler={this.onChangeHandler}
                        />
                        {this.state.errors &&
                            <p className="p-error">{this.state.errors.email}</p>}

                        <InputField
                            label="Phone number 1"
                            star="*"
                            type="number"
                            name="phone1"
                            value={this.state.fields.phone1}
                            onChangeHandler={this.onChangeHandler}
                        />
                        {this.state.errors &&
                            <p className="p-error">{this.state.errors.phone1}</p>}

                        <InputField
                            label="Phone number 2"
                            type="number"
                            name="phone2"
                            value={this.state.fields.phone2}
                            onChangeHandler={this.onChangeHandler}
                        />
                        {this.state.errors &&
                            <p className="p-error">{this.state.errors.phone2}</p>}

                        <InputField
                            label="Address 1"
                            star="*"
                            type="text"
                            name="address1"
                            value={this.state.fields.address1}
                            onChangeHandler={this.onChangeHandler}
                        />
                        <div className="selects-div-cc">
                            <SelectField
                                name="country1"
                                value={this.state.fields.country1}
                                defaultValue="Country..."
                                title="Select country"
                                onChangeHandler={this.onChangeHandler}
                                options={countries}
                            />
                            <SelectField
                                name="city1"
                                value={this.state.fields.city1}
                                defaultValue="City..."
                                title="Select city"
                                onChangeHandler={this.onChangeHandler}
                                options={cities}
                            />
                        </div>
                        {this.state.errors &&
                            <p className="p-error">{this.state.errors.address1}</p>}

                        <InputField
                            label="Address 2"
                            type="text"
                            name="address2"
                            value={this.state.fields.address2}
                            onChangeHandler={this.onChangeHandler}
                        />
                        {this.state.errors &&
                            <p className="p-error">{this.state.errors.address2}</p>}

                        <div className="selects-div-cc">
                            <SelectField
                                name="country2"
                                value={this.state.fields.country2}
                                defaultValue="Country..."
                                title="Select country"
                                onChangeHandler={this.onChangeHandler}
                                options={countries}
                            />
                            <SelectField
                                name="city2"
                                value={this.state.fields.city2}
                                defaultValue="City..."
                                title="Select city"
                                onChangeHandler={this.onChangeHandler}
                                options={cities}
                            />
                        </div>

                        <InputField
                            label="Password"
                            star="*"
                            type="password"
                            name="password"
                            value={this.state.fields.password}
                            minLength="3"
                            title="Must contain at least 5 characters"
                            onChangeHandler={this.onChangeHandler}
                        />
                        {this.state.errors &&
                            <p className="p-error">{this.state.errors.password}</p>}

                        <InputField
                            label="Confirm password"
                            star="*"
                            type="password"
                            name="confirmPassword"
                            value={this.state.fields.confirmPassword}
                            title="Must match with the password"
                            onChangeHandler={this.onChangeHandler}
                        />
                        {this.state.errors &&
                            <p className="p-error">{this.state.errors.confirmPassword}</p>
                        }

                        <button type="submit" id="btn-sign-up" className="btn-main">Sign up</button>
                        <p>Already registred? <Link to="/log-in"><button className="btn-text" id="btn-to-log-in">Log in</button></Link></p>

                        {/* Ako je prosla validacija i redirect setovan sa false na true, uradi redirect */}
                        {this.state.redirect && <Redirect to="/home" />}
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;
