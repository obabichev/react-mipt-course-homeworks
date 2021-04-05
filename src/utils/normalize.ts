import {Normalized} from "../types/types";

export const normalize = <K extends string, T extends { [key in K]: string | number}>(
    list: T[], key: K): Normalized<T> => {
    return list.reduce((container: Normalized<T>, item: T) => {
        return {
            ...container,
            [item[key]]: item
        };
    }, {} as Normalized<T>);
}