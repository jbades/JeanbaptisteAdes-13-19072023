import axios from "axios"

const BASE_URL = "http://localhost:3001/api/v1"

export const login = async (username, password) => {
    try {
        const response = await axios.post(BASE_URL + '/user/login', {
            'email': username, 
            'password': password
        })
        return response
    } 
    catch (error) {
        console.log(error)
        return error
    }
}