import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { getUserProfile } from "@/api/auth";
import { useRouter } from "vue-router";
import { socket } from "@/socket";


export const useAuthStore = defineStore('auth', () => {
    const router = useRouter();
    const userInfo = reactive({
        email: '',
        token: '',
        id: '',
        username: ''
    });
    const isAuthError = ref(false);
    const authErrorMessage = ref('');
    const isAuth = ref(false);

    const logout = () => {
        userInfo.email = '';
        userInfo.token = '';
        userInfo.id = '';
        userInfo.username = '';
        isAuth.value = false;
        localStorage.clear();
        socket.disconnect();
        router.push({name: 'home'});
    }

    const checkUserAuth = async () => {
        await getUserProfile();
        if (isAuth) {
            socket.auth.token = userInfo.token;
            socket.connect();
        }
    }

    return { logout, userInfo, isAuthError, authErrorMessage, isAuth, checkUserAuth }
})