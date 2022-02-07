import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

createApp(App)
    .use(vuetify)
    .mount('#app')

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')