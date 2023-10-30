import {NavLink} from 'react-router-dom'

export default function Menu() {

    const token = localStorage.getItem("JWT")

    if (token) {
        return <nav className="main-nav">        
            <NavLink className="main-nav-item" to="#">
                <i className="fa fa-user-circle"></i>
                Prénom
            </NavLink>
            <NavLink className="main-nav-item" to="/signin">
                <i className="fa fa-sign-out"></i>
                Sign Out
            </NavLink>
        </nav>
    }

    return <nav className="main-nav">        
        <NavLink className="main-nav-item" to="/signin">
            <i className="fa fa-user-circle"></i>
            Sign In
        </NavLink>
    </nav>
}