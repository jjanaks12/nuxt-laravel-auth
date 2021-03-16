<template>
  <div id="wrapper">
    <AppSidebar />
    <main id="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import AppSidebar from "./admin/_partials/Sidebar";

export default {
  components: { AppSidebar },
};
</script>

<style scoped>
#wrapper {
  min-height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
}

#main {
  padding: 30px;
  flex-grow: 1;
}
</style>