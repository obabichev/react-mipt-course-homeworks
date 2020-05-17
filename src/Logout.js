import * as React from "react";
import {updateTokens} from "./App";

export class Logout extends React.Component {
    render() {
        return <button onClick={() => {updateTokens('');}}>Logout</button>
    }
}