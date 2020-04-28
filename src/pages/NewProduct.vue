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
            @submit="cadastrarNovoProduto"
            style="width: 50%;"
            class="mx-auto"
          >
            <v-text-field
              label="Valor"
              v-model="newProduct.value"
            ></v-text-field>
            <v-text-field
              label="Nome"
              v-model="newProduct.title"
            ></v-text-field>
            <v-text-field
              label="Marca"
              v-model="newProduct.marca"
            ></v-text-field>
            <v-file-input label="Foto" v-model="newProduct.foto"></v-file-input>
            <v-card-actions class="d-flex justify-end pa-0">
              <v-btn color="primary" type="submit" depressed>
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
import api from '../services/api';

export default {
  components: {
    Toolbar,
  },
  data: () => ({
    snackbar: false,
    textSnackbar: '',
    colorSnackbar: 'green',
    newProduct: {},
  }),
  methods: {
    cadastrarNovoProduto() {
      api
        .post('https://jsonplaceholder.typicode.com/posts', this.newProduct)
        .then(() => {
          this.textSnackbar = 'Produto cadastrado com sucesso!';
          this.snackbar = true;
          this.newProduct = {};
        })
        .catch(() => {
          this.textSnackbar = 'Houve um problema ao cadastrar o produto!';
          this.colorSnackbar = 'red';
          this.snackbar = true;
        });
    },
  },
};
</script>

<style scoped></style>
