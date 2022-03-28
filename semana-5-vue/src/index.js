import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Cart from './pages/Cart.vue'
import OrderForm from './pages/OrderForm.vue'
import OrderPlaced from './pages/OrderPlaced.vue'
import Admin from './pages/Admin.vue'
import { createStore } from 'vuex'


export const store = createStore({
  state () {
    return {
      orders: [{
        name: "John Doe",
        phone: "65416516",
        e_mail: "jdoe@mail.com",
        cakes: ["Vietnamese Cream Caramel Flan", "Salted Egg Sponge Cake - Bong Lan Trung Muoi"],
        comments: "test"
      }],
      cache: []
    }
  },
  mutations: {
    addOrder(state, order) {
      state.orders.push(order)
    },
    shiftorder(state){
      state.orders.shift()
    },
    addCache(state, item){
      state.cache.push(item)
    },
    popCache(state){
      state.cache.pop()
    },
    mutateCache(state, func){
      func(state.cache)
    }
  },
  getters: {
    cacheLen(state){ return state.cache.length },
    cache(state) { return state.cache }
  }
})
  let routes
  process.env.NODE_ENV === 'production'
    ? routes = [
      { path: '/Front-End-Mission', component: Home },
      { path: '/Front-End-Mission/cart', component: Cart },
      { path: '/Front-End-Mission/order-form', component: OrderForm },
      { path: '/Front-End-Mission/place-order', component: OrderPlaced },
      { path: '/Front-End-Mission/admin', component: Admin}
    ]
    : routes = [
      { path: '/', component: Home},
      { path: '/cart', component: Cart },
      { path: '/order-form', component: OrderForm },
      { path: '/place-order', component: OrderPlaced },
      { path: '/admin', component: Admin}
    ]

  export const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

