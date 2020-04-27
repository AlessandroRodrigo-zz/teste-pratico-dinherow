<template>
  <v-app>
    <v-content>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
