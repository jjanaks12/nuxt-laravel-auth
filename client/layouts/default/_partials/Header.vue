<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">Nuxt - Laravel</b-navbar-brand>

    <b-navbar-nav class="ml-auto">
      <nuxt-link to="/" tag="b-nav-item">Home</nuxt-link>
      <nuxt-link to="/about" tag="b-nav-item">About</nuxt-link>
      <nuxt-link to="/contact" tag="b-nav-item">Contact Us</nuxt-link>
      <template v-if="!isLoggedin">
        <b-nav-item to="/login">Login</b-nav-item>
      </template>
      <template v-else>
        <b-nav-item to="/dashboard">Dashboard</b-nav-item>
        <b-nav-item @click.prevent="logout">Logout</b-nav-item>
      </template>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      isLoggedin: "auth/check",
    }),
  },

  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script> 