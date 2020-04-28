<template>
  <div
    style="position: fixed; background: #fff; width: 100%; top: 0; z-index: 5;"
  >
    <v-row
      class="justify-start mx-auto align-center py-5"
      style="max-width: 1500px;"
    >
      <router-link to="/home" style="width: 30%;">
        <img src="../assets/ansible.svg" width="15%" alt="Logo" class="mr-5" />
      </router-link>
      <div class="d-flex ml-auto align-baseline">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn class="mr-5 d-flex align-center" text v-on="on">
              Produto
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="() => $router.push('/list/products')">
              <v-list-item-title>Ver produtos cadastrados</v-list-item-title>
            </v-list-item>
            <v-list-item @click="() => $router.push('/new/product')">
              <v-list-item-title>Cadastrar novo produto</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <router-link to="/cart">
          <v-badge
            color="primary"
            class="mr-10"
            :content="productsInCart.length ? productsInCart.length : '0'"
          >
            <v-icon class="cursorPointer">mdi-cart</v-icon>
          </v-badge>
        </router-link>
        <v-text-field
          type="text"
          label="Pesquisar..."
          v-model="textSearch"
          @change="handleSearch"
          append-icon="mdi-magnify"
          style="max-width: 300px;"
        />
      </div>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['productsInCart']),
  },
  data: () => ({
    textSearch: '',
  }),
  methods: {
    handleSearch() {
      this.$emit('handleSearch', this.textSearch);
    },
  },
};
</script>

<style scoped>
.cursorPointer {
  cursor: pointer;
}
</style>
