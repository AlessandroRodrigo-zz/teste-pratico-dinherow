<template>
  <div class="fill-height d-flex">
    <v-col cols="4" class="pa-0 d-flex flex-column justify-center align-center">
      <img src="../assets/ansible.svg" width="15%" alt="" />
      <v-form @submit="handleSubmit" class="width70 mt-5">
        <v-text-field type="email" label="E-mail" />
        <v-text-field
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
        <v-btn color="primary" type="submit" large class="width100" depressed
          >Logar</v-btn
        >
      </v-form>
    </v-col>
    <v-col class="pa-0 imgLeft" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    handleSubmit() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style lang="css" scoped>
.imgLeft {
  background: no-repeat center
    url('https://images.unsplash.com/photo-1470526446583-d0fe2363d8cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
}

.width70 {
  width: 70%;
}

.width100 {
  width: 100%;
}
</style>
