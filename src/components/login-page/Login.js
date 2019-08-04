import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../form-elements/InputField';

class Login extends Component {
    state = {
        // objekat fields u kom skladistim podatke iz input polja
        fields: {},
        // objekat errors u kom skladistim error poruke
        errors: {},
        // uslov za redirekciju
        redirect: false
    }

    componentDidMount() {
        document.title = "BTA | Log in";
    }

    onChangeHandler = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    // metoda koja se poziva submitovanjem forme
    submitLogInForm = (e) => {
        // dohvatam iz localStorage vrednosti za email i firstName i smestam u promenljive
        let storedEmail = localStorage.getItem('email');
        let storedName = localStorage.getItem('firstName');
        e.preventDefault();
        // ispitujem validaciju pozivom metode validateForm()
        if (this.validateForm()) {
            let fields = {};
            fields["email"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });
            // provera postojeceg i unetog emaila
            if (storedEmail === this.state.fields.email) {
                localStorage.setItem('email', this.state.fields.email);
                // ako je postojeci, dozvoli mu redirect
                this.setState({
                    redirect: true
                })
                // postojeci email ulogovanog usera prosledi kao parametar funkciji onLogin koja se nalazi u App.js
                this.props.onLogin(storedEmail);
            }
            // alert("Welcome, " + storedName);
            // console.log(this.state.fields);
        }
    }

    // validacija inputa login forme
    validateForm = () => {
        let storedEmail = localStorage.getItem('email');
        let storedPass = localStorage.getItem('password');
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "* Please enter your email.";
        }

        if (storedEmail !== this.state.fields.email) {
            formIsValid = false;
            errors["email"] = "* Email does not exist.";
        }

        if (typeof fields["email"] !== "undefined") {
            //reg exp za email
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "* Please enter valid email.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "* Please enter your password.";
        }

        if (storedPass !== this.state.fields.password) {
            formIsValid = false;
            errors["password"] = "* Password does not match."
        }

        this.setState({
            errors: errors
        });

        return formIsValid;
    }

    render() {
        return (
            <div id="body-index">
                <div id="log-in-div">
                    <h2 className="h2-index">Log in</h2>
                    <form onSubmit={this.submitLogInForm} id="log-in-form" className="form-index">
                        <InputField
                            label="Email"
                            type="email"
                            name="email"
                            value={this.state.fields.email}
                            onChangeHandler={this.onChangeHandler}
                        />
                        {this.state.errors &&
                            <p className="p-error">{this.state.errors.email}</p>}

                        <InputField
                            label="Password"
                            type="password"
                            name="password"
                            value={this.state.fields.password}
                            onChangeHandler={this.onChangeHandler}
                        />
                        {this.state.errors &&
                            <p className="p-error">{this.state.errors.password}</p>}

                        <button type="submit" id="btn-log-in" className="btn-main">Log in</button>
                        <p>Not registred? <Link to="/"><button className="btn-text" id="btn-to-sign-up">Sign up</button></Link></p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
