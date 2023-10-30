import { login, getUserData } from '../../services/api'
import { storeFirstName, storeIdentified, storeLastName } from '../../features/logIn'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export default function SignInForm () {

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
        console.log(event)
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
                sessionStorage.setItem("JWT", token)
            } else {
                localStorage.setItem("JWT", token)
            }

            // fetching user data
            const tokenSubmit = await getUserData(token)
            console.log(tokenSubmit.data.body)

            // updating store
            dispatch(storeFirstName(tokenSubmit.data.body.firstName))
            dispatch(storeLastName(tokenSubmit.data.body.lastName))
            dispatch(storeIdentified(true))

            // show user page
            navigate("/user")
            console.log("!!! redirection vers /user")
            
        } else // login failure 
        {
            loginFailurePrompt()
        }
    }

    const token = localStorage.getItem("JWT")

    if (token) {
        console.log("!!! Le token est présent", token)
        navigate("/user")
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
           <button className="sign-in-button">Sign In</button>
        </form>
    )
}