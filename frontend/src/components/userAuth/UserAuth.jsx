import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function UserAuth ({children}) {

    const identified = useSelector((state) => state.userProfile.identified)
    
    // checking  user-identification before rendering children
    return identified ? children : <Navigate to="/signin" />
}