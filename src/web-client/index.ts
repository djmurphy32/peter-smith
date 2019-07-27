import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import createRouter from '@/router'
import VueCarousel from 'vue-carousel'

Vue.use(VueRouter)
Vue.use(VueCarousel)

const router = createRouter()

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
