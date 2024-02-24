import { createRouter, createWebHistory } from 'vue-router'
import GameRoomView from "@/views/GameRoomView.vue"
import AuthorizationView from "@/views/AuthorizationView.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/game-room',
            name: 'gameRoom',
            component: GameRoomView
        },
        {
            path: '/auth',
            name: 'login',
            component: AuthorizationView
        }
    ]
})

export default router
