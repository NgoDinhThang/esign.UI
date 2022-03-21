import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routers from './routes.js'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueRouter, VueAxios, axios)
const router = new VueRouter({
    routes: routers,
    mode: 'history'
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')