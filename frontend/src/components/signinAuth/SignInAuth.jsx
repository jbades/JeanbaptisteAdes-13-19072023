import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function SignInAuth ({children}) {

    const identified = useSelector((state) => state.userProfile.identified)
    
    return !identified ? children : <Navigate to="/user" />
}