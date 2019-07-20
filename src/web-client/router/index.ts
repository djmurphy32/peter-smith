import VueRouter from 'vue-router'
import NotFound from '@/components/NotFound.vue'
import HomePage from '@/components/HomePage.vue'

function createRouter(): VueRouter {
  const router = new VueRouter({
    mode: 'history',

    routes: [
      {
        path: '/',
        name: 'Home',
        component: HomePage,
      },
      {
        path: '*',
        name: '404',
        component: NotFound,
      },
    ],
  })

  return router
}

export default createRouter
