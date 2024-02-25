import axios from "axios";

export function signIn(userData) {
    const response = axios.post("#", {
        email: userData.email,
        password: userData.password
    })

    console.log('signIN')

    return response
}

export function signUp(userData) {
    const response = axios.post("#", {
        email: userData.email,
        username: userData.username,
        password: userData.password
    })

    console.log('signUP')

    return response
}

