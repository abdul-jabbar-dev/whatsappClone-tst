import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'



export const UserContext = createContext({})


export default function AuthProvider({ children }) {
    const [user, setUser] = useState({})


    useEffect(() => {
        const u = localStorage.getItem('user')
        if (u) {
            setUser(JSON.parse(u))
        }
        return () => {
            clearUser()
        }

    }, []);

    const clearUser = () => {
        localStorage.removeItem('user')
        setUser({})
    }


    return (
        <UserContext.Provider value={{ user, clearUser }}>
            {children}
        </UserContext.Provider>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.any
}

