import React from "react";
import {loginPath} from "./App";

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            repeatPassword: ''
        }
    }

    onClick = () => {
        if (this.validateName() &&
            this.validateEmail() &&
            this.validatePassword() &&
            this.validateRepeatedPassword()
        ) {
            alert("Registration successful");
            this.props.history.push(loginPath)
        }
    };

    validateName = () => {
        if (!this.state.name) {
            alert("Name can't be empty");
            return false
        }
        return true
    };

    validateEmail = () => {
        const validEmailRegex =
            RegExp(/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
        if (!validEmailRegex.test(this.state.email)) {
            alert("Incorrect email");
            return false
        }
        return true
    };

    validatePassword = () => {
        if (!this.state.password) {
            alert("Password can't be empty");
            return false
        }
        return true
    };

    validateRepeatedPassword = () => {
        if (this.state.password !== this.state.repeatPassword) {
            alert("Passwords don't match");
            return false
        }
        return true;
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <div>
                <div>
                    <input name="name" placeholder="Your name" value={this.state.name} onChange={this.onChange}/>
                </div>
                <div>
                    <input name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                </div>
                <div>
                    <input name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
                </div>
                <div>
                    <input name="repeatPassword" placeholder="Repeat password" value={this.state.repeatPassword}
                           onChange={this.onChange}/>
                </div>
                <button onClick={this.onClick}>Sign up</button>
                <button onClick={() => {this.props.history.push(loginPath)}}>Already have an account?</button>
            </div>
        );
    }
}