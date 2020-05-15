import React from "react";
import {Button, TextField} from "@material-ui/core";
import '../Login.css'
import {login} from "../service/login";

export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            emailPattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            password: ''
        };
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onClick = () => {
        let data = {
            email: this.state.email,
            password: this.state.password
        }
        login(data).then(
            result => {
                localStorage.setItem('AUTH', JSON.stringify(result));
                this.props.auth(result);
            }).catch(err => {
            console.log(err);
        });
    };


    loginButtonDisable = () => {
        return this.disabledEmail()
            || this.disabledPassword();

    }

    disabledEmail = () => {
        return !this.state.emailPattern.test(this.state.email);
    }

    disabledPassword = () => {
        return this.state.password.length === 0;
    }


    render() {
        return (
            <div id="wrapper">
                <div><TextField type="email" id="email" error={this.disabledEmail()} helperText={this.disabledEmail() ? "Некорректный формат почты" : ""} name="email" label="email" variant="filled" value={this.state.email} onChange={this.onChange}/></div>
                <div><TextField error={this.disabledPassword()} helperText={this.disabledPassword()? "Пароль не может быть пустым" : ""} name="password" label="Пароль" variant="filled" value={this.state.password} type="password" onChange={this.onChange}/></div>
                <div><Button className="type=" onClick={this.onClick} variant="contained" color="primary" disabled={this.loginButtonDisable()}>&#xf0da;</Button></div>
                <div id="signin"><p><a href="/">Go Home</a></p></div>
            </div>
        )};
}
