import React from "react";
import '../App.css';
export class Welcome extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Welcome to Goldie App /made by jmacgyve</p>

                    <a className="App-link" href="/login">Log in</a>
                    <a className="App-link" href="/register">Sign up</a>
                </header>
            </div>
        );
    }
}
