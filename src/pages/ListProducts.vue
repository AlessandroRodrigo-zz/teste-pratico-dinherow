<template>
  <div class="d-flex justify-center align-center">
    <toolbar />
    <v-layout
      column
      wrap
      class="justify-center align-center"
      style="background: #eee; height: 100vh;"
    >
      <h1 style="width: 80%;" class="mb-5">
        {{
          productsInCart.length > 0
            ? 'Você não tem items cadastrados!'
            : 'Seus items'
        }}
      </h1>
      <v-card
        v-for="(product, index) in products"
        :key="index"
        :index="index"
        class="mx-auto d-flex pa-5"
        max-width="100%"
        width="80%"
        tile
      >
        <img :src="product.imageBase" width="20%" :alt="product.title" />
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>{{ product.title }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ product.description }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              {{ product.value | currency }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <div>
          <v-icon @click="deletarItem(index)">mdi-delete</v-icon>
        </div>
      </v-card>
      <v-card width="80%" max-width="100%" class="mx-auto" tile>
        <v-card-text>
          <div>Total</div>
          <p class="display-1 text--primary">
            {{ totalProductsInCart | currency }}
          </p>
        </v-card-text>
      </v-card>
    </v-layout>
    <v-snackbar color="green" v-model="snackbar">
      {{ textSnackbar }}
      <v-btn color="white" text @click="snackbar = false">
        Fechar
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Toolbar from '../components/Toolbar.vue';
import currency from '../services/filter';

export default {
  data() {
    return {
      products: [],
    };
  },
  components: {
    Toolbar,
  },
  computed: {
    ...mapGetters(['productsInCart']),
    totalProductsInCart() {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      if (this.products.length > 0) {
        return this.products.map((item) => item.value * 1).reduce(reducer);
      }
      return null;
    },
  },
  filters: {
    currency,
  },
  methods: {
    loadProducts() {
      const productsJson = sessionStorage.getItem('new/product');
      this.products = JSON.parse(productsJson);
    },
    deletarItem(index) {
      this.products.splice(index, 1);
      const productsJson = JSON.stringify(this.products);
      sessionStorage.setItem('new/product', productsJson);
    },
  },
  mounted() {
    this.loadProducts();
  },
};
</script>

<style scoped>
.cursorPointer {
  cursor: pointer;
}
</style>
