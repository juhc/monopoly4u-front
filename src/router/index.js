import { createRouter, createWebHistory } from 'vue-router';
import GameRoomView from "@/views/GameRoomView.vue";
import AuthorizationView from "@/views/AuthorizationView.vue";
import RegistrationUserView from "@/views/RegistrationUserView.vue";
import HomeView from "@/views/HomeView.vue";
import UserProfileView from "@/views/UserProfileView.vue";
import FindGameView from "@/views/FindGameView.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            meta: {
                auth: false
            }
        },
        {
            path: "/user",
            name: "user",
            component: UserProfileView,
            meta: {
                auth: true
            }
        },
        {
            path: '/game-room/:room_id',
            name: 'gameRoom',
            component: GameRoomView,
            meta: {
                auth: true
            }
        },
        {
            path: '/auth',
            name: 'sign-in',
            component: AuthorizationView,
            meta: {
                auth: false
            }
        },
        {
            path: '/sign-up',
            name: 'sign-up',
            component: RegistrationUserView,
            meta: {
                auth: false
            }
        },
        {
            path: '/games',
            name: 'games',
            component: FindGameView,
            meta: {
                auth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    const tokens = JSON.parse(localStorage.getItem('userTokens'));
    let token = null
    if (tokens) {
        token = tokens.access_token;
    }
    if (to.meta.auth && !token) {
        next('/auth');
    } else {
        next();
    }
});

export default router;
