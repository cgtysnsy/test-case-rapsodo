<template>
  <v-container class="app">
    <v-row no-gutters justify="end" class="my-10">
      <router-link to="/basketpage" class="route-link">
        <BasketIcon />
      </router-link>
    </v-row>
    <v-row no-gutter>
      <router-link to="/" class="route-link"></router-link>
      <router-view></router-view>
    </v-row>
  </v-container>
</template>

<script>
// import ProductPage from "./components/ProductPage.vue";
import BasketIcon from "./components/BasketIcon.vue";
// import BasketPage from "./components/BasketPage.vue";

export default {
  name: "App",
  components: {
    // ProductPage,
    BasketIcon,
    // BasketPage,
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  max-width: 1260px;
  min-width: 240px;
}
.route-link {
  text-decoration: none;
}
</style>
