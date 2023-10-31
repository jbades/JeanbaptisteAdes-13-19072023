import { login, getUserData } from '../../services/api'
import { setToken, setFirstName, setIdentified, setLastName } from '../../features/userProfile'
import { useDispatch, useSelector } from "react-redux";
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

    const handleSubmit = async (event) => {
        event.preventDefault()
        const loginId = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        const rememberMe = document.querySelector("#remember-me").checked

        const loginSubmit = await login(loginId, password)
        if(loginSubmit.status === 200) // login success
        {
            const token = loginSubmit.data.body.token

            // fetching user data
            const tokenSubmit = await getUserData(token)

            // updating store
            dispatch(setToken(token))
            dispatch(setFirstName(tokenSubmit.data.body.firstName))
            dispatch(setLastName(tokenSubmit.data.body.lastName))
            dispatch(setIdentified(true))

            // show user page
            navigate("/user")
            
        } else // login failure 
        {
            loginFailurePrompt()
        }
    }

    const token = useSelector((state) => state.userProfile.token)

    if (token) {
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