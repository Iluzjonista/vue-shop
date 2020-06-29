<template>
    <main>
        <header class="navbar navbar-expand-lg navbar-light bg-light fixed-top"
                style="box-shadow: 0 0 2px #888888;">
            <div class="container">
                <a class="navbar-brand" href="/">Vue online-shop</a>
                <span class="app-bar-divider"></span>

                <router-link :to="'/'">
                    <div class="btn btn-light">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tags-fill" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M3 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 7.586 1H3zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                            <path d="M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                        </svg>
                        Products
                    </div>
                </router-link>
            </div>
        </header>
        <div class='main-div--cart'>
            <div class='container' style="margin-top: 75px;">
                <h2>Your Cart Items</h2>
                <table class='table table-hover checkout'>
                    <tbody>
                    <tr>
                        <th class='text-center'>Name</th>
                        <th class='text-center'>Price</th>
                        <th class='text-right'></th>
                    </tr>
                    <tr v-for="(item, index) in cart" :key="index" class="text-center">
                        <td>{{ item.name }}</td>
                        <td>{{ item.price | currency }}</td>
                        <td>
                            <button
                                    class="btn btn-sm btn-danger"
                                    @click="removeFromCart(index)">
                                &times;
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan='2'>Total</th>
                        <th class='text-center'>{{ total | currency }}</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>


<script>
    import {currency} from './filters'

    export default {
        name: 'cart',
        filters: {
            currency
        },
        computed: {
            inCart() {
                return this.$store.getters.inCart
            },
            numInCart() {
                return this.inCart.length
            },
            cart() {
                return this.$store.getters.inCart.map(cartItem => {
                    return this.$store.getters.forSale.find(forSaleItem => {
                        return cartItem === forSaleItem.invId
                    })
                })
            },
            total() {
                return this.cart.reduce((total, current) => total + current.price, 0)
            }
        },
        methods: {
            removeFromCart(index) {
                this.$store.dispatch('removeFromCart', index)
            }
        }
    }
</script>


<style>

</style>