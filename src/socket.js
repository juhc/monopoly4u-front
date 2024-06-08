import { io } from "socket.io-client";
import { useAuthStore } from "./stores/auth";
import { URLs } from "./api/urls";
import router from '@/router';


export const socket = io(`${URLs.socket}`, {
    path: "/socketio",
    auth: {
        token: null
    },
    autoConnect: false
});

socket.on("connect", () => {
});

socket.on("disconnect", (reason) => {
    router.go();
});
