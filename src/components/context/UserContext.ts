import { createContext } from "react"

export type User = {name: string, role: string}

export type UserContextType = {user: User, login: (user: User) => void, logout : () => void}

export const UserContext = createContext<UserContextType>(
    {user : {name : "", role : ""},
    login : () => {},
    logout: () => {}
    }
);