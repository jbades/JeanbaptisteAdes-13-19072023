import { login, getUserData } from '../../services/api'
import { storeFirstName, storeLastName, storeRememberStatus } from '../../features/logIn'
import SignInButton from '../signin-button/SignInButton'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CreateSignInForm () {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    // create login-failure message
    const loginFailurePrompt = () => {
        const loginFailure = document.createElement("div")
        loginFailure.className = "login-failure"
        loginFailure.innerText = "Incorrect login or password"

        const form = document.getElementById("login-form")
        form.appendChild(loginFailure)
    }

    // submitting credentials to backend
    const handleSubmit = async (event) => {
        event.preventDefault()
        const loginId = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        const rememberMe = document.querySelector("#remember-me").checked

        const loginSubmit = await login(loginId, password)
        if(loginSubmit.status === 200) // login success
        {
            const token = loginSubmit.data.body.token

            // storing token locally for later use
            if (!rememberMe) {
                sessionStorage.setItem("token", token)
            }
            localStorage.setItem("token", token)

            // fetching user data
            const tokenSubmit = await getUserData(token)
            console.log(tokenSubmit)

            // updating store
            dispatch(storeFirstName(loginId))
            dispatch(storeLastName(password))
            dispatch(storeRememberStatus(rememberMe))

            // show user page
            navigate("/user")
            
        } else // login failure 
        {
            loginFailurePrompt()
        }
    }
    
    return (
        <form id="login-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label>Username</label>
                <input type="text" id="username"/>
            </div>
            <div className="input-wrapper">
                <label>Password</label>
                <input type="password" id="password"/>
            </div>
            <div className="input-remember">
                <label>Remember me</label>
                <input type="checkbox" id="remember-me"/>
            </div>
           <SignInButton/>
        </form>
    )
}