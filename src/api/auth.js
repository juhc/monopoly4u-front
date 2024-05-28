import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import { socket } from "@/socket";
import { URLs } from "./urls";

const authAPIInstance = axios.create({
    baseURL: `${URLs.auth}/api`
})

authAPIInstance.interceptors.request.use((config) => {
    if (localStorage.getItem('userTokens')) {
        config.headers.Authorization = `${JSON.parse(localStorage.getItem('userTokens')).access_token}`;
    }
    return config;
})

const signIn = async (userData) => {
    await authAPIInstance.post("/auth/sign-in", { ...userData }).then((response) => {
        const authStore = useAuthStore();
        const data = response.data;
        if (data.type == 'error') {
            authStore.authErrorMessage = 'Неправильный логин или пароль';
            authStore.isAuthError = true;
        } else {
            const token = data.token;
            authStore.isAuthError = false;
            authStore.isAuth = true;
            authStore.userInfo.token = token;
            localStorage.setItem('userTokens', JSON.stringify({
                access_token: token
            }));
            socket.auth.token = token;
            socket.connect();
        }
    })
}

const signUp = async (userData) => {
    await authAPIInstance.post("/auth/sign-up", { ...userData }).then((response) => {
        const authStore = useAuthStore();
        const data = response.data;
        if (data.type == "error") {
            authStore.authErrorMessage = "Пользователь с таким именем уже зарегистрирован!";
            authStore.isAuthError = true;
        }
        else {
            authStore.isAuthError = false;
        }
    }).catch((error) => {
        console.log(error)
    })
}

const getUserProfile = async () => {
    const authStore = useAuthStore();
    await authAPIInstance.get("/players/profile").then((response) => {
        const data = response.data;
        authStore.userInfo.username = data.nickname;
        authStore.userInfo.id = data.id;
        authStore.userInfo.email = data.email;
        authStore.userInfo.token = JSON.parse(localStorage.getItem("userTokens")).access_token
        authStore.isAuth = true
    }).catch((error) => {
        authStore.logout();
    })
}

export { signIn, signUp, getUserProfile }