window.Vue = require('vue');

import App from './App.vue'
import router from './router'
import store from './store'

// Axios
import axios from 'axios'
axios.interceptors.request.use (
    function (config) {
        const token = localStorage.getItem('token');
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    }
)
window.axios=axios  

// Ant Design Vue
import './plugins/ant-design'

// Helpers
import Auth from './helpers/auth'
Vue.use(Auth)
import User from './helpers/user'
Vue.use(User)

const app = new Vue({
    el: '#app',
    components: { App },
    router,store
})