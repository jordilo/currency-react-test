import { createContext } from "react";

export type User = {
    isLogged: false;
} | {
    isLogged: true;
    name: string;
    email: string;
}


export const UserContext = createContext<User>({ isLogged: false });