<template>
  <div class="d-flex justify-center align-center">
    <toolbar />
    <v-layout
      column
      wrap
      class="justify-center align-center"
      style="background: #eee; height: 100vh;"
    >
      <h1 style="width: 50%;" class="mb-5">
        Adicionar novo produto
      </h1>
      <v-card
        width="50%"
        max-width="100%"
        class="mx-auto d-flex flex-column align-center justify-center"
        tile
      >
        <v-card-text>
          <v-form
            @submit.prevent="cadastrarNovoProduto"
            style="width: 50%;"
            class="mx-auto"
          >
            <v-text-field
              label="Valor"
              type="number"
              v-model="newProduct.value"
            ></v-text-field>
            <v-text-field
              label="Nome"
              type="text"
              v-model="newProduct.title"
            ></v-text-field>
            <v-text-field
              label="Descrição"
              type="text"
              v-model="newProduct.description"
            ></v-text-field>
            <v-file-input
              label="Foto"
              v-model="newProduct.image"
            ></v-file-input>
            <v-card-actions class="d-flex justify-end pa-0">
              <v-btn
                :loading="loading"
                :disabled="loading"
                color="primary"
                type="submit"
                depressed
              >
                Cadastrar novo produto
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-layout>
    <v-snackbar :color="colorSnackbar" v-model="snackbar">
      {{ textSnackbar }}
      <v-btn color="white" text @click="snackbar = false">
        Fechar
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import Toolbar from '../components/Toolbar.vue';

export default {
  components: {
    Toolbar,
  },
  data: () => ({
    snackbar: false,
    textSnackbar: '',
    colorSnackbar: 'green',
    newProduct: {},
    loading: false,
  }),
  methods: {
    cadastrarNovoProduto() {
      this.loading = true;
      console.log(this.newProduct);
      const file = new FileReader();
      file.readAsDataURL(this.newProduct.image);
      file.onload = () => {
        this.newProduct.imageBase = file.result;
        const newProducts = sessionStorage.getItem('new/product');
        if (newProducts) {
          const newProductsJson = JSON.parse(newProducts);
          newProductsJson.push(this.newProduct);
          sessionStorage.setItem(
            'new/product',
            JSON.stringify(newProductsJson)
          );
        } else {
          const array = [];
          array.push(this.newProduct);
          sessionStorage.setItem('new/product', JSON.stringify(array));
        }
        this.$router.push('/list/products');
        this.newProduct = {};
        this.loading = false;
      };
    },
  },
};
</script>

<style scoped></style>
