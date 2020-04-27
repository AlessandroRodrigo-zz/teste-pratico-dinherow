<template>
  <div class="d-flex flex-column justify-center">
    <toolbar />
    <banner />
    <promotion />
    <product />
  </div>
</template>

<script>
import Toolbar from '../components/Toolbar.vue';
import Banner from '../components/Banner.vue';
import Promotion from '../components/Promotion.vue';
import Product from '../components/Product.vue';

export default {
  components: {
    Toolbar,
    Banner,
    Promotion,
    Product,
  },
};
</script>
