// import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import {createRouter, RouteRecordRaw, createMemoryHistory} from 'vue-router'


const routers: Array<RouteRecordRaw> = [
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/login/login')
    }
]
const asyncRoutes: Array<RouteRecordRaw> = [
    {
        name: 'home',
        path: '/home',
        components: {
            home: () => import('@/views/home/home')
        }
    },
    {
        name: 'profile',
        path: '/profile',
        components: {
            profile: () => import('@/views/profile/profile')
        }
    },
    {
        name: 'profile',
        path: '/profile',
        components: {
            profile: () => import('@/views/profile/profile')
        }
    },
    {
        name: 'profile',
        path: '/profile',
        components: {
            profile: () => import('@/views/profile/profile')
        }
    },
]
const routes: Array<RouteRecordRaw> = [...routers, ...asyncRoutes]

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createMemoryHistory(),
    routes
})

export default router
