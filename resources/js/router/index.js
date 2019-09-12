import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
    mode: 'history',

    routes: [
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
        }
    ]
})

export default router