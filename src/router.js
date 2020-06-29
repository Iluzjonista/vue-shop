// router.js
import Vue from 'vue';
import Router from 'vue-router';
import Main from './Main.vue';
import Cart from './Cart.vue';

Vue.use(Router);

const RouterVue = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Main
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        }
    ]
});

export default RouterVue;