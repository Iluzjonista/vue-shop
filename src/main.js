import Vue from 'vue'
import App from './App.vue'
import store from './store'

import Toasted from 'vue-toasted';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Toasted, {
    duration: 1000
})

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
