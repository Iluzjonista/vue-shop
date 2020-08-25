import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    forSale: [
      {
        "invId": 1,
        "name": "Leica M10-P",
        "image": "./src/assets/images/Camera-1.jpg",
        "price": 6900,
        "liked": false,
        "detail": "This is description of a product",
        "categories": "Camera",
        "stock": 30,
      },
      {
        "invId": 2,
        "name": "Leica SL2",
        "image": "./src/assets/images/Camera-2.jpg",
        "price": 5300,
        "liked": false,
        "detail": "This is description of a product",
        "categories": "Camera",
        "stock": 30,
      },    {
        "invId": 3,
        "name": "Leica M10-P ASC 100 Edition",
        "image": "./src/assets/images/Camera-3.jpg",
        "price": 16250,
        "liked": false,
        "detail": "This is description of a product",
        "categories": "Camera",
        "stock": 30,
      },    {
        "invId": 4,
        "name": "Leica V-lux 5",
        "image": "./src/assets/images/Camera-4.jpg",
        "price": 1050,
        "liked": false,
        "detail": "This is description of a product",
        "categories": "Camera",
        "stock": 30,
      },    {
        "invId": 5,
        "name": "Leica Q2",
        "image": "./src/assets/images/Camera-5.jpg",
        "price": 9000000,
        "liked": false,
        "detail": "This is description of a product",
        "categories": "Camera",
        "stock": 30,
      },    {
        "invId": 6,
        "name": "Leica CL 100 years Bauhaus",
        "image": "./src/assets/images/Camera-6.jpg",
        "price": 3300,
        "liked": false,
        "detail": "This is description of a product",
        "categories": "Camera",
        "stock": 30,
      },    {
        "invId": 7,
        "name": "Summicron-m 50mm",
        "image": "./src/assets/images/Lens-1.jpg",
        "price": 9000000,
        "liked": false,
        "detail": "This is description of a product",
        "categories": "Lens",
        "stock": 30,
      },    {
        "invId": 8,
        "name": "Apo-Summicron-m 50mm",
        "image": "./src/assets/images/Lens-2.jpg",
        "price": 8100,
        "liked": false,
        "detail": "This is description of a product",
        "categories": "Lens",
        "stock": 30,
      },    {
        "invId": 9,
        "name": "Summaron-m",
        "image": "./src/assets/images/Lens-3.jpg",
        "price": 2600,
        "liked": false,
        "detail": "This is description of a product",
        "categories": "Lens",
        "stock": 30,
      },    {
        "invId": 10,
        "name": "Lens hood with Cap",
        "image": "./src/assets/images/acc-1.jpg",
        "price": 120,
        "liked": false,
        "detail": "This is description of a product",
        "categories": "Accessories",
        "stock": 10,
      }
    ],
    inCart: []
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart
  },
  mutations: {
    ADD_TO_CART(state, invId, stock) {
      state.inCart.push(invId)
      state.forSale.push(stock--)
    },
    REMOVE_FROM_CART(state, index) {
      state.inCart.splice(index, 1)
    },
    products(state, payload){
      state.forSale = payload;
    }
  },
  actions: {
    addToCart(context, invId) {
      context.commit('ADD_TO_CART', invId)
    },
    removeFromCart(context, index) {
      context.commit('REMOVE_FROM_CART', index)
    }
  }
})
