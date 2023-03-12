<template>
  <v-container class="pa-0">
    <v-row no-gutters>
      <v-col cols="12" md="9">
        <v-row
          no-gutters
          justify="space-between"
          class="my-6 bg-grey-lighten-3"
        >
          <v-col cols="5">
            <v-card-title>Products</v-card-title>
          </v-col>
          <v-col cols="4" class="pt-2">
            <router-link to="/" class="back-router">
              &lt; Continue Shopping
            </router-link>
          </v-col>
        </v-row>

        <v-row no-gutters class="m-4">
          <v-col cols="12" v-if="cart.length === 0">
            <h2>Your basket is empty.</h2>
          </v-col>

          <v-col
            class="basket-item"
            cols="12"
            v-else
            v-for="basketItem in cartItemsStorage"
            :key="basketItem.id"
          >
            <v-row no-gutters>
              <v-col cols="12" md="4">
                <v-img
                  width="240"
                  height="240"
                  :src="basketItem.imageUrl"
                  alt="240x240"
                  cover
                  class="mx-auto product-image"
                />
              </v-col>
              <v-col
                cols="12"
                md="3"
                class="mt-10 my-auto pl-2 $vuetify.breakpoint.xl ? 'text-left' : 'text-center'"
              >
                <h3>{{ basketItem.name }}</h3>
                <p>Size: {{ basketItem.size }}</p>
                <p>Color: {{ basketItem.color }}</p>
                <p class="price">${{ basketItem.amount }}</p>
              </v-col>
              <v-col cols="12" md="3" class="ma-auto">
                <v-btn
                  @click="decreaseQuantity(basketItem)"
                  class="d-block w-100 my-4 pl-2 basket-btn"
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
                  class="d-block w-100 my-4 pl-2 basket-btn"
                  >+</v-btn
                >
              </v-col>
              <v-col md="2" class="ma-auto text-center">
                <v-icon color="red" @click="removeFromCart(basketItem)">
                  mdi-delete
                </v-icon>
              </v-col>
            </v-row>
            <v-divider class="my-4" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3" class="mt-6">
        <v-row no-gutters justify="center" class="bg-grey-lighten-3">
          <v-card-title>Subtotal</v-card-title>
        </v-row>
        <v-row no-gutters justify="center" class="mt-8">
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
    ...vuex.mapState(["cartItems", "cartItemsStorage"]),

    cart() {
      return this.$store.state.cartItemsStorage;
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
    removeFromCart(product) {
      this.$store.dispatch("removeFromCart", product);
      this.$store.dispatch("open", "Product removed from basket");
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
.basket-btn {
  color: white;
  background-color: #c8102e;
  opacity: 0.8;
}
</style>
