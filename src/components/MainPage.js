import React from "react";
import '../App.css';
import { boards } from "../service/boards";
import {Button} from "@material-ui/core";
import {Route} from "react-router-dom";

export class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            boards: [],
            isLoading: false
        }
    }

    render() {
        const {loading} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <p>/jmacgyve</p><a className="App-link" href="https://github.com/jmacgyve" target="_blank" rel="noopener noreferrer">github</a>
                    <div>
                        {!loading ? <Route render={({history}) => (
                            <Button onClick={() => {
                                localStorage.removeItem('AUTH');
                                this.props.auth(null);
                                history.push('/login');
                            }} variant="contained" color="secondary">
                                Log out
                            </Button>
                        )}/> : null}
                    </div>
                </header>
            </div>
        );
    }
}
