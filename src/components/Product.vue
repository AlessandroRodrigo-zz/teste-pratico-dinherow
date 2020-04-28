<template>
  <v-layout
    row
    wrap
    class="justify-start align-start mt-10 mx-auto"
    style="max-width: 1400px;"
  >
    <v-flex v-for="product in filteredProducts" :key="product.id" xs10 md4>
      <v-card outlined height="100%" class="ma-3 pa-0">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="product.image"
        >
        </v-img>
        <v-card-title class="text--primary">{{ product.title }}</v-card-title>

        <v-card-text class="text--primary mb-auto">
          {{ product.description }}
        </v-card-text>

        <v-card-title class="text-- mb-auto">
          {{ product.value | currency }}
        </v-card-title>

        <v-card-actions class="flex-column pa-3 mt-auto">
          <v-btn
            depressed
            class="ml-0"
            width="100%"
            @click="handleAddProduct(product)"
            color="primary"
            >Adicionar ao carrinho</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-flex>
    <div v-if="filteredProducts.length <= 0">
      <h3>Nenhum resultado</h3>
    </div>
    <v-snackbar color="green" v-model="snackbar">
      Produto adicionado com sucesso
      <v-btn color="white" text @click="snackbar = false">
        Fechar
      </v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import api from '../services/api';
import currency from '../services/filter';

export default {
  props: {
    textSearch: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      products: [],
      filteredProducts: [],
      snackbar: false,
    };
  },
  watch: {
    textSearch() {
      if (this.textSearch) {
        this.filteredProducts = this.products.filter((item) =>
          item.title.toLowerCase().includes(this.textSearch)
        );
      } else {
        this.filteredProducts = this.products;
      }
    },
  },
  computed: {
    ...mapGetters(['productsInCart']),
  },
  filters: {
    currency,
  },
  methods: {
    ...mapActions(['ADD_PRODUCT_IN_CART']),
    async loadProducts() {
      const response = await api.get('/products');

      this.products = response.data.map((item) => ({
        ...item,
        amount: 1,
      }));
      this.filteredProducts = this.products;
    },
    handleAddProduct(product) {
      this.ADD_PRODUCT_IN_CART(product);
      this.snackbar = true;
    },
  },
  mounted() {
    this.loadProducts();
  },
};
</script>
