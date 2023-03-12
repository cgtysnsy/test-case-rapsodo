<template>
  <v-container class="app">
    <v-row no-gutters justify="end" class="my-10">
      <router-link to="/basketpage" class="route-link-basketpage">
        <BasketIcon />
      </router-link>
      <TipModal />
    </v-row>
    <v-row no-gutter>
      <router-link to="/" class="route-link-home"></router-link>
      <router-view></router-view>
    </v-row>
  </v-container>
</template>

<script>
import BasketIcon from "./components/BasketIcon.vue";
import TipModal from "./components/TipModal.vue";

export default {
  name: "App",
  components: {
    TipModal,
    BasketIcon,
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
.route-link-basketpage,
.route-link-home {
  text-decoration: none;
}
</style>
