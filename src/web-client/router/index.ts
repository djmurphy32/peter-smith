import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/router/pages/NotFound.vue'
import HomePage from '@/router/pages/HomePage.vue'
import { Page } from './Page'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    // {
    //   path: '/portfolio',
    //   name: Page.Portfolio,
    //   component: Portfolio,
    // },
    {
      path: '/',
      name: Page.Home,
      component: HomePage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: Page.NotFound,
      component: NotFound,
    },
  ],
})

export default router
