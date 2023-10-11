import {NavLink} from 'react-router-dom'

export default function Header() {
    return <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
            <img 
                className="main-nav-logo-image" 
                src="/assets/img/argentBankLogo.png" 
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <NavLink className="main-nav-item" to="/signin">
            <i className="fa fa-user-circle"></i>
            Sign In
        </NavLink>
        {/* <a className="main-nav-logo">
            <img 
                className="main-nav-logo-image" 
                src="/assets/img/argentBankLogo.png" 
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </a> */}
        {/* <div>
            <a className="main-nav-item" href="/signin">
                <i className="fa fa-user-circle"></i>
                Sign In
            </a>
        </div> */}
    </nav>
}