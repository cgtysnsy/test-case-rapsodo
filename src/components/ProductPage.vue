<template>
  <v-container
    v-if="isLoading"
    fluid
    class="ma-auto d-flex flex-column justif-center align-center text-center h-100"
  >
    <h1>Loading...</h1>
  </v-container>
  <v-container v-else fluid>
    <v-row>
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
            <v-btn @click="addToCart(product)" class="btn-add"
              >Add to Cart</v-btn
            >
          </v-card-actions>
          <v-card-actions v-else>
            <v-row>
              <v-col cols="12" class="d-flex justify-center align-center">
                <button @click="decreaseQuantity(product)" class="btn-product">
                  -
                </button>

                <input
                  type="number"
                  :value="inputQuantity(product)"
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
    </v-row>
  </v-container>
</template>

<script>
import * as vuex from "vuex";

export default {
  computed: {
    ...vuex.mapState([
      "products",
      "cartItems",
      "isLoading",
      "cartItemsStorage",
    ]),
    products() {
      return this.$store.getters.getData;
    },
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
    inputQuantity(product) {
      const productInputValue = this.cartItemsStorage.find(
        (i) => i.name === product.name
      );
      console.log(" productInputValue.quantity", productInputValue.quantity);
      return productInputValue.quantity;
    },
  },
  created() {
    // this.fetchProducts();
    this.$store.dispatch("initializeCartItemsFromLocalStorage");
  },
  async mounted() {
    await this.$store.dispatch("fetchProducts");
    // Use the data in this.$store.getters.getData
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
