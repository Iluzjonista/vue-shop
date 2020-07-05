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
    import Product from './Product.vue'
    import SinglePage from './SinglePage.vue'

    const router = new VueRouter({
        routes: [
            {path: '/', component: Main},
            {path: '/cart', component: Cart},
            {path: '/product/:id', component: Product},
        ]
    })
    export default {
        name: 'app',
        router,
        components: {
            Main,
            Item,
            Product,
            SinglePage,
        },
    }
</script>

<style>
    body {
        background-color: #f0efef;
    }
    .breadcrumb {
        padding: .5rem 0 0 1rem;
        font-size: .75rem;
    }

    .footer-copyright {
        color: #ffffff;
    }
</style>