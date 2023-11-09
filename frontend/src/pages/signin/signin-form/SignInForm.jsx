import { useState } from 'react'
import { login, getUserData } from '../../../services/api'
import { setToken, setFirstName, setLastName, setRememberMe, setIdentified } from '../../../features/userProfile'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function SignInForm () {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // setting up local states
    const [loginId, setLoginId] = useState("")
    const [password, setPassword] = useState("")

    // setting up failure-message display-state to none by default
    const [failureDisplayState, setFailureDisplayState]  = useState('none')

    // setting up global state on submit
    const handleSubmit = async (e) => {
        e.preventDefault()

        const loginSubmit = await login(loginId, password)
        if(loginSubmit.status === 200) // login success
        {
            const token = loginSubmit.data.body.token

            // fetching user data
            const tokenSubmit = await getUserData(token)

            // updating global state
            dispatch(setToken(token))
            dispatch(setFirstName(tokenSubmit.data.body.firstName))
            dispatch(setLastName(tokenSubmit.data.body.lastName))
            dispatch(setIdentified(true))

            // redirecting towards user page
            navigate("/user")
            
        } else // displaying failure message 
        {
            setFailureDisplayState("block")
        }
    }

    // redirecting if not identified
    const identified = useSelector((state) => state.userProfile.identified)

    if (identified) {
        navigate("/user")
    }
    
    // rendering form
    return (
        <form id="login-form" onSubmit={handleSubmit} onInput={() => setFailureDisplayState("none")}>
            <div className="input-wrapper">
                <label>Username</label>
                <input type="text" id="username" onInput={(e) => setLoginId(e.target.value)}/>
            </div>
            <div className="input-wrapper">
                <label>Password</label>
                <input type="password" id="password" onInput={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-remember">
                <label>Remember me</label>
                <input type="checkbox" id="remember-me" onClick={(e) => {dispatch(setRememberMe(e.target.checked))}}/>
            </div>
           <button className="sign-in-button">Sign In</button>
           <div className="login-failure" style={{display: failureDisplayState}}>Incorrect login or password</div>
        </form>
    )
}