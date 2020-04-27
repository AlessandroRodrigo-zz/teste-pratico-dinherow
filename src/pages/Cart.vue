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
        Seu carrinho {{ productsInCart.length > 0 ? '' : 'está vazio!' }}
      </h1>
      <v-card
        v-for="product in productsInCart"
        :key="product.id"
        class="mx-auto d-flex pa-5"
        max-width="100%"
        width="80%"
        tile
      >
        <img :src="product.image" width="7%" :alt="product.title" />
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
        <div class="d-flex align-center">
          <v-icon
            @click="
              product.amount > 1
                ? REMOVE_PRODUCT_AMOUNT(product.id)
                : removerProduto(product.id)
            "
            class="cursorPointer"
            >mdi-minus-circle-outline</v-icon
          >
          <input
            min="1"
            style="text-align: center;"
            type="number"
            readonly
            v-model="product.amount"
          />
          <v-icon @click="ADD_PRODUCT_AMOUNT(product.id)" class="cursorPointer"
            >mdi-plus-circle-outline</v-icon
          >
        </div>
      </v-card>
      <v-card width="80%" max-width="100%" class="mx-auto" tile>
        <v-card-text>
          <div>Total</div>
          <p class="display-1 text--primary">
            {{ totalProductsInCart | currency }}
          </p>
        </v-card-text>
        <v-card-actions
          v-if="productsInCart.length > 0"
          class="d-flex justify-end"
        >
          <v-btn color="primary" @click="finalizarCompra" depressed>
            Finalizar compra
          </v-btn>
        </v-card-actions>
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
import { mapGetters, mapActions } from 'vuex';
import Toolbar from '../components/Toolbar.vue';

export default {
  data() {
    return {
      snackbar: false,
      textSnackbar: '',
    };
  },
  components: {
    Toolbar,
  },
  computed: {
    ...mapGetters(['productsInCart']),
    totalProductsInCart() {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      if (this.productsInCart.length > 0) {
        return this.productsInCart
          .map((item) => item.value * item.amount)
          .reduce(reducer);
      }
      return null;
    },
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value);
    },
  },
  methods: {
    ...mapActions([
      'REMOVE_PRODUCT_FROM_CART',
      'ADD_PRODUCT_AMOUNT',
      'REMOVE_PRODUCT_AMOUNT',
    ]),
    removerProduto(id) {
      this.REMOVE_PRODUCT_FROM_CART(id);
      this.textSnackbar = 'O produto foi removido';
      this.snackbar = true;
    },
    finalizarCompra() {
      this.textSnackbar = 'Compra finalizada com sucesso!';
      this.snackbar = true;
    },
  },
};
</script>

<style scoped>
.cursorPointer {
  cursor: pointer;
}
</style>
