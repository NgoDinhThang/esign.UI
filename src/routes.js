import TheDetailOrgnization from "./components/view/DetailOrgnization.vue"

import TheDetailPersonal from "./components/view/DetailPersonal.vue"
import TheDetailPerOr from "./components/view/DetailPersonalOrgnization.vue"

import Home from "./components/view/Home.vue"
export default [{
        path: '/detail-orgnization',
        component: TheDetailOrgnization,
        query: { id:'id' }

    },
    {
        path: '/',
        component: Home

    },
    {
        path: '/detail-personal',
        component: TheDetailPersonal,
        query: { id:'id' }

    },
    {
        path: '/detail-personal-orgnization',
        component: TheDetailPerOr,
        query: { id:'id' }

    },
]