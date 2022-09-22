import { createApp, h } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import 'mdb-vue-ui-kit/css/mdb.min.css';
import Home from "@/components/Home";
import GameDetails from "@/components/GameDetails";
import App from "@/App.vue";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(fas, far, fab)

const routes = [
    {
        path: '/',
        alias: '/games',
        name: 'home', component: Home
    },
    {
        path: '/games/:id',
        name: 'game-details',
        component: GameDetails,
    },
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes
})

const app = createApp({
    render: () => h(App)
}).component('font-awesome-icon',
    FontAwesomeIcon)

app.use(router)
app.mount('#app')


