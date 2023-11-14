import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext.js"

export const Logout = () => {
    const [loggedOut,setLoggedOut] = useState(false)
    const {onLogoutSubmit} = useContext(AuthContext)

    return (
        <>
        {loggedOut && (
            <Navigate to='/' replace={true}/>
        )}
        <Link onClick={onLogoutSubmit}>Logout</Link>
        </>
    )
}