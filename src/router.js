import Vue from 'vue'
import detailOrgnization from "./components/layout/TheDetailContentOrgnization.vue"

import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes:
    [
        {
            path:'/Orgnization',
            name:'Orgnization',
            component: detailOrgnization
        }
    ]
})