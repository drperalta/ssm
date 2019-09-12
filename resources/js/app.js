window.Vue = require('vue');

import App from './App.vue'
import router from './router'

// Ant Design Vue
import './plugins/ant-design'
import '../sass/app.scss'

const app = new Vue({
    el: '#app',
    components: { App },
    router
})