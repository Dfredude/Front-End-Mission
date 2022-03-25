import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Cart from './pages/Cart.vue'
import OrderForm from './pages/OrderForm.vue'

// 1. Define route components.

  // 2. Define some routes
  // Each route should map to a component.
  // We'll talk about nested routes later.
  const routes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/order-form', component: OrderForm },
    { path: '/place-order', component: Cart}
  ]

  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the  history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

  // 5. Create and mount the root instance.
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  // app.use(router)
  export default router
