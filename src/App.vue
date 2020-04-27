<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['VERIFY_STORAGE']),
    verificarStorage() {
      const storage = sessionStorage.getItem('store');

      const storageJson = JSON.parse(storage);

      if (storage) {
        this.VERIFY_STORAGE(storageJson);
      }
    },
  },
  beforeMount() {
    this.verificarStorage();
  },
};
</script>
