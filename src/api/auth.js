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
    const authStore = useAuthStore();
    await authAPIInstance.post("/auth/sign-in", { ...userData }).then(async (response) => {
        const data = response.data;
        const token = data.token;
        authStore.isAuthError = false;
        authStore.isAuth = true;
        authStore.userInfo.token = token;
        localStorage.setItem('userTokens', JSON.stringify({
            access_token: token
        }));
    }).catch((error) => {
        if (error.status === 401) {
            authStore.authErrorMessage = 'Неправильный логин или пароль';
        }
        else {
            authStore.authErrorMessage = 'Сервер недоступен';
        }
        authStore.isAuthError = true;
    })
    socket.auth.token = authStore.userInfo.token;
    socket.connect();
}

const signUp = async (userData) => {
    await authAPIInstance.post("/auth/sign-up", { ...userData }).then((response) => {
        const authStore = useAuthStore();
        const data = response.data;
        authStore.isAuthError = false;
    }).catch((error) => {
        authStore.authErrorMessage = "Пользователь с таким именем уже зарегистрирован!";
        authStore.isAuthError = true;
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