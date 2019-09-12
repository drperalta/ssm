import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
    mode: 'history',

    routes: [
        // INDEX
        {
            path: '/',
            name: 'Index',
            component: () => import('../pages/Index.vue'),
            redirect: { name: 'Login' },
            children: [
                {
                    path: '/',
                    name: 'Login',
                    component: () => import('../components/Index/Login.vue')
                },
                {
                    path: '/register',
                    name: 'Register',
                    component: () => import('../components/Index/Register.vue')
                }
            ]
        },
        // MAIN
        {
            path: '/main',
            name: 'Main',
            component: () => import('../pages/Main.vue')
        }
    ]
})

export default router