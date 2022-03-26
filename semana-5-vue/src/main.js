import { createApp } from 'vue'
import App from './App.vue'
import { router, store } from './index'
console.log(store);

createApp(App).use(store).use(router).mount('#app')
  