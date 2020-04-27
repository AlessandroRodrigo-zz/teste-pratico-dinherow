import VueRouter from 'vue-router';
import Vue from 'vue';

import Home from './pages/Home.vue';
import Login from './pages/Login.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});

export default router;
