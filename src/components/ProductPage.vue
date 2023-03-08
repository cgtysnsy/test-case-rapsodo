<template>
  <v-col
    v-for="product in products"
    :key="product.id"
    cols="12"
    sm="6"
    md="4"
    lg="3"
  >
    <v-card class="mx-auto" max-width="240" :product="product">
      <v-img
        class="align-end text-black product-image"
        width="240"
        height="240"
        src="https://wiki.kerbalspaceprogram.com/images/c/ce/Image_needed.svg"
        alt="240x240"
        cover
      >
      </v-img>

      <v-card-title>{{ product.name }}</v-card-title>

      <v-card-text>
        <p>Size: {{ product.size }}</p>
        <p class="my-2">Color: {{ product.color }}</p>
        <p>${{ product.amount }}</p>
      </v-card-text>

      <v-card-actions v-if="!product.showInput">
        <v-btn @click="addToCart(product)" class="btn-add">Add to Cart</v-btn>
      </v-card-actions>
      <v-card-actions v-else>
        <v-row>
          <v-col cols="12" class="d-flex justify-center align-center">
            <button @click="decreaseQuantity(product)" class="btn-product">
              -
            </button>

            <input
              type="number"
              v-model="product.quantity"
              @change="updateQuantity(product, $event.target.value)"
              class="d-block input-product"
            />

            <button @click="increaseQuantity(product)" class="btn-product">
              +
            </button>
          </v-col>
        </v-row></v-card-actions
      >
    </v-card>
  </v-col>
</template>

<script>
import * as vuex from "vuex";

export default {
  computed: {
    ...vuex.mapState(["products", "cartItems"]),
  },
  methods: {
    ...vuex.mapActions([
      "fetchProducts",
      "addToCart",
      "removeFromCart",
      "increaseQuantity",
      "decreaseQuantity",
      "updateQuantity",
    ]),
    updateQuantity(item, quantity) {
      this.$store.commit("updateQuantity", { item, quantity });
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
.btn-add {
  width: 100%;
  color: rgba(168, 127, 52, 0.731);
  border: 0.5px solid black;
  background-color: lightgray;
  border-radius: 10px;
  text-align: center;
}
.btn-product {
  font-size: 1.5rem;
  margin: 0 0.8rem;
  border: none;
  cursor: pointer;
}
.input-product {
  border: 1px solid lightgrey;
  text-align: center;
  width: 100px;
}
.product-image {
  background-color: orangered;
}
</style>
