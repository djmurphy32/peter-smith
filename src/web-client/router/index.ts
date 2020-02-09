import VueRouter from 'vue-router'
import NotFound from '@/router/pages/NotFound.vue'
import HomePage from '@/router/pages/HomePage.vue'
import Portfolio from '@/router/pages/Portfolio.vue'
import { Page } from './Page'

function createRouter(): VueRouter {
  const router = new VueRouter({
    mode: 'history',

    routes: [
      {
        path: '/portfolio',
        name: Page.Portfolio,
        component: Portfolio,
      },
      {
        path: '/',
        name: Page.Home,
        component: HomePage,
      },
      {
        path: '*',
        name: Page.NotFound,
        component: NotFound,
      },
    ],
  })

  return router
}

export default createRouter
