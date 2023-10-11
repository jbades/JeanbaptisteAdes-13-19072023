import { useState } from 'react'
import { login } from '../../services/api'
import SignInButton from '../signin-button/SignInButton'

export default function CreateSignInForm () {

    // creating & setting default states
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    // catching credential values
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
        if(loginSubmit.status === 200) {
            const token = loginSubmit.data.body.token
            console.log("!!! code 200", loginSubmit, "!!!token:", token)
        } else {
            failurePrompt()
        }
        // if 200
        // dispatch(logingSuccess(response.data))
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