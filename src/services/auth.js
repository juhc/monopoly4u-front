import axios from "axios";

export default function signIn(userData) {
    const response = axios.post("#", {
        email: userData.email,
        password: userData.password
    })

    return response
}