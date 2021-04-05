import axios, {AxiosResponse} from 'axios';
import {LoginDto, RegisterDto, Tokens} from "../types/types";


export const register = (body: RegisterDto) => (): Promise<AxiosResponse<Tokens>> => {
    return axios.post("/api/auth/register", body)
}

export const login = (body: LoginDto) => (): Promise<AxiosResponse<Tokens>> => {
    return axios.post("/api/auth/login", body)
}