import React, {useState} from "react";
import axios from 'axios'
import {Route} from "react-router-dom";
import {validateAll} from 'indicative/validator';
import {login, useAuth} from "./App";

function Register (props) {
    const [authData, setAuthData] =  useState({
                login: '',
                email: '',
                password: '',
                password_confirmation: ''
    });
    const [errors, setErrors] = useState({});

    const onClick = () => {

        const messages = {
            required: "This {{ field }} is required!",
            'email.email': "Invalid email",
            'password.confirmation': "Passwords doesn't match"
        }
        const rules = {
            login: 'required|string',
            email: 'required|email',
            password: 'required|string|min:8|confirmed'
        }
        validateAll(authData, rules, messages)
            .then(() => {

                const body = {
                    name: authData.login,
                    email: authData.email,
                    password: authData.password,
                }
                setErrors({});
                fetch('/auth/register', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
                    .then(r => console.log(r))
                    .then(token => login(token))
                    console.log("all right")
            })
            .catch(errors => {
                console.log(errors);
                const formatter = {}
                errors.forEach(error => formatter[error.field] = error.message)
                setErrors(formatter);
            })
    };

    const onChange = ({target: {name, value}}) => {
        setAuthData({...authData, [name]:value});
    };

    return (

        <div>
            <div>
                <span>
                    Login
                </span>
                <input name="login" onChange={onChange}/>
            </div>
            <div>
                {errors.login &&
                <span className='error' style={{color: 'red'}}>{errors.login}</span>}
            </div>
            <div>
                <span>
                    Email
                </span>
                <input name="email" onChange={onChange}/>
            </div>
            <div>
                {errors.email &&
                <span className='error' style={{color: 'red'}}>{errors.email}</span>}
            </div>
            <div>
                <span>
                    Password
                </span>
                <input name="password" onChange={onChange}/>
            </div>
            <div>
                {errors.password &&
                <span className='error' style={{color: 'red'}}>{errors.password}</span>}
            </div>
            <div>
                <span>
                    Repeat password
                </span>
                <input name="password_confirmation" onChange={onChange}/>
            </div>
            <button onClick={onClick}>Click me</button>
            <button
                onClick={() => { props.history.push('/login') }}
            >
                Log in
            </button>
        </div>
    );
}
export default Register;