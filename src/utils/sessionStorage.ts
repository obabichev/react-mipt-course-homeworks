import {Maybe, Tokens} from "../types/types";

const SESSION_LOCAl_STORAGE = 'mini-jira-session';

export const getSessionFromLocalStorage = (): Maybe<Tokens> => {
    const rowData = localStorage.getItem(SESSION_LOCAl_STORAGE);
    if (!rowData) {
        return null
    }

    try {
        const tokens = JSON.parse(rowData);
        if (!tokens.accessToken || !tokens.refreshToken) {
           return null;
        }
        return tokens;
    } catch (e) {
        return null;
    }
}

export const setSessionToLocalStorage = (tokens: Maybe<Tokens>) => {
    if (!tokens) {
        localStorage.removeItem(SESSION_LOCAl_STORAGE);
    } else {
        localStorage.setItem(SESSION_LOCAl_STORAGE, JSON.stringify(tokens));
    }
}