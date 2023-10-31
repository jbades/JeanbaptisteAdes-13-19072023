import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Menu() {

    const token = useSelector((state) => state.userProfile.token)
    const firsName = useSelector((state) => state.userProfile.user.firstName)
    const lastName = useSelector((state) => state.userProfile.user.lastName)

    if (token) {
        return <nav className="main-nav">        
            <NavLink className="main-nav-item" to="/user">
                <i className="fa fa-user-circle"></i>
                {firsName} {lastName}
            </NavLink>
            <NavLink className="main-nav-item" to="/">
                <i className="fa fa-sign-out"></i>
                Sign Out
            </NavLink>
        </nav>
    } else {
        return <nav className="main-nav">        
            <NavLink className="main-nav-item" to="/signin">
                <i className="fa fa-user-circle"></i>
                Sign In
            </NavLink>
        </nav>
    }

}