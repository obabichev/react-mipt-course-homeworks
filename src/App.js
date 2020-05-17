import React from 'react';
import {Login} from "./Login";
import {Register} from "./Register";
import {Dashboard} from "./Dashboard";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"

export const loginPath = '/login';
export const registerPath = '/register';

export const updateTokens = (tokens) => {
    localStorage.setItem('auth', tokens);
};

function App() {
    const auth = localStorage.getItem('auth');

    return (
        <div>
            <Router>
                {!auth && <Switch>
                    <Route path={loginPath} component={Login}/>
                    <Route path={registerPath} component={Register}/>
                    <Redirect to={loginPath}/>
                </Switch>}
                {!!auth && <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Redirect to="/"/>
                </Switch>}
            </Router>
        </div>
    );
}

export default App;
