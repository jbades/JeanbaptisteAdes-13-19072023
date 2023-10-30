import { Navigate } from 'react-router-dom'

export default function SignInAuth ({children}) {

    const token = localStorage.getItem("JWT")
    
    if (!token) {
        return children
    } else {
        return <Navigate to="/user" />
    }
}