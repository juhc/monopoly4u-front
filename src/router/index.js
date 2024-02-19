import { createRouter, createWebHistory } from 'vue-router'
import HelloView from "@/views/HelloView.vue"
import TestView from "@/views/TestView.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/test',
            name: 'test',
            component: TestView
        },
        {
            path: "/",
            name: 'hello',
            component: HelloView
        }
    ]
})

export default router
