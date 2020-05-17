import React from "react";
import {Logout} from "../components/Logout";

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