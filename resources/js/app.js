window.Vue = require('vue');

import App from './App.vue'
import router from './router'

// Axios
import axios from 'axios'
window.axios=axios  

// Ant Design Vue
import './plugins/ant-design'

// Helpers
import Auth from './helpers/auth'
Vue.use(Auth)

const app = new Vue({
    el: '#app',
    components: { App },
    router
})