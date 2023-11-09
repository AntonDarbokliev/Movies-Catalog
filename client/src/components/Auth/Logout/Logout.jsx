import { useState } from "react"
import { Link, Navigate } from "react-router-dom"

export const Logout = () => {
    const [loggedOut,setLoggedOut] = useState(false)

    return (
        <>
        {loggedOut && (
            <Navigate to='/' replace={true}/>
        )}
        <Link  >Logout</Link>
        </>
    )
}