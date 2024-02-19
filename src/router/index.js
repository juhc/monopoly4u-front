import { createRouter, createWebHistory } from 'vue-router'
import GameRoomView from "@/views/GameRoomView.vue"
import LoginView from "@/views/LoginView.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/game-room',
            name: 'gameRoom',
            component: GameRoomView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        }
    ]
})

export default router
