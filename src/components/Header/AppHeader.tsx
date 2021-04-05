import React from 'react';
import {Link, useHistory} from "react-router-dom";
import {useAuthorized} from "../../hooks/useAuthorized";
import {useAuthSession} from "../Authorization/context/AuthContext";


export const AppHeader = () => {
    const authorized = useAuthorized();
    const {setSession} = useAuthSession();

    return <div style={{display: 'flex', flexDirection: 'row', margin: 24}}>
        <div style={{flex: 1}}>
            {authorized && <Link to="/auth" onClick={() => {
                setSession(null)
            }}>Выйти</Link>}
        </div>
    </div>
}