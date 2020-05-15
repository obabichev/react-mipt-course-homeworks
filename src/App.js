import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import {Login} from "../src/components/Login";
import {Register} from "./components/Register";
import {Welcome} from "./components/Welcome";
import {Page404} from "./components/Page404";
import {MainPage} from "./components/MainPage";

const withAuth = (Component, auth) => {
    return (props) => {
        return <Component {...props} auth={auth}/>
    };
};

class App extends React.Component {
    constructor(props) {
        super(props);

        const tokens = localStorage.getItem('AUTH');

        this.state = {
            tokens: tokens || null
        };
    }

    auth = (tokens) => {
        this.setState({tokens: tokens})
    }

  render() {
    const {tokens} = this.state;
    return (
        <div className={"App"}>
              <Router>
                 {!tokens &&<Switch>
                      <Route exact={true} path="/" component={Welcome}/>
                      <Route path="/register" component={withAuth(Register, this.auth)}/>
                      <Route path="/login" component={withAuth(Login, this.auth)}/>
                      <Redirect to="/"/>
                      <Route component={Page404}/>
                  </Switch>}
                  {!!tokens &&<Switch>
                      <Route path="/boards" component={withAuth(MainPage, this.auth)}/>
                      <Redirect to="/boards"/>
                  </Switch>}
              </Router>
        </div>
    );
  }
}
export default App;
