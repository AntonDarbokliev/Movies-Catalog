import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"

export const Logout = () => {
    const [loggedOut,_] = useState(false)
    const {onLogoutSubmit} = useContext(AuthContext)

    return (
        <>
        {loggedOut && (
            <Navigate to='/' replace={true}/>
        )}
        <a style={{cursor:'pointer'}} onClick={onLogoutSubmit}>Logout</a>
        </>
    )
}