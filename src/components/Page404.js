import React from "react";
import '../App.css';

export class Page404 extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Oops... 404 /we dont have this page</p>
                    <a className="App-link" href="/">Go Home</a>
                </header>
            </div>
        );
    }
}
