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
      cakes: ["test"]
    }
  },
  mutations: {
    addCake(state, cake) {
      state.cakes.push(cake)
    },
    shiftCake(state){
      state.cakes.shift()
    }
  }
})

  const routes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/order-form', component: OrderForm },
    { path: '/place-order', component: OrderPlaced },
    { path: '/admin', component: Admin}
  ]

  export const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

