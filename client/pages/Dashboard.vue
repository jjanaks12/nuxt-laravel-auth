<template>
  <b-card title="Auth User" tag="article">
    <b-card-text>
      <strong>{{ userDetail.name }}</strong>
      <em>{{ userDetail.email }}</em>
    </b-card-text>
  </b-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  layout: "admin",
  middleware: "auth",

  head: {
    title: "Nuxt - laravel :: Dashboard",
  },

  computed: {
    ...mapGetters({
      userDetail: "auth/user",
    }),
  },
};
</script>

<style scoped>
strong {
  font-size: 170%;
  display: block;
}

em {
  font-style: normal;
}
</style>