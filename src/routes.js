import VueRouter from 'vue-router';
import Vue from 'vue';

import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Cart from './pages/Cart.vue';
import NewProduct from './pages/NewProduct.vue';
import ListProducts from './pages/ListProducts.vue';

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
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/new/product',
      name: 'newProduct',
      component: NewProduct,
    },
    {
      path: '/list/products',
      name: 'listProducts',
      component: ListProducts,
    },
  ],
});

export default router;
