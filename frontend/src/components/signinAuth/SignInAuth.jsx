import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function SignInAuth ({children}) {

    const token = useSelector((state) => state.userProfile.token)
    console.log(token)
    
    return !token ? children : <Navigate to="/user" />
}