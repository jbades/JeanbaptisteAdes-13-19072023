import axios from "axios"

const BASE_URL = "http://localhost:3001/api/v1"

export const login = async (username, password) => {
    try {
        const response = await axios.post(BASE_URL + '/user/login', {
            'email': username, 
            'password': password
        })
        // console.log("login response: ", response)
        return response
    } 
    catch (error) {
        console.log(error)
        return error
    }
}

export const getUserData = async (token) => {
    try {
        const defaultAxiosHeader = axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
        const response = await axios.post(BASE_URL + '/user/profile', defaultAxiosHeader)
        // console.log("getUserData response: ", response)
        return response
    } catch (error) {
        console.error(error)
    }
}

export const updateUserData = async (token) => {
    try {
        console.log(token)
    } catch (error) {
        console.error(error)
    }
}