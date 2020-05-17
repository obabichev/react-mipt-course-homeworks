import React from "react";
import {Logout} from "./Logout";

export class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div>Dashboard</div>
                <Logout/>
            </div>
        );
    }
}