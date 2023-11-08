import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../features/userProfile'

export default function Menu() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const identified = useSelector((state) => state.userProfile.identified)
    // const token = useSelector((state) => state.userProfile.token)
    const firsName = useSelector((state) => state.userProfile.user.firstName)
    const lastName = useSelector((state) => state.userProfile.user.lastName)

    const handleSignOut = (event) => {

        event.preventDefault()

        dispatch(logout())

        navigate("/signin") // pourquoi ça ne marche pas ?
    }
    
    if (identified) {
        return <nav className="main-nav">        
            <NavLink className="main-nav-item" to="/user">
                <i className="fa fa-user-circle"></i>
                {firsName} {lastName}
            </NavLink>
            <NavLink className="main-nav-item" to="/" onClick={handleSignOut}>
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