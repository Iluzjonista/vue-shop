<template>
    <div>
        <header class="navbar navbar-expand-lg navbar-light bg-light fixed-top"
                style="box-shadow: 0 0 2px #888888;">
            <div class="container">
                <a class="navbar-brand" href="#/">Vue online-shop</a>
                <span class="app-bar-divider"></span>
                <div class="input-control text">
                    <input id='search' type="text" placeholder="Search..." v-model="filterText">
                </div>
                <router-link :to="'/cart'">
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
                </router-link>
                <div class="dropdown show">
                    <a class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                       data-toggle="dropdown">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tags-fill" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M3 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 7.586 1H3zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                            <path d="M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                        </svg>
                        Category
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item"
                           v-for="(entry, index) in filterList"
                           :item="entry"
                           :key="index"
                           @click="filter = entry; active = index;"
                           :class="{ active: entry == filter }"
                           v-bind:href='"#" + entry'>{{ entry }}</a>
                    </div>
                </div>
            </div>
        </header>
        <section class="container" style="margin-top: 75px">
                <single-page
                        v-for="item in forSale"
                        v-if="item[categories] === filter || filter === 'All'"
                        :key="item.invId"
                        :invId="item.invId"
                        :image="item.image"
                        :name="item.name"
                        :price="item.price"
                        :detail="item.detail"
                        :categories="item.categories"
                        :stock="item.stock"
                ></single-page>
        </section>
    </div>
</template>

<script>
    import Item from './Item.vue'
    import SinglePage from './SinglePage.vue'

    export default {
        name: 'product-page',
        components: {
            Item,
            SinglePage
        },
        data:
            function () {
                return {
                    invId: "invId",
                    categories: "categories",
                    filterList: ["Camera", "Lens", "Accessories", "All"],
                    filter: "All",
                    filterText: null,
                    users: []
                };
            },
        computed: {
            forSale() {
                if (!this.filterText)
                    return this.$store.getters.forSale
                let searchText = this.filterText.toLowerCase()
                return this.$store.getters.forSale.filter(p => {
                    return p.name.toLowerCase().includes(searchText)
                });
            },
            inCart() {
                return this.$store.getters.inCart
            },
            numInCart() {
                return this.inCart.length
            },
        },
        methods: {}
    }
</script>
<style>
    body {
        background-color: #f0efef;
    }

    .input-control input {
        border: 1px solid #F0EFEF;
        border-radius: 10px;
        padding: 5px;
    }

    .main-div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
    }

    .footer-copyright {
        color: #ffffff;
    }
</style>