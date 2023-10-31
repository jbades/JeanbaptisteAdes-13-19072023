import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function UserAuth ({children}) {

    const token = useSelector((state) => state.userProfile.token)
    console.log("!!! UserAuth - token : ", token)
    
    return token ? children : <Navigate to="/signin" />
}