import {NavLink} from 'react-router-dom'
import Menu from './menu/Menu'

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
        <Menu />    
    </nav>
}