window.Vue = require('vue');

import App from './pages/App.vue'
import router from './router'

const app = new Vue({
    el: '#app',
    components: { App },
    router
})