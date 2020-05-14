import React from 'react';
import {Login} from "./Login";
import {Register} from "./Register";
import {Dashboard} from "./Dashboard";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"

function App() {
    const auth = localStorage.getItem("auth");

    return (
        <div>
            <Router>
                {!auth && <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Redirect to="/login"/>
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
