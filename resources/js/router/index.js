import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import store from '../store'

let router = new VueRouter({
    mode: 'history',

    routes: [
        // INDEX
        {
            path: '/',
            name: 'Index',
            component: () => import('../pages/Index.vue'),
            redirect: { name: 'Login' },
            meta: {forUnauthenticated: true},
            children: [
                {
                    path: '/',
                    name: 'Login',
                    component: () => import('../components/Index/Login.vue'),
                    meta: {forUnauthenticated: true}
                },
                {
                    path: '/register',
                    name: 'Register',
                    component: () => import('../components/Index/Register.vue'),
                    meta: {forUnauthenticated: true}
                }
            ]
        },
        // MAIN
        {
            path: '/',
            name: 'Main',
            component: () => import('../pages/Main.vue'),
            meta: {forAuthenticated: true}
        }
    ]
})

router.beforeEach((to,from,next) => {
    if(to.matched.some(route => route.meta.forAuthenticated) && !store.state.loggedIn){
      next({name: 'Login'})
      return
    }
    if(to.matched.some(route => route.meta.forUnauthenticated) && store.state.loggedIn){
        next({name: 'Main'})
        return
    }
    next()
  })

export default router