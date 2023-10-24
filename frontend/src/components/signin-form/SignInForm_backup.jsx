import { useState } from 'react'
import { login } from '../../services/api'
import SignInButton from '../signin-button/SignInButton'

export default function CreateSignInForm () {

    // creating & setting default states
    const initialState = {
        user: {
            loginId: "", 
            password: "",
            rememberMe: false
        },
        identified: false
    }

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    const usernameUpdate = (event) => {
        setUsername(event.target.value)
    }    
    const passwordUpdate = (event) => {
        setPassword(event.target.value)
    }    
    const rememberMeUpdate = (event) => {
        setRememberMe(event.target.checked)
    }

    // create login-failure message
    const failurePrompt = () => {
        const loginFailure = document.createElement("div")
        loginFailure.className = "login-failure"
        loginFailure.innerText = "Incorrect login or password"

        const form = document.getElementById("login-form")
        form.appendChild(loginFailure)
    }
    
    // submitting credentials to backend
    const handleSubmit = async (event) => {
        event.preventDefault()
        const loginSubmit = await login(username, password)
        if(loginSubmit.status === 200 && rememberMe) {
            const token = loginSubmit.data.body.token
            localStorage.setItem("token", token)
            
            console.log("!!! code 200", loginSubmit, "!!!localStorage/token:", localStorage.getItem("token"))
        } else if (loginSubmit.status === 200 && !rememberMe) {
            const token = loginSubmit.data.body.token
            sessionStorage.setItem("token", token)
            
            console.log("!!! code 200", loginSubmit, "!!!sessionStorage/token:", sessionStorage.getItem("token"))
        } else {
            failurePrompt()
        }

        console.log("réponse du serveur : ", loginSubmit.status)
        return loginSubmit
    }
    
    return (
        <form id="login-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label>Username</label>
                <input type="text" id="username" onChange={usernameUpdate} />
            </div>
            <div className="input-wrapper">
                <label>Password</label>
                <input type="password" id="password" onChange={passwordUpdate} />
            </div>
            <div className="input-remember">
                <label>Remember me</label>
                <input type="checkbox" id="remember-me" onChange={rememberMeUpdate} />
            </div>
           <SignInButton/>
        </form>
    )
}