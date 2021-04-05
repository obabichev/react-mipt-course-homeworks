import {BoardType, Fetcher} from "../types/types";
import axios from "axios";

export const getBoards = (limit: number, offset: number): Fetcher<BoardType[]> => () => {
    return axios.get(`/api/board?limit=${limit}&offset=${offset}`)
        .then(response => response.data)
}

export const getBoard = (id: string): Fetcher<BoardType> => () => {
    return axios.get(`/api/board/${id}`)
        .then(response => response.data)
}