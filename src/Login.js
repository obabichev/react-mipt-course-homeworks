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
    const [errors, setErrors] = useState({});
    const onClick = () => {
        const body = {
            email: logdata.login,
            password:logdata.password
        }
        fetch('https://react-mipt-course-server.herokuapp.com/auth/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(r => {if (r.status!==200){
                setErrors( {logError:r.message});
                console.log(body);
            }})
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
            <div>
                {errors.logError &&
                <span className='error' style={{color: 'red'}}>{errors.logError}</span>}
            </div>

        </div>
    );
}

export default Login;