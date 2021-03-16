<template>
  <aside id="sidebar" class="bg-info">
    <b-navbar-brand to="/dashboard">Nuxt - Laravel</b-navbar-brand>
    <ul class="menu">
      <li><a href="#">link</a></li>
      <li><a href="#">link</a></li>
      <li><a href="#">link</a></li>
    </ul>
    <nuxt-link to="/" class="home-link">Home</nuxt-link>
    <a href="#" class="logout" @click.prevent="logout">Logout</a>
  </aside>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style scoped>
#sidebar {
  flex-grow: 0;
  flex-shrink: 0;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}

.menu {
  text-transform: capitalize;
  list-style: none;
  flex-grow: 1;
  padding: 0;
  margin: 0;
  border-top: 1px solid white;
}

.navbar-brand {
  color: white;
  text-align: center;
  display: block;
  margin-bottom: 30px;
}

.menu li {
  border-bottom: 1px solid white;
}

.menu a {
  color: white;
  display: block;
  padding: 10px;
}

.home-link,
.logout {
  color: white;
  padding: 10px;
}
</style>