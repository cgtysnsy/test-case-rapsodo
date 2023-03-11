<template>
  <router-link to="/basketpage" class="route-link">
    <v-icon
      icon="mdi-cart"
      class="cart-icon"
      :value="cartItemCount"
      color="orange"
    />
  </router-link>
</template>

<script>
import * as vuex from "vuex";
// import { VIcon } from "../plugins/vuetify.js";

export default {
  computed: {
    ...vuex.mapState(["cartItems", "cartItemsStorage"]),
    cartItemCount() {
      return this.cartItemsStorage.length;
    },
  },
};
</script>

<style scoped>
.cart-icon {
  font-size: 40px;
}
.cart-icon:after {
  content: attr(value);
  font-size: 16px;
  color: white;
  border-radius: 50%;
  padding: 8px;
  position: relative;
  left: -18px;
  top: -18px;
  opacity: 0.9;
  background-color: grey;
  width: 28px;
  height: 28px;
  text-align: center;
}
</style>
