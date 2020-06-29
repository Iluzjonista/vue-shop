<template>
    <div id="app">
        <router-view/>
        <footer class="bg-dark mt-5">
            <div class="container footer-copyright text-center py-3">© 2020 Copyright: Adam Uklański s12708
            </div>
        </footer>
    </div>

</template>

<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import Main from './Main.vue'
    import Cart from './Cart.vue'
    import Item from './Item.vue'
    import ShoppingCart from './ShoppingCart.vue'

    const router = new VueRouter({
        routes: [
            {path: '/', component: Main},
            {path: '/cart', component: Cart},
        ]
    })
    export default {
        name: 'app',
        router,
        components: {
            Main,
            Item,
            ShoppingCart
        },
    }
</script>

<style>
    body {
        background-color: #f0efef;
    }

    .footer-copyright {
        color: #ffffff;
    }
</style>