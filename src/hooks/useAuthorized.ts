import {useAuthSession} from "../components/Authorization/context/AuthContext";

export const useAuthorized = (): Boolean => !!useAuthSession().session