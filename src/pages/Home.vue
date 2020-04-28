<template>
  <div class="d-flex flex-column justify-center">
    <toolbar @handleSearch="handleSearch" />
    <banner />
    <promotion />
    <product :textSearch="textSearch" />
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
  data: () => ({
    textSearch: '',
  }),
  methods: {
    handleSearch(text) {
      this.textSearch = text;
    },
  },
};
</script>
