import VueRouter from 'vue-router'
import Hello from '@/components/Hello.vue'
import Test from '@/components/Test.vue'

function createRouter(): VueRouter {
  const router = new VueRouter({
    mode: 'history',

    routes: [
      {
        path: '/test',
        name: 'TEST',
        component: Test,
      },
      {
        path: '/',
        name: 'Home',
        component: Hello,
      },
    ],
  })

  router.beforeEach((to, from, next) => {
    console.log(to.path)
    next()
  })

  return router
}

export default createRouter
