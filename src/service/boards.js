import rest from "./rest";

export const boards = async () => rest.get('/board');
