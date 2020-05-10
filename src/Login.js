import React, {useState} from "react";
import {login, useAuth} from "./App"
import {logout} from "./App";
import {Register} from "./Register";
import {Route} from "react-router-dom";
import {createAuthProvider} from 'react-token-auth';


function Login (props) {

    const [logdata, setLogdata] = useState({
        login: '',
        password: ''
    });
    const onClick = () => {
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(logdata)
        })
            .then(r => r.json())
            .then(token => login(token))
    };

    const onLogout = () =>{
        logout();
    };

    const onChange = ({target: {name, value}}) => {
        setLogdata({...logdata, [name]:value});
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
                <span>
                    Password
                </span>
                <input name="password" onChange={onChange}/>
            </div>
            <button onClick={onClick}>Log in</button>

            <div>
                <button onClick={onLogout}>Log out</button>
            </div>
            <div>
                <button
                    onClick={() => { props.history.push('/register') }}
                >
                    Sign up
                </button>
            </div>

        </div>
    );
}

export default Login;