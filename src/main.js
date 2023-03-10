import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router/index.js'
import {store} from './store/index.js'
import BootstrapVue3 from 'bootstrap-vue-3'
//css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App);
    app
    .use(router)
    .use(store)
    .use(BootstrapVue3)
    .mount('#app')