import React from "react";
import {registerPath, updateTokens} from "./App";
import {login} from "./service/login";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onCLick = () => {
        login(this.state)
            .then((result) => {
                updateTokens(result);
                alert("You are successfully logged in!")
            })
            .catch((error) => {
                alert(error.message)
            });
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
                    <input name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                </div>
                <div>
                    <input name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
                </div>
                <button onClick={this.onCLick}>Sign in</button>
                <button onClick={() => {this.props.history.push(registerPath)}}>Need an account?</button>
            </div>
        );
    }
}