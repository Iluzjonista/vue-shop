<template>
    <div class="container" v-if="this.$route.params.id==invId">
        <div class='breadcrumb'>
            <nav aria-label='breadcrumb'>
                <ol class='breadcrumb'>
                    <li class='breadcrumb-item'><a href='#/'>Home</a></li>
                    <li class='breadcrumb-item'><router-link :to="'/product/'+categories">
                        {{ categories }}
                    </router-link></li>
                    <li class='breadcrumb-item active' aria-current='page'>{{name}}</li>
                </ol>
            </nav>
        </div>
        <div class="single product">
            <div>
<!--            <div v-if="forSale">-->
                <div class="image-container">
                    <img :src="image" :alt="name" class="img-fluid">
                </div>
                <h3>{{name}}</h3>
                <p>{{detail}}</p>

                <router-link class="btn btn-outline-dark" :to="'/product/'+categories">
                    {{ categories }}
                </router-link>

<!--                <a v-bind:href='"#/" + categories' @click="$parent.filter = categories"-->
<!--                   :class="{ active: categories == $parent.filter }">{{ categories }}</a>-->

<!--                <a v-bind:href='"/#" + categories' @click="$parent.$parent.filter = categories"-->
<!--                   :class="{ active: categories == $parent.$parent.filter }">{{ categories }}</a>-->

<!--                <a href="././" @click="$parent.filter = categories"-->
<!--                   :class="{ active: categories == $parent.filter }">{{ categories }}</a>-->

<!--                <a class="btn btn-outline-dark" v-bind:href='"././#"+categories' @click="filter = categories">{{ categories }}</a>-->
<!--                <router-link :to="'/'">-->
<!--                    <span @click="filter = 'Accessories';">Accessories</span>-->
<!--                </router-link>-->
                <div class="row" style="margin-top: 25px;">
                    <div class="colors" style="margin-top: 25px;">
                        <button class="btn btn-light" v-on:click="count++">
                            Like {{count}}
                        </button>
                        <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown">Share <span
                                    class="caret"></span></button>
                            <ul class="dropdown-menu">
                                <li><a href="/">Facebook</a></li>
                                <li>
                                    <div class='dropdown-divider'></div>
                                </li>
                                <li><a href="/">Twitter</a></li>
                            </ul>
                        </div>
                        <button
                                class="btn btn-light"
                                @click="addToCart(invId)">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                        </button>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    import {currency} from './filters'
    import Item from "./Item.vue";

    export default {
        name: 'single-page',
        components: {
            Item
        },
        props: ['invId', 'name', 'price', 'image', 'detail', 'stock', 'categories'],
        filters: {
            currency
        },
        data:
            function () {
                return {
                    filterList: ["Camera", "Lens", "Accessories", "All"],
                    filter: "All",
                    count: 0
                };
            },
        computed: {
            forSale() {
                return this.$store.getters.forSale
            }
        },
        methods: {
            addToCart(invId, stock) {
                if (this.stock > 0) {
                    this.$store.dispatch('addToCart', invId, stock)
                    this.$toasted.show(this.name + ' added to cart')
                    this.stock--
                } else {
                    this.$toasted.show(this.name + ' is out of stock')
                }
            }
        }
    }
</script>

<style>
    .product {
        padding: 15px;
        /* border: 1px solid #000000; */
        -webkit-box-shadow: 10px 10px 40px -24px rgba(0, 0, 0, 0.66);
        -moz-box-shadow: 10px 10px 40px -24px rgba(0, 0, 0, 0.66);
        box-shadow: 10px 10px 40px -24px rgba(0, 0, 0, 0.66);
        background-color: white;
    }

    .product h3 {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.5;
        height: 75px;
    }

    .colors {
        display: flex;
        width: 100%;
        justify-content: space-around;
    }

    .colors button {
        height: 40px;
    }

    .dropdown-menu li {
        display: flex;
        justify-content: center;
    }
</style>

