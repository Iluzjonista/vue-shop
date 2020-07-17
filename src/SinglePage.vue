<template>
    <div class="container" v-if=" this.$route.params.id==invId">
        <div class='breadcrumb'>
            <nav aria-label='breadcrumb'>
                <ol class='breadcrumb'>
                    <li class='breadcrumb-item'><a href='#/'>Home</a></li>
                    <li class='breadcrumb-item' aria-current='page'>Products</li>
                    <li class='breadcrumb-item active' aria-current='page'>{{name}}</li>
                </ol>
            </nav>
        </div>
        <div class="single">
            <div class="image-container">
                <img :src="image" :alt="name" class="img-fluid">
            </div>
            <div v-if="forSale"><h1>{{name}}</h1>
                <p>{{invId}}a</p>
                <h2 v-if=" this.$route.params.id==invId">{{invId}}</h2>
                <a v-bind:href='"/#" + categories' @click="$parent.$parent.filter = categories"
                   :class="{ active: categories == $parent.$parent.filter }">{{ categories }}</a>
                <a v-bind:href='"/#" + categories' @click="$parent.filter = categories"
                   :class="{ active: categories == $parent.filter }">{{ categories }}</a>
                <a href="././" @click="$parent.filter = categories"
                   :class="{ active: categories == $parent.filter }">{{ categories }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import {currency} from './filters'

    export default {
        name: 'single-page',
        props: ['invId', 'name', 'price', 'image', 'detail', 'stock', 'categories'],
        filters: {
            currency
        },
        data:
            function () {
                return {
                    categories: "categories",
                    filterList: ["Camera", "Lens", "Accessories", "All"],
                    filter: "All",
                    filterText: null,
                    users: []
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

