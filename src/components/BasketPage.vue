<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" md="9">
        <v-row no-gutters justify="space-between" class="my-6">
          <v-col cols="5">
            <v-card-title>Products</v-card-title>
          </v-col>
          <v-col cols="4">
            <router-link to="/" class="back-router">
              &lt; Continue Shopping
            </router-link>
          </v-col>
        </v-row>

        <v-row no-gutters class="m-4">
          <v-col cols="12" v-if="cart.length === 0">
            <p>Your basket is empty.</p>
          </v-col>

          <v-col
            cols="12"
            v-else
            v-for="basketItem in cartItems"
            :key="basketItem.id"
          >
            <v-row no-gutters>
              <v-col cols="12" md="4">
                <v-img
                  width="240"
                  height="240"
                  src="https://wiki.kerbalspaceprogram.com/images/c/ce/Image_needed.svg"
                  alt="240x240"
                  cover
                  class="mx-auto product-image"
                />
              </v-col>
              <v-col cols="12" md="5" class="mt-10 my-auto">
                <h3>{{ basketItem.name }}</h3>
                <p>Size: {{ basketItem.size }}</p>
                <p>Color: {{ basketItem.color }}</p>
                <p class="price">${{ basketItem.amount }}</p>
              </v-col>
              <v-col cols="12" md="3" class="ma-auto">
                <v-btn
                  @click="decreaseQuantity(basketItem)"
                  class="d-block w-100 my-4 pl-2"
                  >-</v-btn
                >

                <input
                  type="number"
                  :value="basketItem.quantity"
                  @input="updateQuantity(basketItem, $event.target.value)"
                  class="d-block w-100 input-group"
                />

                <v-btn
                  @click="increaseQuantity(basketItem)"
                  class="d-block w-100 my-4 pl-2"
                  >+</v-btn
                >
              </v-col>
            </v-row>
            <v-divider class="my-4" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3">
        <v-row no-gutters justify="center">
          <v-card-title>Subtotal</v-card-title>
        </v-row>
        <v-row no-gutters justify="center">
          <h2>${{ total }}</h2>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as vuex from "vuex";

export default {
  name: "BasketPage",
  computed: {
    ...vuex.mapState(["cartItems"]),

    cart() {
      return this.$store.state.cartItems;
    },

    total() {
      let sum = 0;
      for (let i = 0; i < this.cart.length; i++) {
        sum += this.cart[i].amount * this.cart[i].quantity;
      }
      return sum;
    },
  },
  methods: {
    ...vuex.mapMutations([
      "increaseQuantity",
      "decreaseQuantity",
      "removeFromCart",
      "updateQuantity",
    ]),
    subtotal(item) {
      return item.amount * item.quantity;
    },
    updateQuantity(item, quantity) {
      this.$store.commit("updateQuantity", { item, quantity });
    },
  },
};
</script>

<style scoped>
.back-router {
  text-decoration: none;
  color: rgb(0, 140, 255);
}
.input-group {
  border: 1px solid lightgrey;
  text-align: center;
  padding: 8px;
}
.price {
  color: green;
}
.product-image {
  background-color: orangered;
}
</style>
