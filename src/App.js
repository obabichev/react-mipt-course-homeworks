import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import {Dashboard} from "./Dashboard";
import Register from "./Register";
import Login from "./Login"
import {createAuthProvider} from "react-token-auth";

// export const [useAuth, authFetch, login, logout] =
// createAuthProvider({
//     accessTokenKey: 'accessToken',
// });
export const [useAuth, authFetch, login, logout] =
createAuthProvider({
    accessTokenKey: 'accessToken',
    refreshTokenKey: 'refreshToken'
});


function App() {
    const auth = useAuth();
    return (
        <div>
            <h2>
                My App
            </h2>
            <Router>
                {/*{!auth && <Switch>*/}
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Redirect to="/login"/>
                {/*</Switch>}*/}
                {/*{!!auth && <Switch>*/}
                {/*    <Route exact path="/" component={Dashboard}/>*/}
                {/*    <Redirect to="/"/>*/}
                {/*</Switch>}*/}
            </Router>
        </div>
    );
}

export default App;
