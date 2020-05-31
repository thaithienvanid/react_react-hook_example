import React, { useContext } from 'react'

import {
    setUserToStorage,
    getUserFromStorage,
    removeUserFromStorage
} from "../store/user";

export const initAuthContext = () => {
    let user = getUserFromStorage()
    const setUser = (u) => {
        if (u === null) {
            removeUserFromStorage()
        } else {
            setUserToStorage(u)
        }
        user = u
    }
    return {
        user,
        setUser,
    }
}

export const AuthContext = React.createContext(initAuthContext());

export const useAuthContext = () => {
    const auth = useContext(AuthContext);
      
    return auth;
}
