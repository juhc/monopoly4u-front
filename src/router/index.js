import { createRouter, createWebHistory } from 'vue-router'
import GameRoomView from "@/views/GameRoomView.vue"
import AuthorizationView from "@/views/AuthorizationView.vue"
import RegistrationUserView from "@/views/RegistrationUserView.vue"
import HomeView from "@/views/HomeView.vue"
import UserProfileView from "@/views/UserProfileView.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/user",
            name: "user",
            component: UserProfileView
        },
        {
            path: '/game-room',
            name: 'gameRoom',
            component: GameRoomView
        },
        {
            path: '/auth',
            name: 'sign-in',
            component: AuthorizationView
        },
        {
            path: '/sign-up',
            name: 'sign-up',
            component: RegistrationUserView
        }
    ]
})

export default router
