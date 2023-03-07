<template>
  <v-container fluid class="app">
    <v-row no-gutters justify="end my-10">
      <BasketIcon />
      <h1>hellooo</h1>
    </v-row>
    <v-row no-gutter>
      <ProductPage />
      <BasketPage />
    </v-row>
  </v-container>
</template>

<script>
import ProductPage from "./components/ProductPage.vue";
import BasketIcon from "./components/BasketIcon.vue";
import BasketPage from "./components/BasketPage.vue";

export default {
  name: "App",
  components: {
    ProductPage,
    BasketIcon,
    BasketPage,
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
}
</style>
