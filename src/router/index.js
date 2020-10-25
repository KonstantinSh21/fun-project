import Vue from 'vue'
import VueRouter from 'vue-router'

import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import PageThree from '../views/PageThree.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
  },
  {
    path: '/pageone',
    name: 'PageOne',
    component: PageOne
  },
  {
    path: '/pagetwo',
    name: PageTwo,
    component: () => import( '../views/PageTwo.vue')
  }, 
  {
    path: '/pagethree',
    name: PageThree,
    component: () => import( '../views/PageThree.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
