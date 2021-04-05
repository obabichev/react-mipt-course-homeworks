export type Maybe<T> = T | null

export type Fetcher<T> = () => Promise<T>

export type Normalized<T> = {[key in string]: T}

export type Icon = {
    key: string;
    value: string;
}

export type RegisterDto = {
    name: string,
    email: string,
    password: string
}

export type LoginDto = {
    email: string,
    password: string
}

export type Tokens = {
    accessToken: string,
    refreshToken: string
}

export type Owner = {
    name: string;
}

export type Category = {
    value: string;
}

export type TaskType = {
    _id: string;
    title: string;
    key: string;
    subtasks: string[];
    parent?: string;
}

export type BoardType = {
    _id: string;
    title: string;
    key: string;
    icon?: Icon;
    owner: Owner;
    category: Category;
    tasks: TaskType[];
}