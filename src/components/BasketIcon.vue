<template>
  <router-link to="/basketpage" class="route-link-icon">
    <v-icon
      icon="mdi-cart"
      class="cart-icon"
      :value="cartItemCount"
      color="#c8102e"
    />
  </router-link>
</template>

<script>
import * as vuex from "vuex";

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
.route-link-icon {
  text-decoration: none;
}
.cart-icon:after {
  content: attr(value);
  font-size: 22px;
  color: #c8102e;
  border-radius: 50%;
  padding: 8px;
  position: relative;
  left: -15px;
  top: -28px;
  opacity: 0.9;
  background-color: rgba(0, 0, 0, 0);
  width: 28px;
  height: 28px;
  text-align: center;
}
</style>
