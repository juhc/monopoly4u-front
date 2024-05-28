import { io } from "socket.io-client";
import { useAuthStore } from "./stores/auth";
import { URLs } from "./api/urls";


export const socket = io(`${URLs.socket}`, {
    path: "/socketio",
    auth: {
        token: null
    },
    autoConnect: false
});

socket.on("connect", () => {
    console.log('connected')
});

socket.on("disconnect", () => {
    const authStore = useAuthStore();
    socket.emit("test")
});
