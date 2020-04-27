import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from './pages/Home.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

export default router