import axios from "axios"

const BASE_URL = "http://localhost:3001/api/v1"

// submitting credentials to identification-endpoint
export const login = async (username, password) => {
    try {
        // setting credentials object to be submitted
        const axiosConfig = {
            'email': username, 
            'password': password
        }
        // axios query
        const response = await axios.post(BASE_URL + '/user/login', axiosConfig)
        return response
    } 
    catch (error) {
        console.log(error)
        return error
    }
}

// submitting user-token to user-data-endpoint
export const getUserData = async (token) => {
    try {
        // setting headers and content-type objects for axios query
        const axiosConfig = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
        // axios query
        const response = await axios.post(BASE_URL + '/user/profile', {}, axiosConfig)
        return response
    } catch (error) {
        console.error('Error fetching user data:', error.response ? error.response.data : error.message)
        throw error
    }
}

// submitting new names to user-data-endpoint
export const updateUserData = async (token, firstName, lastName) => {
    try {
        // setting headers and content-type objects for axios query
        const axiosConfig = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              }
        }
        // setting new-data object
        const data = {
            firstName: firstName,
            lastName: lastName
        }
        // axios query
        const response = await axios.put(BASE_URL + '/user/profile', data, axiosConfig)
        return response
    } catch (error) {
        console.error(error)
    }
}