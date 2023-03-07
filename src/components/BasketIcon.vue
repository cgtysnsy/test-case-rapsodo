<template>
  <v-icon icon="mdi-cart" class="cart-icon" color="orange" value="2" />
</template>
<!-- With store this will be added :value="cartItemCount" -->
<script>
import { VIcon } from "../plugins/vuetify";

export default {
  name: "CartIcon",
  components: {
    VIcon,
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
