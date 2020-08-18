import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/base/login'
  },
  {
    path: '/base',
    name: 'base',
    component: () => import('../views/Base'),
    redirect: '/base/login',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
