import { Navigate } from 'react-router-dom'

export default function UserAuth ({children}) {

    const token = localStorage.getItem("JWT")
    
    if (token) {
        return children
    } else {
        return <Navigate to="/signin" />
    }
}