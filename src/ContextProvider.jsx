import { createContext, useEffect, useReducer, useState } from "react"
import socialMediaReducer, { initialState } from './Reducers'

// AUTHENTIFICATION CONTEXT
export const AuthContext = createContext()    

export const AuthContextProvider = ({ children }) => {
    const tempToken = JSON.parse(localStorage.getItem("token"))
    const [accessToken, setAccessToken] = useState(tempToken ? tempToken : "")

    useEffect(() => {
        localStorage.setItem("token", JSON.stringify(accessToken))
    }, [accessToken])
    
    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken }}>
            {children}
        </AuthContext.Provider>
    )
}

// USE REDUCER CONTEXT
export const SocialMediaContext = createContext()

export const SocialMediaProvider = ({ children }) => {
    const [state, dispatch] = useReducer(socialMediaReducer, initialState)

    return (
        <SocialMediaContext.Provider value={{ state, dispatch }}>
            {children}
        </SocialMediaContext.Provider>
    )
}

export default SocialMediaProvider