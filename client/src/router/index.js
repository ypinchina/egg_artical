import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)
const router = new vueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/detail',
            component: () => import('../views/Detail.vue')
        },
        {
            path: '/add',
            component: () => import('../views/Add.vue')
        }
    ]
})
export default router