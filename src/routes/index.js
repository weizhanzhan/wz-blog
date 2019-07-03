import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home')
        },
        {
            path: '/blog/:id',
            name: 'blog',
            component: () => import('../views/Blog')
        }
    ],
    mode: 'history'
})
export default router
