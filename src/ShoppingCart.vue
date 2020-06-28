<template>
    <div>
        <button
                class="btn btn-light"
                data-toggle="modal"
                data-target="#shoppingCart">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            </svg> Cart ({{ numInCart }})
        </button>

        <div id="shoppingCart" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor"
                                                     xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg> Shopping cart</h5>
                        <button class="close" data-dismiss="modal">
                            &times;
                        </button>
                    </div>
                    <div class="modal-body">
                        <table class="table">
                            <tbody>
                            <tr v-for="(item, index) in cart" :key="index">
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
                                <th></th>
                                <th>{{ total | currency }}</th>
                                <th></th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
                        <button class="btn btn-primary" data-dismiss="modal">Check out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {currency} from './filters'

    export default {
        name: 'shopping-cart',
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
    .modal-backdrop.fade.show{
        display: none;
    }
</style>