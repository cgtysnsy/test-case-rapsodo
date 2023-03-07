<template>
  <v-col
    v-for="product in products"
    :key="product.name"
    cols="12"
    sm="6"
    md="4"
    lg="3"
  >
    <v-card class="mx-auto" max-width="240" :product="product">
      <v-img
        class="align-end text-black"
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
        <v-btn>Add to Cart</v-btn>
      </v-card-actions>
      <v-card-actions v-else>
        <v-row>
          <v-col cols="12" class="d-flex justify-center align-center">
            <button>-</button>

            <button class="btn-product">+</button>
          </v-col>
        </v-row></v-card-actions
      >
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          amount: 125,
          color: "Black",
          name: "Product-1",
          size: "XL",
          stock: 2,
        },
        {
          amount: 55,
          color: "Green",
          name: "Product-2",
          size: "L",
          stock: 4,
        },
        {
          amount: 25,
          color: "Red",
          name: "Product-3",
          size: "XXL",
          stock: 0,
        },
        {
          amount: 65,
          color: "Yellow",
          name: "Product-4",
          size: "S",
          stock: 8,
        },
        {
          amount: 15,
          color: "Gray",
          name: "Product-5",
          size: "M",
          stock: 1,
        },
        {
          amount: 5,
          color: "Blue",
          name: "Product-6",
          size: "L",
          stock: 0,
        },
      ],
    };
  },
};
//this data will be used for just for mock.
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
.card-image {
  background-color: orange;
}
</style>
