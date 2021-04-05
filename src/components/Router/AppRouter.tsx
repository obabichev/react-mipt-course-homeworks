import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Boards} from "../Boards/Boards";
import {Tasks} from "../Tasks/Tasks";
import React from "react";
import {AppHeader} from "../Header/AppHeader";
import {useAuthorized} from "../../hooks/useAuthorized";
import {Login} from "../Authorization/Login/Login";
import {Register} from "../Authorization/Register/Register";

export const AppRouter = () => {
    const authorized = useAuthorized()

    return <Router>
            {authorized && <AppHeader/>}
            {authorized ?
                    <Switch>
                        <Route exact path="/boards" component={Boards}/>
                        <Route exact path="/board/:id" component={Tasks}/>
                        <Redirect to="/boards"/>
                    </Switch>
                 :
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Redirect to="/login"/>
                </Switch>
            }
    </Router>
}