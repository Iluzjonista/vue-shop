import Vue from 'vue'
import App from './App.vue'
import store from './store'

import Toasted from 'vue-toasted';

Vue.use(Toasted, {
    duration: 1000
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
