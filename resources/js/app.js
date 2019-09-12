window.Vue = require('vue');

import App from './pages/App.vue'
import router from './router'

// Ant Design Vue
import './plugins/ant-design'

const app = new Vue({
    el: '#app',
    components: { App },
    router
})