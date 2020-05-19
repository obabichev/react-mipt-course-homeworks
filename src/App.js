import React from 'react';
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Dashboard} from "./pages/Dashboard";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"
import {createAuthProvider} from "react-token-auth";

export const loginPath = '/login';
export const registerPath = '/register';
export const [useAuth, authFetch, login, logout] = createAuthProvider({
    accessTokenKey: 'accessToken',
    onUpdateToken: (token) => fetch('/auth/update-tokens', {
        method: 'POST',
        body: token.refreshToken
    })
        .then(r => r.json())
});

function App() {
    const[isLogged] = useAuth();

    return (
        <div>
            <Router>
                {!isLogged && <Switch>
                    <Route path={loginPath} component={Login}/>
                    <Route path={registerPath} component={Register}/>
                    <Redirect to={loginPath}/>
                </Switch>}
                {!!isLogged && <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Redirect to="/"/>
                </Switch>}
            </Router>
        </div>
    );
}

export default App;
