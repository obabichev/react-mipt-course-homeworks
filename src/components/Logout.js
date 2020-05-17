import * as React from "react";
import {logout} from "../App";

export class Logout extends React.Component {
    render() {
        return <button onClick={logout}>Logout</button>
    }
}