import React, {useContext, useState} from "react";
import {Maybe, Tokens} from "../../../types/types";
import {getSessionFromLocalStorage, setSessionToLocalStorage} from "../../../utils/sessionStorage";

interface AuthContextData {
    session: Maybe<Tokens>
    setSession: (session: Maybe<Tokens>) => void
}

const AuthContext = React.createContext<AuthContextData>({
    session: null,
    setSession: () => null
});

export const useAuthSession = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider: React.FunctionComponent = ({children}) => {
    const [session, setSession] = useState<Maybe<Tokens>>(() => getSessionFromLocalStorage())

    const onChangeSession = (tokens: Maybe<Tokens>) => {
        setSessionToLocalStorage(tokens)
        setSession(session)
    }

    return <AuthContext.Provider value={{session, setSession: onChangeSession }}>
        {children}
    </AuthContext.Provider>
}